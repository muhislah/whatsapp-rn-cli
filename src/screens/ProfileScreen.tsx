import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

interface IProps {
  navigator: any
}

type StackParamList = {
  Profile: {
    photo: string
    name: string,
    item: {
      image: string,
      name: string
    }
  };
  // Define other screens and their expected params
};


const ProfileScreen = (props: IProps) => {
  const route = useRoute<RouteProp<StackParamList, 'Profile'>>();
  // console.log(route.params)
  return (
    <View
    // backgroundSource={{ uri: route.params.photo }}
    // windowHeight={400}
    // header={(
    //   <View>
    //     <TouchableOpacity style={styles.header} onPress={() => props.navigator.pop()}>
    //       <Icon
    //         name="arrow-back" color="#fff" size={23}
    //         style={{ paddingLeft: 10 }}
    //       />
    //     </TouchableOpacity>
    //     <Text style={styles.title}>
    //       {route.params.name}
    //     </Text>
    //   </View>
    // )}
    // scrollableViewStyle={{ backgroundColor: '#ece5dd' }}
    >

      <View style={{
        alignItems: 'center', justifyContent: 'center',
        height: 300, backgroundColor: '#fff'
      }}>
        {
          route.params.item.image ?
            <Image
              source={{ uri: route.params.item.image }}
              style={{ height: 150, width: 150, borderRadius: 75, marginTop: 20 }}
            />
            : null
        }
        <Text style={styles.green}> {route.params.item.name} </Text>
        <View style={{ flexDirection: 'row', marginTop: 5 }}>
          <Icon name="chat" color="#075e54" size={25} style={{ padding: 15 }} />
          <Icon name="call" color="#075e54" size={25} style={{ padding: 15 }} />
          <Icon name="videocam" color="#075e54" size={25} style={{ padding: 15 }} />
        </View>
      </View>

      <View style={styles.card}>
        <View style={styles.number}>
          <View style={{ paddingHorizontal: 5 }}>
            <Text style={styles.text}>+00 9874563212</Text>
            <Text style={styles.subText}>Mobile</Text>
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="chat" color="#075e54" size={23} style={{ padding: 5 }} />
            <Icon name="call" color="#075e54" size={23} style={{ padding: 5 }} />
            <Icon name="videocam" color="#075e54" size={23} style={{ padding: 5 }} />
          </View>
        </View>
      </View>
    </View>
  );
}
export default ProfileScreen;

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '600',
    marginTop: 270,
    padding: 20,
  },
  card: {
    marginTop: 10,
  },
  row: {
    height: 50,
    padding: 10,
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  encrypt: {
    height: 50,
    paddingHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  number: {
    height: 50,
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#f5f5f5',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 14,
    color: '#333',
    fontWeight: '400',
  },
  subText: {
    fontSize: 10,
    color: '#555',
  },
  green: {
    color: '#075e54',
    fontWeight: '600',
    fontSize: 18,
    marginTop: 20
  },
});