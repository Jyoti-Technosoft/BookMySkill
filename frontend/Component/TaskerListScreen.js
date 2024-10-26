import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { Layout, Text, Avatar, Button, Card, Icon, useTheme } from '@ui-kitten/components';
const taskers = [
  {
    id: '1',
    name: 'Sam Kusuma',
    description: "Hey, I’m Sam, your easygoing surf instructor here to make sure you have a blast while catching some waves. With over ten years of surfing experience, I’ve got the tricks ...",
    jobs: 3,
    price: '$15/hr',
    isNew: true,
    imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
  {
    id: '2',
    name: 'Elizabeth Santoso',
    description: "Hi, I’m Eli, your fearless surf teacher breaking stereotypes one wave at a time. I bring a contagious energy to every lesson, empowering you to conquer the surf with ...",
    jobs: 5,
    price: '$20/hr',
    isNew: true,
    imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
  {
    id: '3',
    name: 'Aubrey Jones',
    description: "Hi, I’m Aubrey, your surf guide ensuring you experience the best of what the ocean has to offer. My teaching style is both fun and patient ...",
    jobs: 7,
    price: '$18/hr',
    isNew: false,
    imageUrl: 'https://images.ctfassets.net/h6goo9gw1hh6/2sNZtFAWOdP1lmQ33VwRN3/24e953b920a9cd0ff2e1d587742a2472/1-intro-photo-final.jpg?w=1200&h=992&fl=progressive&q=70&fm=jpg',
  },
];
const Header = () => (
  <Layout style={styles.header} level="1">
    <Text category="h6" style={styles.headerTitle}>Select a Tasker</Text>
  </Layout>
);
const TaskerItem = ({ tasker }) => {
  const theme = useTheme();
  return (
    <Card style={styles.card}>
      <View style={styles.row}>
        <Avatar source={{ uri: tasker.imageUrl }} style={styles.avatar} />
        <View style={styles.info}>
          <View style={styles.header}>
          {tasker.isNew && <Text style={[styles.newBadge, { backgroundColor: theme['color-info-100'], color: theme['color-info-700'] }]}>New</Text>}
            <Text category="s1" style={styles.name}>{tasker.name}</Text>
          </View>
        </View>
      </View>
      <Text appearance="hint" style={styles.description}>{tasker.description}</Text>
      <View style={styles.footer}>
        <Text appearance="hint">{tasker.jobs} overall jobs</Text>
        <Text style={[styles.price, { backgroundColor: 'rgba(109, 48, 237, 0.1)' }]}>{tasker.price}</Text>
      </View>
    </Card>
  );
};
const TaskerListScreen = () => {
  return (
    <Layout style={styles.container} level="2">
      <Header />
      <View style={styles.filters}>
        <Button size="small" appearance="outline" style={styles.filterBadge}><Text style={styles.filterText}>Within a week</Text></Button>
        <Button size="small" appearance="outline" style={styles.filterBadge}><Text style={styles.filterText}>Flexible</Text></Button>
        <Button size="small" appearance="outline" style={styles.filterBadge}><Text style={styles.filterText}>$10 - $105/hr</Text></Button>
      </View>
      <FlatList
        data={taskers}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskerItem tasker={item} />}
      />
    </Layout>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F7F9FC',
  },
  header: {
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-between',
    paddingVertical: 16,
    backgroundColor: '#fff',
    // borderBottomWidth: 1,
    // borderBottomColor: '#E4E9F2',
  },
  headerTitle: {
    textAlign: 'center',
    flex: 1,
    fontWeight: 'bold',
    fontSize: 20,
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  filterBadge: {
    borderColor: '#8F9BB3',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#fff',
  },
  filterText: {
    fontSize: 14,
    color: '#222B45',
  },
  card: {
    marginBottom: 16,
    borderRadius: 10,
    backgroundColor: '#fff',
    padding: 16,
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
    marginBottom: 4,
  },
  newBadge: {
    paddingVertical: 2,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 12,
    width: '18%',
    // marginLeft: 8,
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
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#6D30ED',
    paddingVertical: 6,
    paddingHorizontal: 6,
    borderRadius: 12,
    fontSize: 16,
  },
});
export default TaskerListScreen;