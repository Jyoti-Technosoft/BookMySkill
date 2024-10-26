const jwt = require("jsonwebtoken");

const SignUpModel = require("../models/RegistrationModel");

const checkAdminToken = async (req, res, next) => {
	try {
		const token = req.headers["authorization"];
		if (!token) {
			return res
				.status(401)
				.json({ error: "Unauthorized - Token missing" });
		}
		const decodedToken = jwt.verify(token, "77885566");
		const userRole = decodedToken.role;
		if (userRole === "admin") {
			const checkToken = await SignUpModel.findOne({
				token: token,
			}).populate("position", "role");
			if (checkToken) {
				const empid = checkToken.empId;
				const role = checkToken.position.role;
				const empname = checkToken.firstName;
				req.empId = empid;
				req.curentRole = role;
				req.empName = empname;
				next();
			} else {
				return res.status(403).json({ error: "Token Expired." });
			}
		} else if (userRole === "employee") {
			return res.status(403).json({ error: "Forbidden - Invalid token" });
		}
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(403).json({ error: "Token Expired." });
		} else if (error instanceof jwt.JsonWebTokenError) {
			return res.status(403).json({ error: "Forbidden - Invalid token" });
		}
		// console.log("Error decoding token:", error.message);

		return res.status(500).json({ error: "Server error" });
	}
};

const checkCommonToken = async (req, res, next) => {
	try {
		const token = req.headers["authorization"];
		if (!token) {
			return res
				.status(401)
				.json({ error: "Unauthorized - Token missing" });
		}
		const decodedToken = jwt.verify(token, "77885566");
		if (decodedToken) {
			const checkToken = await SignUpModel.findOne({
				token: token,
			});
			if (checkToken) {
				const empname = checkToken.firstName;
				req.empName = empname;
				next();
			} else {
				return res.status(403).json({ error: "Token Expired." });
			}
		} else {
			return res.status(403).json({ error: "Forbidden - Invalid token" });
		}
	} catch (error) {
		if (error instanceof jwt.TokenExpiredError) {
			return res.status(403).json({ error: "Token Expired." });
		} else if (error instanceof jwt.JsonWebTokenError) {
			return res.status(403).json({ error: "Forbidden - Invalid token" });
		}
		// console.log("Error decoding token:", error.message);
		return res.status(500).json({ error: "Server error" });
	}
};

exports.checkAdminToken = checkAdminToken;
exports.checkCommonToken = checkCommonToken;