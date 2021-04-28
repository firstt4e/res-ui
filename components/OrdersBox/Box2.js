import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Switch
  
} from 'react-native';
import React, { useState } from 'react';

import styles from '../../assets/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';

function Box2(props) {
  const {
    nameStore,
    status,
    date,
    credit,
    point,
    serialNumber,
    img,
  } = props.data;
  const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <TouchableOpacity
      style={[styles.randomMenuCard, { height: 90, marginVertical: 5 }]}
      onPress={() => {
        props.navigation.navigate('Manage');
      }}>
      <View style={styles.randomMenuCardImgWrapper}>
        <Image
          // source={require('../../assets/banners/food-banner4.jpg')}
          source={{ uri: img }}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={[styles.cardInfo, { flex: 3 }]}>
        <Text style={styles.randomMenuCardTitle}>{nameStore}</Text>
        <Text style={[
            styles.randomMenuCardDetails2,
            { alignSelf: 'flex-start', position: 'absolute', bottom: 35, left: 100 },
          ]}>ปิด-เปิดรับออเดอร์ :</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      </View>
      
      
    </TouchableOpacity>
  );
}

export default Box2;
