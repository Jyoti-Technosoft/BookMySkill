import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {
  Layout,
  Text,
  Avatar,
  Button,
  Card,
  Icon,
  useTheme,
} from '@ui-kitten/components';
const { width } = Dimensions.get('window');

import db from "../db.json";

const taskers = db?.TaskerList?.taskers || [];

const Header = ({ navigation }) => (
  <Layout style={styles.header} level="1">
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 6
      }}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Icon
          name="arrow-back"
          style={[styles.backImage, { marginRight: 15 }]}
          onPress={() => navigation.goBack()}
        />
        <Text category="h6" style={styles.headerTitle}>
          Select a Tasker
        </Text>
      </View>
      <View>
        <Image
          style={styles.settingsImage}
          source={require('../public/images/settings-rectangular-img.png')}
        />
      </View>
    </View>
  </Layout>
);
const TaskerItem = ({ tasker, navigation }) => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
        <TouchableOpacity
          style={styles.cardMain}
          onPress={() => navigation.navigate('TaskerProfile')}
        >
        <View style={styles.row}>
          <Avatar source={{ uri: tasker.imageUrl }} style={styles.avatar} />
          <View style={styles.info}>
            <View style={styles.headerCard}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                {tasker.isNew && (
                  <Text
                    style={[
                      styles.newBadge,
                      {
                        backgroundColor: theme['color-info-100'],
                        color: '#0288D1',
                      },
                    ]}>
                    New
                  </Text>
                )}
                {tasker.isElite && (
                  <Text
                    style={[
                      styles.eliteBadge,
                      {
                        backgroundColor: '#FFF9C4',
                        color: '#FBC02D',
                      },
                    ]}>
                    Elite
                  </Text>
                )}
                {tasker.isRating && tasker.isReviews && (
                  <View style={styles.ratingContainer}>
                    <Image source={require('../public/images/rating-icon.png')} style={styles.ratingIcon} />
                    <Text style={styles.ratingText}>
                      {tasker.rating} ({tasker.reviews} reviews)
                    </Text>
                  </View>
                )}
              </View>
              <Text category="s1" style={styles.name}>
                {tasker.name}
              </Text>
            </View>
          </View>
        </View>
        <Text appearance="hint" style={styles.description}>
          {tasker.description}
        </Text>
        <View style={styles.footer}>
          <View style={styles.avatarContainer}>
            <Avatar
              size="giant"
              source={{
                uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7pPA2AjS6AQdktQDzwws9R6gNZehpfWaEXPj4FCjrPgzQ1i5rzuGokl4zp64gAxWMts0&usqp=CAU',
              }}
              style={styles.avatarIcon}
            />
            <Text appearance="hint" style={styles.jobs}>{tasker.jobs} overall jobs</Text>
          </View>
          <Text
            style={[
              styles.price,
              { backgroundColor: 'rgba(109, 48, 237, 0.1)' },
            ]}>
            {tasker.price}
          </Text>
        </View>
    </TouchableOpacity>
      </Card>
  );
};
const TaskerList = ({ navigation }) => {
  return (
    <Layout style={styles.container}>
      <View style={styles.headerContainer}>
        <Header navigation={navigation}/>
        {/* <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <TouchableOpacity
              style={styles.filterBadge}>
              <Text style={styles.filterText}>Within a week</Text>
              <Icon
                name="close-outline"
                style={styles.closeIcon}
                fill="#323545"
                onPress={() => { }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterBadge}>
              <Text style={styles.filterText}>Flexible</Text>
              <Icon
                name="close-outline"
                style={styles.closeIcon}
                fill="#323545"
                onPress={() => { }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.filterBadge}>
              <Text style={styles.filterText}>$10 - $105/hr</Text>
              <Icon
                name="close-outline"
                style={styles.closeIcon}
                fill="#323545"
                onPress={() => { }}
              />
            </TouchableOpacity>
          </ScrollView>

        </View> */}
      </View>
      <FlatList
        data={taskers}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <TaskerItem tasker={item} navigation={navigation}/>}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
  },
  headerContainer: {
    backgroundColor: '#fff',
    marginBottom: 16,
    padding: 14,
  },
  header: {
    // borderBottomWidth: 0.5,
    // borderBottomColor: '#d4d4d4',
    paddingBottom: 10,
  },
  backImage: {
    width: 30,
    height: 30,
  },
  settingsImage: {
    width: 25,
    height: 25,
  },
  headerCard: {
    paddingVertical: 16,
    borderBottomColor: '#E4E9F2',
    paddingBottom: 8,
  },
  headerTitle: {
    fontSize: 22,
  },
  filtersContainer: {
    marginTop: 16,
    flexDirection: 'row',
  },
  filterBadge: {
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#F7F9FC',
    marginRight: 6,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  filterText: {
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
  },
  closeIcon: {
    width: 24,
    height: 24,
    tintColor: '#9194a3',
  },
  cardMain: {
    padding: 10,
  },
  card: {
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
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
    fontWeight: 'bold',
  },
  eliteBadge: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 4,
    width: '20%',
  },
  newBadge: {
    paddingVertical: 4,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 14,
    marginBottom: 4,
    width: '21%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: "#F0F9FF",
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
  },
  starIcon: {
    width: 14,
    height: 14,
    marginRight: 4,
    tintColor: '#0288D1',
  },
  ratingText: {
    color: '#0288D1',
    fontSize: 14,
  },
  ratingIcon: {
    width: 18,
    height: 18,
    marginRight: 4,
  },
  description: {
    fontSize: 14,
    color: '#8F9BB3',
    marginTop: 4,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#E4E9F2',
    paddingTop: 8,
  },
  avatarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatarIcon: {
    color: '#181920',
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: (width * 0.05) / 2,
    marginRight: width * 0.01,
    fontWeight: 'bold',
    fontSize: 16
  },
  jobs: {
    color: '#3b3c40',
    fontWeight: 'bold',
    fontSize: 16
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6D30ED',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 14,
  },
});
export default TaskerList;