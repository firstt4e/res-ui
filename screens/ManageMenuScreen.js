import { View, Text, Button, StyleSheet, Switch, ScrollView, Image, Alert } from 'react-native';
import React, { useState } from 'react';
import CheckboxList from 'rn-checkbox-list';


const ManageMenuScreen = () => {



const [isEnabled, setIsEnabled] = useState(false);
const toggleSwitch = () => setIsEnabled(previousState => !previousState);
const data = [{ id: 1, name: 'หมู' }, { id: 2, name: 'หมูกรอบ' }, { id: 3, name: 'ไก่' }, { id: 4, name: 'เนื้อ' }, { id: 5, name: 'กุ้ง' }, { id: 6, name: 'หมึก' }];
    return (
      <ScrollView>
        <View style={styles.card} ><Image
                    source={require('../assets/banners/food-banner5.jpg')}
                    resizeMode="cover"/>
                    </View>
        
      <View style={styles.card} >
        <Text>ข้าวครื่องแกงหมูกรอบ</Text>
        <View>
        <Text>ปิด-เปิดรับออเดอร์ :</Text>
        <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />

      </View>
      </View>
      
      
      <View style={styles.cardInfo} >
              <CheckboxList
                     theme="red"
                     listItems={data}
                     onChange={({ ids, items }) => console.log('My updated list :: ', ids)}
                     listItemStyle={{ borderBottomColor: '#eee', borderBottomWidth: 1 }}
                     checkboxProp={{ boxType: 'square' }} // iOS (supported from v0.3.0)
                     onLoading={() => <LoaderComponent />}
                />
                </View>
                <View>
      <Button
        title="บันทึกข้อมูล"
        onPress={() => Alert.alert('บันทึกข้อมูลสำเร็จ')}
      />
    </View>

                
      
      </ScrollView>
      
      
      

      

    );
    
};

export default ManageMenuScreen;

const styles = StyleSheet.create({
  cardInfo: {
    backgroundColor:"#FFFFFF",
    marginHorizontal:20,
    padding:15,
    shadowColor:'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,  
    minHeight:60,
    elevation:2,
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10,
    overflow:"hidden",
    position:'relative',
  },
  card:{
    backgroundColor:"#FFFFFF",
    marginHorizontal:20,
    padding:15,
    shadowColor:'rgba(0,0,0,0.2)',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,  
    minHeight:60,
    elevation:2,
    borderRadius:5,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginVertical:10,
    overflow:"hidden",
    position:'relative',
  },
  
});
