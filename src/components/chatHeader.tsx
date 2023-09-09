import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { chatStyle } from "../styles/chatStyle";
import allActions from "../store/actions";
import { useDispatch } from 'react-redux'
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import { IMessage } from "../store/reducers/reducerInteface";

interface IData {
  _id: string
  image: string
  name: string
  isActive: boolean
  isGet: boolean
  isVideo: boolean
  registered: string
}

interface IProps {
  item: IData,
  navigation: any
  markedId?: string
  messages?: any
}

export default function ChatHeader({ item, navigation }: IProps) {
  const dispatch = useDispatch()

  const handleBookmark = () => {
    // todo
    alert('Bookmark selected')
  };

  return (
    <View style={chatStyle.header}>
      <TouchableOpacity
        activeOpacity={0.7}
        style={chatStyle.backButton}
        onPress={() => {
          dispatch(allActions.messages.markReset());
          navigation.navigate("TabNavigator")
        }}
      >
        <View style={chatStyle.backButtonContent}>
          <MaterialIcons name="arrow-back" style={chatStyle.backButtonIcon} />
          {
            item.image ?
              <Image
                source={{ uri: item.image }}
                style={chatStyle.backButtonImage}
              />
              : null
          }
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={chatStyle.nameButton}
        onPress={() => {
          navigation.navigate("Profile", { item: item });
        }}
      >
        <View style={chatStyle.nameContent}>
          <Text style={chatStyle.nameText}>{item.name}</Text>
          <Text style={chatStyle.lastSeen}>Last seen today at 4:13 pm</Text>
        </View>
      </TouchableOpacity>
      <View style={chatStyle.headerIcons}>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="videocam" style={chatStyle.headerIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.headerButton}>
          <MaterialIcons name="call" style={chatStyle.headerIcon} />
        </TouchableOpacity>

        <Menu>
          <MenuTrigger>
            <MaterialCommunityIcons
              name="dots-vertical"
              style={[chatStyle.headerIcon]}
            />
          </MenuTrigger>
          <MenuOptions customStyles={{
            optionsContainer: {
              borderRadius: 15,
              padding: 15,
            },
          }}>
            <MenuOption text='Bookmark' onSelect={() => handleBookmark()} />
            <MenuOption text='Menu1' />
            <MenuOption text='Menu2' />
            <MenuOption text='Menu3' />
            <MenuOption text='Menu4' />
            <MenuOption text='Menu5' />
          </MenuOptions>
        </Menu>


      </View>
    </View>
  );
}
