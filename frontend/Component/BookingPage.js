import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { Layout, Text, Button, Icon, Divider } from '@ui-kitten/components';

export default function BookingPage() {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const increment = (setFunction, value) => setFunction(value + 1);
  const decrement = (setFunction, value) => {
    if (value > 0) {
      setFunction(value - 1);
    }
  };

//   const PlusIcon = (props) => <Icon {...props} name="plus-outline" />;
//   const MinusIcon = (props) => <Icon {...props} name="minus-outline" />;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Layout style={styles.container}>
        {/* <Icon name="close-outline" style={styles.closeIcon} fill="#8F9BB3" /> */}

        <View style={styles.section}>
          <Text category="label" appearance="hint" style={styles.label}>Location</Text>
          <Text category="s1" style={styles.value}>Seminyak, Bali</Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.section}>
          <Text category="label" appearance="hint" style={styles.label}>Date</Text>
          <Text category="s1" style={styles.value}>08 February</Text>
        </View>

        <Divider style={styles.divider} />

        <View style={styles.peopleSection}>
          <Text style={styles.title} category="h6">How many people?</Text>
          <View style={styles.counterRow}>
            <Text category="s1" style={styles.counterLabel}>Adults</Text>
            <View style={styles.counter}>
              {/* <Button
                size="tiny"
                appearance="outline"
                // accessoryLeft={MinusIcon}
                onPress={() => decrement(setAdults, adults)}
                style={styles.counterButton}
              /> */}
              <Image
                style={styles.counterButton}
                source={{
                    uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe_ZXaIWpHS2s0qnMusRByIViIGCV_YSPl-_ybYtyflGD5fQO44e6bChuSinFJNmyrY6Y&usqp=CAU',
                }}
                />
              <Text style={styles.countText}>{adults}</Text>
              <Button
                size="tiny"
                appearance="outline"
                // accessoryLeft={PlusIcon}
                onPress={() => increment(setAdults, adults)}
                style={styles.counterButton}
              />
            </View>
          </View>

          <View style={styles.counterRow}>
            <Text category="s1" style={styles.counterLabel}>Children</Text>
            <View style={styles.counter}>
              <Button
                size="tiny"
                appearance="outline"
                // accessoryLeft={MinusIcon}
                onPress={() => decrement(setChildren, children)}
                style={styles.counterButton}
              />
              <Text style={styles.countText}>{children}</Text>
              <Button
                size="tiny"
                appearance="outline"
                // accessoryLeft={PlusIcon}
                onPress={() => increment(setChildren, children)}
                style={styles.counterButton}
              />
            </View>
          </View>
        </View>
      </Layout>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  closeIcon: {
    width: 24,
    height: 24,
    alignSelf: 'flex-end',
  },
  section: {
    display: 'flex',
    marginBottom: 15,
  },
  label: {
    fontSize: 12,
    color: '#8F9BB3',
  },
  value: {
    fontSize: 16,
    color: '#222B45',
  },
  divider: {
    marginVertical: 10,
  },
  peopleSection: {
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#F7F9FC',
    marginTop: 20,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#222B45',
  },
  counterRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  counterLabel: {
    fontSize: 16,
    color: '#222B45',
  },
  counter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  countText: {
    marginHorizontal: 10,
    fontSize: 16,
    color: '#222B45',
  },
  counterButton: {
    borderRadius: 30,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#E4E9F2',
  },
});
