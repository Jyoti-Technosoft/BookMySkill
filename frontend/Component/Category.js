import React from 'react';
import { Layout, Text, Input, Card, Icon, Avatar } from '@ui-kitten/components';
import { Image, StyleSheet, View, FlatList , TouchableOpacity} from 'react-native';

import db from "../db.json"

const Category = ({ navigation }) => {
  const categories = db?.categorypage?.categories;
  const taskers = db?.categorypage?.taskers;

  const getImage = (imageName) => {
    switch (imageName) {
      case "../public/images/category-surf.png":
        return require('../public/images/category-surf.png');
      case "../public/images/category-yoga.png":
        return require('../public/images/category-yoga.png');
      case "../public/images/category-skate.png":
        return require('../public/images/category-skate.png');
      case "../public/images/category-massage.png":
        return require('../public/images/category-massage.png');
      case "../public/images/tasker-img1.png":
        return require('../public/images/tasker-img1.png');
      case "../public/images/tasker-img2.png":
        return require('../public/images/tasker-img2.png');
      default:
        return null;
    }
  };

  const renderCategoryItem = ({ item }) => (
    <Card style={styles.categoryCard}>
      <View>
        <Text style={styles.categoryTitle}>{item.title}</Text>
        <Image source={getImage(item.image)} style={styles.categoryImage} />
      </View>
    </Card>
  );

  const renderTaskerItem = ({ item }) => (
    <Card style={styles.taskerCard}>
      <Image source={getImage(item.image)} style={styles.taskerImage} />
      <Text style={styles.taskerName}>{item.name}</Text>
      <Text appearance='hint' style={styles.taskerRole}>{item.role}</Text>
      <View style={styles.ratingContainer}>
        {/* <Icon name='star' fill='#FFD700' style={styles.ratingIcon} /> */}
        <Image source={require('../public/images/rating-icon.png')} style={styles.ratingIcon} />
        <Text style={styles.ratingText}>{item.rating} ({item.reviews} reviews)</Text>
      </View>
    </Card>
  );

  const firstFourCategories = categories.slice(0, 4);
  const remainingCategories = categories.slice(4);

  return (
    <Layout style={styles.container}>
      <FlatList
        ListHeaderComponent={() => (
          <Layout>
            {/* <View style={styles.header}>
              <Image
                source={require('../public/images/category-logo.png')}
                style={styles.categoryLogo}
              />
              <View style={styles.iconContainer}>
                <Icon
                  name='message-circle-outline'
                  style={styles.headericon}
                />
                <Icon
                  name='bell-outline'
                  style={styles.headericon}
                />
              </View>
            </View> */}
            <View style={styles.header}>
              <View style={styles.textContainer}>
                <Text style={styles.greeting}>Good morning!</Text>
                <Text category='h6'>James Harrid</Text>
              </View>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileSetting')}>

                <Avatar
                  source={require('../public/images/category-user.png')}
                  style={styles.profileImage}
                  // onPress={() => {
                  //   navigation.navigate('ProfileSetting');
                  // }}
                />
            </TouchableOpacity>
            </View>
            <Input
              placeholder='What service are you looking for?'
              style={styles.searchInput}
              accessoryLeft={() => (
                <View style={styles.searchiconContainer}>
                  <Icon
                    name='search-outline'
                    style={styles.searchIcon}
                    fill='white'
                  />
                </View>
              )}
              onFocus={() => navigation.navigate('TrainerList')}
            />
            <Layout style={styles.categorysection}>
              <Text category='h5' style={[styles.sectionTitle, styles.sectionTitleCategory]}>Popular Category</Text>
              <FlatList data={firstFourCategories}
                renderItem={renderCategoryItem}
                keyExtractor={(item, index) => index.toString()}
                numColumns={2}
                columnWrapperStyle={styles.row}
                contentContainerStyle={styles.listContainer} />
              {remainingCategories?.length > 0 && (
                <FlatList
                  data={remainingCategories}
                  renderItem={renderCategoryItem}
                  keyExtractor={(item, index) => (index + 4).toString()}
                  numColumns={1}
                  contentContainerStyle={styles.listContainer}
                />
              )}
            </Layout>
          </Layout>
        )}
        ListFooterComponent={() => (
          <Layout style={styles.detaills}>
            <Text category='h5' style={styles.sectionTitle}>Top Tasker</Text>
            <Text appearance='hint' style={styles.subtitle}>
              Experts lead you through topics.
            </Text>
            <FlatList
              data={taskers}
              renderItem={renderTaskerItem}
              keyExtractor={(item, index) => index.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalListContainer}
            />
          </Layout>
        )}
      />
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  detaills: {
    paddingHorizontal: 16,
    paddingVertical: 22,
    backgroundColor: "#f8f9fb"
  },
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginBottom: 20,
  },
  textContainer: {
    flexDirection: 'column',
  },
  categoryLogo: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 0,
  },
  headericon: {
    width: 24,
    height: 24,
    marginLeft: 9,
  },
  profileImage: {
    width: 65,
    height: 65,
    minWidth: 40,
    minHeight: 40,
    marginRight: 2,
  },
  greeting: {
    fontSize: 16,
    color: '#8F9BB3',
  },
  searchInput: {
    borderRadius: 25,
    borderColor: '#E4E9F2',
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  searchiconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#6A33F8',
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  categorysection: {
    paddingHorizontal: 15,
    backgroundColor: "#f8f9fb",
    paddingTop: 22,
  },
  sectionTitleCategory: {
    paddingBottom: 15,
  },
  row: {
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  listContainer: {
    // paddingHorizontal: 16,
  },
  categoryList: {
    flexDirection: 'row',
  },
  categoryCard: {
    flex: 1,
    marginRight: 4,
    marginLeft: 4,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  categoryImage: {
    width: '100%',
    height: 100,
    borderRadius: 8,
  },
  categoryTitle: {
    textAlign: 'left',
    fontWeight: "bold",
    marginBottom: 8,
  },
  sectionTitle: {
    fontWeight: 'bold',
    marginTop: 8,
    backgroundColor: "#f8f9fb"
  },
  subtitle: {
    // marginBottom: 10,
  },
  horizontalListContainer: {
    paddingVertical: 16,
  },
  taskerCard: {
    width: 180,
    marginRight: 12,
    borderRadius: 8,
    overflow: 'hidden',
    backgroundColor: '#fff',
  },
  taskerImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  taskerName: {
    paddingTop: 8,
    fontWeight: 'bold',
    fontSize: 15,
  },
  taskerRole: {
    marginBottom: 10,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingLeft: 6,
    paddingRight: 19,
    paddingVertical: 6,
    paddingVertical: 6,
    borderRadius: 12,
    backgroundColor: "#f0f9ff"
  },
  ratingIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  ratingText: {
    fontSize: 13,
    color: '#49ade1',
    fontWeight: "bold"
  }
});

export default Category;