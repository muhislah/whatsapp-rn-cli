import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { routeStyles } from '../styles/routeStyle'
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
import SearchBar from "./searchBar";
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from '../store/configStore';

export default function TopBarLinks() {
  const searchPhraseRedux = useSelector((state: AppState) => state.search.searchPhrase) || "";
  const [searchPhrase, setSearchPhrase] = useState(searchPhraseRedux);
  const [clicked, setClicked] = useState(false);
  
  return (
    <View>
      {
        clicked ? (
          <SearchBar
              searchPhrase = {searchPhrase}
              setSearchPhrase={setSearchPhrase}
              setClicked={setClicked}
            />
        ):
        <View style={routeStyles.topLinksContent}>
          <Text style={routeStyles.logo}>WhatsApp</Text>
          <View style={routeStyles.topButtons}>
            <Ionicons name="camera-outline" style={routeStyles.topButton}/>
            <TouchableOpacity onPress={() => { setClicked(true); }}>
              <Ionicons name="search" style={routeStyles.topButton}/>
            </TouchableOpacity>
            {/* <Ionicons name='ellipsis-vertical' style={routeStyles.topButton}/> */}
            <Menu>
              <MenuTrigger>
              <Ionicons name='ellipsis-vertical' style={routeStyles.topButton}/>
              </MenuTrigger>
              <MenuOptions customStyles={{
                optionsContainer: {
                  borderRadius: 15,
                  padding: 15,
                },
                optionText: {
                  fontSize: 15
                }
              }}>
                  <MenuOption text='Menu1'/>
                  <MenuOption text='Menu2'/>
                  <MenuOption text='Menu3'/>
                  <MenuOption text='Menu4'/>
                  <MenuOption text='Menu5'/>
              </MenuOptions>
          </Menu>
          </View>
        </View>
    }
    </View>
  )
}