import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { routeStyles } from "../styles/routeStyle";
import ChatListComponent from "../components/chatListComponent";

interface IProps {
  navigation: any,
  sNavigator: any
}

export default function Chats({ navigation, sNavigator }: IProps) {
  return (
    <View style={routeStyles.container}>
      <ChatListComponent navigation={sNavigator}/>
    </View>
  );
}
