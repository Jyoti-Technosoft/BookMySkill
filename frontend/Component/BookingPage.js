import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { Layout, Text, Divider, Icon } from "@ui-kitten/components";

export default function BookingPage() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const increment = (setter, value) => {
    setter(value + 1);
  };

  const decrement = (setter, value) => {
    if (value > 0) {
      setter(value - 1);
    }
  };

  const BottomBar = () => {
    return (
      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.clearAllButton}>
          <Text style={styles.clearAllButtonText}>Clear all</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.searchButton}>
          {/* <Image
            style={styles.searchIcon}
            source={require("../public/images/serachicon-whiteimg.png")}
          /> */}
          <Icon
            name='search-outline'
            style={styles.searchIcon}
            fill="white"
          />
          <Text style={styles.searchButtonText}>Search</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        <View style={styles.headercloseicon}>
          <Icon
            name="close-outline"
            style={styles.closeIcon}
            fill="#9194a3"
            onPress={() => { }}
          />
        </View>
        <View>
          <View style={styles.locationDateContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Location</Text>
              <TouchableOpacity
                style={styles.addLocationButton}
                onPress={() => { }}
              >
                <Text style={styles.cardButtonText}>Seminayak, Bali</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.locationDateContainer}>
            <View style={styles.cardContent}>
              <Text style={styles.cardText}>Date</Text>
              <TouchableOpacity style={styles.addDateButton} onPress={() => { }}>
                <Text style={styles.cardButtonText}>08 February</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.peopleSection}>
          <Text style={styles.title} category="h6">
            How many people?
          </Text>
          <View style={styles.counterRow}>
            <Text category="s1" style={styles.counterLabel}>
              Adults
            </Text>
            <View style={styles.counter}>
              {/* <Image
                style={styles.counterButton}
                source={{
                  uri: "https://static-00.iconduck.com/assets.00/minus-circle-icon-1024x1024-8ry1v1pb.png",
                }}
                onPress={() => decrement(setAdults, adults)}
              /> */}
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => decrement(setAdults, adults)}
              >
                <Icon
                  name="minus"
                  style={styles.counterIcon}
                  fill="#222B45"
                />
              </TouchableOpacity>
              <Text style={styles.countText}>{adults}</Text>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => increment(setAdults, adults)}
              >
                <Icon
                  name="plus"
                  style={styles.counterIcon}
                  fill="#222B45"
                />
              </TouchableOpacity>
            </View>
          </View>
          <Divider style={styles.divider} />
          <View style={styles.counterRow}>
            <Text category="s1" style={styles.counterLabel}>
              Children
            </Text>
            <View style={styles.counter}>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => decrement(setChildren, children)}
              >
                <Icon
                  name="minus"
                  style={styles.counterIcon}
                  fill="#222B45"
                />
              </TouchableOpacity>
              <Text style={styles.countText}>{children}</Text>
              <TouchableOpacity
                style={styles.counterButton}
                onPress={() => increment(setChildren, children)}
              >
                <Icon
                  name="plus"
                  style={styles.counterIcon}
                  fill="#222B45"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomBar />
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#FFFFFF",
  },
  headercloseicon: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 10,
  },
  closeIcon: {
    width: 28,
    height: 28,
  },
  value: {
    fontSize: 16,
    color: "#222B45",
  },
  divider: {
    borderWidth: 0.5,
    borderColor: "#E4E9F2",
  },
  peopleSection: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E4E9F2",
    paddingBottom: 15,
    backgroundColor: "#fff",
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#E4E9F2",
  },
  clearAllButton: {
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  searchButton: {
    backgroundColor: "#6D30ED",
    borderRadius: 8,
    paddingHorizontal: 20,
    paddingVertical: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  clearAllButtonText: {
    color: "#A4A6B0",
    fontSize: 16,
  },
  searchButtonText: {
    color: "#fff",
    fontSize: 16,
    marginLeft: 5,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 1,
  },
  locationDateContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 8,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardText: {
    fontSize: 18,
    color: "#BFC1C7",
  },
  cardButtonText: {
    fontSize: 18,
    color: "#414348",
    fontWeight: "bold",
  },
  addLocationButton: {
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  addDateButton: {
    borderRadius: 5,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#1A1D22",
    padding: 15,
  },
  counterRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 10,
  },
  counterLabel: {
    fontSize: 16,
    color: "#222B45",
    paddingLeft: 15,
    paddingRight: 15,
  },
  counter: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 15,
    paddingRight: 15,
  },
  countText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: "#222B45",
  },
  counterButton: {
    borderRadius: 30,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#adb1b7",
    borderWidth: 1,
    marginHorizontal: 5,
  },
  counterIcon: {
    width: 20,
    height: 20,
  },
});