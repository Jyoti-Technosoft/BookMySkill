import React from "react";
import { View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
import { Layout, Text, Avatar, Card, Divider } from "@ui-kitten/components";

const reviews = [
  {
    id: 1,
    name: "John King",
    date: "A day ago",
    rating: 5,
    review:
      "Incredible experience! The surf session with Ashley was beyond amazing. Their guidance and expertise helped me catch waves I never thought possible. Highly recommend!",
    avatar:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
  {
    id: 2,
    name: "Jennifer Harris",
    date: "A day ago",
    rating: 4,
    review:
      "Ashley was late 30 minutes. Nevertheless, she was super friendly and made me feel at ease right away. She’s patient, encouraging, and really knows her stuff.",
    avatar:
      "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
  },
];

const TaskerProfileScreen = () => {
  return (
    <Layout style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.header}>
          <Image
            source={{ uri: "https://example.com/back-icon.png" }}
            style={styles.icon}
          />
          <Text category="h5">Tasker Profile</Text>
          <Image
            source={{ uri: "https://example.com/share-icon.png" }}
            style={styles.icon}
          />
        </View>

        <View style={styles.profileContainer}>
          <Card style={styles.card}>
            <View style={styles.row}>
              <Avatar
                source={{
                  uri: "https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg",
                }}
                style={styles.avatar}
              />
              <View style={styles.info}>
                <View style={styles.headerCard}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={[
                        styles.eliteBadge,
                        {
                          backgroundColor: "#FFF9C4",
                          color: "#FBC02D",
                        },
                      ]}
                    >
                      Elite Tasker
                    </Text>
                    <View style={styles.ratingContainer}>
                      <Image
                        source={require("../public/images/rating-icon.png")}
                        style={styles.ratingIcon}
                      />
                      <Text style={styles.ratingText}>4.8 (42 reviews)</Text>
                    </View>
                  </View>
                  <Text category="s1" style={styles.name}>
                    Ashley Hidayat
                  </Text>
                </View>
              </View>
            </View>
            <Text appearance="hint" style={styles.description}>
              What's up, I'm Ashley, your eco-conscious surf mentor passionate
              about riding waves and protecting our oceans.
            </Text>
          </Card>
        </View>
        <Text category="h4" style={styles.reviewTitle}>
          42 Reviews
        </Text>
        <View style={styles.reviewsSection}>
          <View style={styles.reviewContainer}>
            <View style={styles.overallRating}>
              <Text category="h4">4.8/5</Text>
              <Image
                source={require("../public/images/star-rating-4.5.png")}
                style={styles.ratingImage}
              />
            </View>
            <View style={styles.breakdownContainer}>
              {[5, 4, 3, 2, 1].map((rating, index) => (
                <View key={index} style={styles.ratingRow}>
                  <View style={styles.progressBar}>
                    <View
                      style={{
                        ...styles.progressFill,
                        width: `${rating * 20}%`,
                      }}
                    />
                  </View>
                  <Text style={styles.ratingLabel}>{rating}</Text>
                </View>
              ))}
            </View>
          </View>
        </View>

        {reviews.map((review, index) => (
          <View key={review.id}>
            <Card key={review.id} style={styles.reviewCard}>
              <View style={styles.reviewHeader}>
                <Avatar
                  source={{ uri: review.avatar }}
                  style={styles.reviewAvatar}
                />
                <View style={styles.reviewHeaderText}>
                  <Text style={styles.reviewName}>{review.name}</Text>
                  <Text style={styles.reviewDate}>{review.date}</Text>
                </View>
                <Image
                  source={require("../public/images/star-rating-4.5.png")}
                  style={styles.reviewRatingImage}
                />
              </View>
              <Text style={styles.reviewText}>{review.review}</Text>
            </Card>
              <Divider style={styles.divider} />
          </View>
        ))}

        <View style={styles.hireContainer}>
          <View style={styles.priceContainer}>
            <Text appearance="hint" style={styles.hireText}>
              Hire with:
            </Text>
            <Text style={styles.priceText}>$25/hr</Text>
          </View>
          <TouchableOpacity style={styles.scheduleButton}>
            <Text style={styles.buttonText}>Select Schedule</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
  profileContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    marginRight: 16,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  eliteBadge: {
    backgroundColor: "#FFF9C4",
    color: "#FBC02D",
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 4,
    marginRight: 5,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: 10,
    backgroundColor: "#f0f9ff",
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 4,
  },
  ratingText: {
    color: "#0288D1",
    fontSize: 14,
  },
  ratingIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  description: {
    fontSize: 14,
    color: "#8F9BB3",
    marginTop: 20,
  },
  reviewsSection: {
    marginVertical: 20,
    backgroundColor: "#f8f9fb",
    marginHorizontal: 20,
    padding: 20,
  },
  reviewTitle: {
    fontSize: 26,
    marginBottom: 10,
    paddingLeft: 20,
  },
  reviewContainer: {
    flexDirection: "row",
    // alignItems: "center",
  },
  overallRating: {
    // alignItems: "center",
    marginRight: 100,
  },
  ratingImage: {
    width: 100,
    height: 20,
    marginTop: 5,
  },
  breakdownContainer: {
    flex: 1,
    paddingTop: 10,
  },
  ratingRow: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 8,
  },
  progressBar: {
    flex: 1,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#e0e0e0",
    marginRight: 10,
  },
  progressFill: {
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFD700",
  },
  ratingLabel: {
    width: 20,
    textAlign: "right",
  },
  reviewCard: {
    marginBottom: 0,
    borderRadius: 8,
    backgroundColor: "#FFFFFF",
    borderWidth: 0,
  },
  reviewHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  reviewAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  reviewHeaderText: {
    flex: 1,
  },
  reviewName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  reviewDate: {
    fontSize: 12,
    color: "#888",
  },
  reviewRatingImage: {
    width: 80,
    height: 20,
  },
  reviewText: {
    fontSize: 14,
    color: "#555",
  },
  divider: {
    marginVertical: 8,
    backgroundColor: "#E0E0E0",
    height: 1,
  },
  hireContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 8,
  },
  priceContainer: {
    flexDirection: "column",
  },
  hireText: {
    fontSize: 14,
    color: "#8F9BB3",
  },
  priceText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  scheduleButton: {
    backgroundColor: "#7F3DFF",
    borderRadius: 24,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default TaskerProfileScreen;
