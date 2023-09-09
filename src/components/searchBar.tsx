import React, { useState } from "react";
import { StyleSheet, TextInput, View, Keyboard, Button } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  searchPhrase: string,
  setSearchPhrase: React.Dispatch<React.SetStateAction<string>>
  setClicked: React.Dispatch<React.SetStateAction<boolean>>
}

const searchBar = ({ searchPhrase, setSearchPhrase, setClicked }: IProps) => {
  const dispatch = useDispatch()
  const [text, setText] = useState(searchPhrase);

  return (
    <View style={styles.container}>
      <View style={styles.searchBar} >
        {/* search Icon */}
        <Icon
          name="arrow-back"
          size={20}
          color="#075e54"
          style={{ marginRight: 10 }}
          onPress={() => {
            Keyboard.dismiss();
            setClicked(false);
          }}
        />

        {/* Input field */}
        <TextInput
          style={styles.input}
          placeholder="Search..."
          value={text}
          onChangeText={setText}
          onSubmitEditing={(event) => {
            setSearchPhrase(event.nativeEvent.text);
            dispatch(allActions.search.setSearchPhrase(event.nativeEvent.text));
          }}
        />
        {/* depending on whether the search bar is clicked or not */}
        <Icon name="close" size={20} color="#075e54" style={{ padding: 1 }} onPress={() => {
          setText("");
          setSearchPhrase("")
          dispatch(allActions.search.resetSearchPhrase());
        }} />
      </View>
    </View>
  );
};

export default searchBar;

// styles
const styles = StyleSheet.create({
  container: {
    height: 65,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    padding: 13,

  },
  searchBar: {
    height: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: "row",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 16,
    marginLeft: 10,
    width: "90%",
  },
});