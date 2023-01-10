import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  Text,
  TouchableOpacity,
  StyleSheet,
  Button,
} from 'react-native';
import {Icon} from '@rneui/themed';

function App() {
  const [counterOne, setCounterOne] = useState(1);

  function increaseCounterOne() {
    setCounterOne(counterOne + 1);
  }

  const [counterTwo, setCounterTwo] = useState(1);

  function increaseCounterTwo() {
    setCounterTwo(counterTwo + 1);
  }

  const [counterThree, setCounterThree] = useState(2000);

  function increaseCounterThree() {
    setCounterThree(counterThree + 1);
  }

  const [counterFour, setCounterFour] = useState(2000);

  function decreaseCounterOne() {
    setCounterOne(counterOne - 1);
  }

  function decreaseCounterTwo() {
    setCounterTwo(counterTwo - 1);
  }

  function decreaseCounterThree() {
    setCounterThree(counterThree - 1);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Lütfen Doğum Tarihinizi Giriniz:</Text>
      <View style={styles.contain}>
        <TouchableOpacity style={styles.arrow} onPress={increaseCounterOne}>
          <Icon name="arrow-drop-up" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrow} onPress={increaseCounterTwo}>
          <Icon name="arrow-drop-up" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrow} onPress={increaseCounterThree}>
          <Icon name="arrow-drop-up" />
        </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.tarih1}>{counterOne}</Text>
        <Text style={styles.tarih1}>{counterTwo}</Text>
        <Text style={styles.tarih}>{counterThree}</Text>
      </View>
      <View style={styles.contain}>
        <TouchableOpacity style={styles.arrow} onPress={decreaseCounterOne}>
          <Icon name="arrow-drop-down" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrow} onPress={decreaseCounterTwo}>
          <Icon name="arrow-drop-down" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.arrow} onPress={decreaseCounterThree}>
          <Icon name="arrow-drop-down" />
        </TouchableOpacity>
      </View>
      <Button title="GÖNDER" />
    </SafeAreaView>
  );
}
export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccaff4',
    marginVertical: 200,
    marginHorizontal: 30,
    borderRadius: 40,
    borderColor:'black',
    borderWidth: 2,
  },
  contain: {
    flexDirection: 'row',
  },
  arrow: {
    margin: 7,
    padding: 7,
    backgroundColor: 'white',
    borderRadius: 50,
  },
  tarih: {
    paddingHorizontal:1,
    fontSize: 20,
    color: '#333',
  },
  tarih1: {
    paddingHorizontal: 22,
    fontSize: 20,
    color: '#333',
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
    padding: 15,
    backgroundColor: '#399ae3',
    borderRadius: 12,
    color: 'white',
  }
});
