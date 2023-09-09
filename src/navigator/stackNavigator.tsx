import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ChatScreen from "../screens/chatScreen";
import ProfileScreen from "../screens/ProfileScreen";
import TabNavigator from "./tabNavigator";
import TopBarLinks from "../components/topBarLinks";
const RootStack = createNativeStackNavigator();


export default function StackNavigator() {
  return (
    <>
      <RootStack.Navigator>
        <RootStack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <RootStack.Screen name="ChatScreen" component={ChatScreen} options={{ headerShown: false }}/>
        <RootStack.Screen name="Profile" component={ProfileScreen as any} options={{ headerShown: true }}/>
      </RootStack.Navigator>
    </>
  );
}
