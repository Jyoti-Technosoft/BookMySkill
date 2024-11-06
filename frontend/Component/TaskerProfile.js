import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
} from "react-native";
import {
  Layout,
  Text,
  Avatar,
  Card,
  Divider,
  Calendar,
  Button,
} from "@ui-kitten/components";
import DateTimePicker from '@react-native-community/datetimepicker';

import db from "../db.json";

const reviews = db?.TaskerProfile?.reviews || [];

const TaskerProfile = () => {
  const [scheduleVisible, setScheduleVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [time1, setTime1] = useState(new Date());
  const [time2, setTime2] = useState(new Date());
  const [showTimePicker1, setShowTimePicker1] = useState(false);
  const [showTimePicker2, setShowTimePicker2] = useState(false);

  const toggleScheduleModal = () => {
    setScheduleVisible(!scheduleVisible);
  };

  const renderHeader = (headerProps) => {
    return (
      <View style={styles.weekDayContainer}>
        {headerProps?.weekDayNames?.map((day, index) => (
          <Text key={index} style={styles.weekDayText}>
            {day}
          </Text>
        ))}
      </View>
    );
  };

  const BottomBar = () => {
    return (
      <View style={styles.bottomBar}>
        <Button
          style={styles.confirmButton}
          onPress={() => alert("Confirmed!")}
          title="Continue"
        >
          Continue
        </Button>
      </View>
    );
  };

  const onChangeTime1 = (event, selectedDate) => {
    setShowTimePicker1(false);
    if (selectedDate) {
      setTime1(selectedDate);
    }
  };

  const onChangeTime2 = (event, selectedDate) => {
    setShowTimePicker2(false);
    if (selectedDate) {
      setTime2(selectedDate);
    }
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <Layout style={styles.container}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingHorizontal: 20,
          marginBottom: 10,
          marginTop: 20
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={[styles.backandShareImage, { marginRight: 20 }]}
            source={{
              uri: "https://static.thenounproject.com/png/225669-200.png",
            }}
          />

          <Text category="h6" style={styles.headerTitle}>
            Tasker Profile
          </Text>
        </View>

        <View>
          <Image
            style={styles.backandShareImage}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXfsjniguEZwBwazwLceJ3ixk5KOKIAEalTRCMX8tqnCNxmUx00eMTbCaH6YD9qojP8o&usqp=CAU",
            }}
          />
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
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
          <TouchableOpacity
            style={styles.scheduleButton}
            onPress={toggleScheduleModal}
          >
            <Text style={styles.buttonText}>Select Schedule</Text>
          </TouchableOpacity>
        </View>
        <Modal
          visible={scheduleVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={toggleScheduleModal}
        >
          <View style={styles.modalContainer}>
            <View style={styles.calendarContainer}>
              <ScrollView contentContainerStyle={styles.scrollContent}>
                <Text category="h6" style={styles.mainTitle}>
                  Create a Schedule
                </Text>
                <Divider style={styles.scheduleDivider} />

                <Text category="h6" style={styles.modalTitle}>
                  Select Date
                </Text>

                <Calendar
                  date={date}
                  onSelect={(nextDate) => setDate(nextDate)}
                  style={styles.calendar}
                  renderHeader={renderHeader}
                />

                <Text category="h6" style={styles.modalTitle}>
                  Select time
                </Text>

                <View style={styles.selectTimeContainer}>
                  <TouchableOpacity
                    style={styles.timePicker}
                    onPress={() => setShowTimePicker1(true)}
                  >
                    <Text style={styles.timeText}>{formatTime(time1)}</Text>
                    <Text style={styles.clockIcon}>🕒</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.timePicker2}
                    onPress={() => setShowTimePicker2(true)}
                  >
                    <Text style={styles.timeText}>{formatTime(time2)}</Text>
                    <Text style={styles.clockIcon}>🕒</Text>
                  </TouchableOpacity>

                  {showTimePicker1 && (
                    <DateTimePicker
                      value={time1}
                      mode="time"
                      display="default"
                      onChange={onChangeTime1}
                    />
                  )}
                  {showTimePicker2 && (
                    <DateTimePicker
                      value={time2}
                      mode="time"
                      display="default"
                      onChange={onChangeTime2}
                    />
                  )}
                </View>
              </ScrollView>
              <BottomBar />
            </View>
          </View>
        </Modal>
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  headerContainer: {
    backgroundColor: "#fff",
    marginBottom: 16,
    padding: 16,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: "bold",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  settingsImage: {
    width: 25,
    height: 25,
  },
  backandShareImage: {
    width: 20,
    height: 20,
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
  },
  overallRating: {
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
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  calendarContainer: {
    width: "100%",
    paddingBottom: 60,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  mainTitle: {
    fontSize: 22,
    textAlign: "center",
    alignSelf: "center",
    marginBottom: 10,
  },
  modalTitle: {
    marginTop: 10,
    marginBottom: 10,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  calendar: {
    borderWidth: 0,
  },
  weekDayContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  weekDayText: {
    color: "red",
    fontWeight: "bold",
  },
  bottomBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingHorizontal: 16,
    paddingVertical: 13,
    backgroundColor: "#fff",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#E4E9F2",
  },
  confirmButton: {
    width: "100%",
    borderRadius: 50,
    backgroundColor: "#6D30ED",
    borderColor: "transparent",
  },
  selectTimeContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    // padding: 10,
  },
  timePicker: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
  },
  timePicker2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#ccc",
    marginLeft: 10
  },
  timeText: {
    fontSize: 16,
    marginRight: 60,
  },
  clockIcon: {
    fontSize: 16,
  },
  scrollContent: {
    paddingBottom: 20,
  },
});

export default TaskerProfile;