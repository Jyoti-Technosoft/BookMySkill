const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const SignUpModel = require("../../models/RegistrationModel");

const userSignUp = async (req, res) => {
    const { firstName, email, phoneNumber, password } = req.body;
    try {
        const checkUserAlreadyExist = await SignUpModel.findOne({
            email: email,
        });
        if (checkUserAlreadyExist) {
            return res
                .status(409)
                .json({ status: 409, message: "Account with this Email already exist." });
        } else {
            const hashedPassword = await bcrypt.hash(password, 10);
            const newSignUp = new SignUpModel({
                firstName: firstName,
                email: email,
                // phoneNumber: phoneNumber,
                password: hashedPassword,
                // status: "Active",
            });
            const newRegistration = await newSignUp.save();
            res.status(200).json({ status: 200, message: "Registeration successful." });
        }
    } catch (error) {
        console.error("Error in registeration :", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const userLogin = async (req, res) => {
    const { email, password } = req.body;
    try {
        const checkUser = await SignUpModel.findOne({ email });
        if (!checkUser) {
            return res.status(404).json({ message: "User not exist." });
        }
        if (checkUser.status !== "Active") {
            return res.status(401).json({ message: "Contact Higher authority." });
        }
        // Compare  password with the hashed password
        const passwordMatch = await bcrypt.compare(
            password,
            checkUser.password
        );
        const secretKey = "77885566";
        if (passwordMatch) {
            const token = jwt.sign({ userId: checkUser._id }, secretKey, {
                expiresIn: "12h",
            });
            checkUser.token = token;
            await checkUser.save();
            return res.status(200).json({
                message: "Login successful.",
                User: checkUser,
            });
        } else {
            return res
                .status(401)
                .json({ message: "Invalid Credentials. Please try again." });
        }
    } catch (error) {
        console.error("Error during login:", error);
        res
            .status(500)
            .json({ message: "No response from server. Please try again." });
    }
}

const userLogout = async (req, res) => {
    const token = req.headers["authorization"];

    try {
        const decodedToken = jwt.verify(token, "77885566");
        if (!decodedToken) {
            return res.status(403).json({ error: "Forbidden - Invalid token" });
        }
        const user = await SignUpModel.findById(decodedToken.userId);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }

        user.token = null;
        await user.save();

        return res.status(200).json({ message: "Logout successful." });
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            return res.status(403).json({ error: "Token Expired." });
        } else if (error instanceof jwt.JsonWebTokenError) {
            return res.status(403).json({ error: "Forbidden - Invalid token" });
        }
        console.error("Error during logout:", error);
        return res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = {
    userSignUp,
    userLogin,
    userLogout
};
