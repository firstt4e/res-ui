import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  Button,
  Alert
} from 'react-native';

import styles from '../../assets/styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
function Box3(props) {
  const {
    nameStore,
    status,
    img,
  } = props.data;
  return (
    <TouchableOpacity
      style={[styles.randomMenuCard, { height: 90, marginVertical: 5 }]}
      onPress={() => {
        props.navigation.navigate('Decision', { status: status });
      }}>
      <View style={styles.randomMenuCardImgWrapper}>
        <Image
          source={{ uri: img }}
          resizeMode="cover"
          style={styles.cardImg}
        />
      </View>
      <View style={[styles.cardInfo, { flex: 3 }]}>
        <Text style={styles.randomMenuCardTitle}>{nameStore}</Text>
        <Text
          style={[
            styles.randomMenuCardDetails,
            { alignSelf: 'flex-start', position: 'absolute', bottom: 13, left: 10 },
          ]}>
          เพิ่มเติม : {status}
        </Text>
        
      </View>
      <View style={[{ width: "30%", margin: 10, backgroundColor: "red" }]}>
      <Button
          title="รับออเดอร์"
          onPress={() => Alert.alert('ยืนยันรายการ')}
          color="#00FF2A"
        />
        <Button
          title="ยกเลิกออเดอร์"
          onPress={() => Alert.alert('ยกเลิกออเดอร์แล้ว')}
          color="#FF0000"
        />
        </View>
    </TouchableOpacity>
  );
}

export default Box3;
