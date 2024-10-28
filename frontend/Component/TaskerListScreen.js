import React from 'react';
import {
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  Image,
  ScrollView,
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

const {width} = Dimensions.get('window');

const taskers = [
  {
    id: '1',
    name: 'Sam Kusuma',
    description:
      'Hey, I’m Sam, your easygoing surf instructor here to make sure you have a blast while catching some waves. With over ten years of surfing experience, I’ve got the tricks ...',
    jobs: 3,
    price: '$15/hr',
    isNew: true,
    isElite: false,
    rating: 4.8,
    reviews: 42,
    isRating: false,
    isReviews: false,
    imageUrl:
      'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
  {
    id: '2',
    name: 'Elizabeth Santoso',
    description:
      'Hi, I’m Eli, your fearless surf teacher breaking stereotypes one wave at a time. I bring a contagious energy to every lesson, empowering you to conquer the surf with ...',
    jobs: 5,
    price: '$20/hr',
    isNew: true,
    isElite: false,
    rating: 4.6,
    reviews: 35,
    isRating: false,
    isReviews: false,
    imageUrl:
      'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
  {
    id: '3',
    name: 'Aubrey Jones',
    description:
      'Hi, I’m Aubrey, your surf guide ensuring you experience the best of what the ocean has to offer. My teaching style is both fun and patient ...',
    jobs: 7,
    price: '$18/hr',
    isNew: false,
    isElite: true,
    rating: 4.7,
    reviews: 28,
    isRating: true,
    isReviews: true,
    imageUrl:
      'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
];

const Header = () => (
  <Layout style={styles.header} level="1">
    <View
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'censter',
        paddingHorizontal: 10,
      }}>
      <View
        style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
        <Image
          style={[styles.settingsImage, {marginRight: 10}]}
          source={{
            uri: 'https://cdn.icon-icons.com/icons2/1709/PNG/512/back_112351.png',
          }}
        />

        <Text category="h6" style={styles.headerTitle}>
          Select a Tasker
        </Text>
      </View>

      <View>
        <Image
          style={styles.settingsImage}
          source={{
            uri: 'https://png.pngtree.com/png-clipart/20230403/original/pngtree-process-line-icon-png-image_9021743.png',
          }}
        />
      </View>
    </View>
  </Layout>
);

const TaskerItem = ({tasker}) => {
  const theme = useTheme();

  return (
    <View style={styles.cardMain}>
      <Card style={styles.card}>
        <View style={styles.row}>
          <Avatar source={{uri: tasker.imageUrl}} style={styles.avatar} />
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
            <Text appearance="hint">{tasker.jobs} overall jobs</Text>
          </View>
          <Text
            style={[
              styles.price,
              {backgroundColor: 'rgba(109, 48, 237, 0.1)'},
            ]}>
            {tasker.price}
          </Text>
        </View>
      </Card>
    </View>
  );
};

const TaskerListScreen = () => {
  return (
    <Layout style={styles.container} level="2">
      <View style={styles.headerContainer}>
        <Header />
        <View style={styles.filtersContainer}>
          <ScrollView horizontal showsHorizontalScrollIndicator={true}>
            <Button
              size="small"
              appearance="outline"
              style={styles.filterBadge}>
              <Text style={styles.filterText}>Within a week</Text>
              <Image
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png',
                }}
                style={{width: 10, height: 10, marginLeft: 20}}
              />
            </Button>
            <Button
              size="small"
              appearance="outline"
              style={styles.filterBadge}>
              <Text style={styles.filterText}>Flexible</Text>
              <Image
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png',
                }}
                style={{width: 10, height: 10, marginLeft: 20}}
              />
            </Button>
            <Button
              size="small"
              appearance="outline"
              style={styles.filterBadge}>
              <Text style={styles.filterText}>$10 - $105/hr</Text>
              <Image
                source={{
                  uri: 'https://static-00.iconduck.com/assets.00/close-icon-2048x2047-22z7exfk.png',
                }}
                style={{width: 10, height: 10, marginLeft: 20}}
              />
            </Button>
          </ScrollView>
        </View>
      </View>
      <FlatList
        data={taskers}
        keyExtractor={item => item.id}
        renderItem={({item}) => <TaskerItem tasker={item} />}
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
    padding: 16,
  },
  header: {
    // justifyContent: 'center',
    // alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E4E9F2',
    paddingBottom: 8,
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
    paddingBottom: 16,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
    backgroundColor: '#fff',
  },
  filterBadge: {
    borderWidth: 0,
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#F7F9FC',
    marginRight: 8,
  },
  filterText: {
    fontSize: 14,
    color: '#000000',
  },
  cardMain: {
    padding: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
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
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 12,
    marginBottom: 4,
    width: '18%',
  },
  newBadge: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 12,
    marginBottom: 4,
    width: '18%',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 10,
    backgroundColor: "#f0f9ff",
    borderRadius: 5,
    paddingHorizontal: 6,
    paddingVertical: 2,
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
    width: width * 0.05,
    height: width * 0.05,
    borderRadius: (width * 0.05) / 2,
    marginRight: width * 0.01,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6d30ed',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 12,
  },
});

export default TaskerListScreen;