import React from 'react';
import { Layout, Text, Icon, Avatar, Card, Button } from '@ui-kitten/components';
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native';

import db from "../db.json";

const TrainerList = ({ navigation }) => {
  const trainers = db?.TrainerList?.trainers || [];

  const renderCard = (trainer, index) => (
    <Card key={index} style={styles.card}>
      <TouchableOpacity
        key={index}
        onPress={() => navigation.navigate('SearchVenues')}
      >
        <View style={styles.cardContent}>
          <Avatar
            size="giant"
            source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnf6cL8GXTWCK2m6ODDkQqv9SBur-ttRglwRP_VBepbAbva6xshq8Xpa3riXXhfgedU-w&usqp=CAU' }}
            style={styles.avatar}
          />
          <View>
            <Text category="h6">{trainer.name}</Text>
            <Text appearance="hint">{trainer.availability}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Card>
  );

  return (
    <Layout style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 16,
          paddingVertical: 16,
          marginBottom: 10,
          backgroundColor: '#fff'
        }}>
        <View
          style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
          <Icon
            name="arrow-back"
            style={[styles.backandCloseIcon, { marginRight: 20 }]}
            onPress={() => navigation.goBack()}
          />
          <Text category="h6" style={styles.headerTitle}>
            Box Trainer
          </Text>
        </View>
        <View>
          <Icon
            name="close"
            style={styles.backandCloseIcon}
            onPress={() => navigation.goBack()}
          />
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
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
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  backandCloseIcon: {
    width: 30,
    height: 30,
    marginBottom: 0,
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  sectionTitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
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
    backgroundColor: '#fff',
  },
  backandCloseImage: {
    width: 17,
    height: 17,
  },
});

export default TrainerList;