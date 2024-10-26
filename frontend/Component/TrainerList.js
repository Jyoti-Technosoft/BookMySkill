
import React from 'react';
import { Layout, Text, Icon, Avatar, Card, Button } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

const TrainerList = ({ navigation }) => {
  const trainers = [
    { name: 'Box Trainer', availability: '500 available' },
    { name: 'Muay Thai', availability: '250 available' },
    { name: 'Brazilian Jiu-Jitsu', availability: '423 available' },
    { name: 'MMA', availability: '240 available' },
  ];

  const renderCard = (trainer, index) => (
    <Card key={index} style={styles.card}>
      <View style={styles.cardContent}>
        <Avatar
          size="giant"
          source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.istockphoto.com%2Fphotos%2Fblank-avatar&psig=AOvVaw0_Y07AyLdNQNdaU_gHT00l&ust=1729853590112000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCKiXkv3spokDFQAAAAAdAAAAABAk' }}
          style={styles.avatar}
        />
        <View>
          <Text category="h6">{trainer.name}</Text>
          <Text appearance="hint">{trainer.availability}</Text>
        </View>
      </View>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          {/* <Icon name="arrow-back" fill="#000" style={styles.backIcon} /> */}
        </TouchableOpacity>
        <Text category="h5" style={styles.headerTitle}>
          Box Trainer
        </Text>
        <TouchableOpacity onPress={() => console.log('Close pressed')}>
          {/* <Icon name="close-outline" fill="#000" style={styles.closeIcon} /> */}
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        <Text category="h6" style={styles.sectionTitle}>Box Trainer</Text>
        {renderCard(trainers[0])}

        <Text category="h6" style={styles.sectionTitle}>Other</Text>
        {trainers.slice(1).map((trainer, index) => renderCard(trainer, index))}
      </ScrollView>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
  },
  card: {
    marginBottom: 10,
    borderRadius: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    marginRight: 10,
  },
});

export default TrainerList;
