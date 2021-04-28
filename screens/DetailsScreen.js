import React from 'react';
import { StyleSheet, Text, View, FlatList, Button } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Box2 from '../components/OrdersBox/Box2';

export default class DetailsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          nameStore: 'คะน้าหมูกรอบ',
          img:
            'https://sv1.picz.in.th/images/2021/04/27/A2Ai7u.jpg',
        },
        {
          nameStore: 'ไข่เจียวหมูสับ',
          img:
            'https://sv1.picz.in.th/images/2021/04/27/A2AQFP.jpg',
        },
        {
          nameStore: 'ข้าวยำไก่แซ๋บ',
          img:
            'https://sv1.picz.in.th/images/2021/04/27/A2ADSN.jpg',
        },
        {
          nameStore: 'หมูทอดกระเทียมพริกไทย',
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURf3Q.jpg',
        },
        {
          nameStore: 'เครื่องแกงหมูกรอบ',
          img:
            'https://sv1.picz.in.th/images/2021/04/20/AURNeV.jpg',
        },
        
      ],
    };
  }
  render(){
    
    return (
      <ScrollView>
      <View style={styles.randomMenuCardsWrapper} >
      <FlatList
                data={this.state.data}
                renderItem={({item}) => (
                  <Box2 data={item} navigation={this.props.navigation} />
                )}
                keyExtractor={(item) => item.nameStore}
              />                 
      </View>
      </ScrollView>


    );
  }
}

const styles = StyleSheet.create({

  randomMenuCardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  
  
});