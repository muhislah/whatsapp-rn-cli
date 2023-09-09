import { Image, View } from "react-native";
import React, { useState, useEffect } from "react";
import { chatStyle } from "../styles/chatStyle";
import ChatHeader from "../components/chatHeader";
import ChatContainer from "../components/chatContainer";
import ChatMessage from "../components/chatMessage";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";
import { AppState } from "../store/configStore";


interface IProps {
  navigation: any,
  route: any
}

export default function ChatScreen ({ navigation, route }: IProps) {
  const dispatch = useDispatch()
  
  const messagesRedux = useSelector((state: AppState) => state.messages.data);
  const markedIdRedux = useSelector((state: AppState) => state.messages.markedId);
  
  useEffect(() => {
    // prevent repeated API call
    if (!(messagesRedux && messagesRedux.length)){
      fetch(`https://private-3f049-chatyoripe.apiary-mock.com/chats/questions`).then((data) => {
        return data.json().then((data)=>{
          dispatch(allActions.messages.setMessages(data));
        })
      })
    }
  }, [])

  return (
    <View style={chatStyle.container}>
      {/* <Image
        source={require("../../assets/wpBackGround.jpg")}
        style={chatStyle.backGrounImage}
      /> */}
      <ChatHeader item={route.params.item} navigation={navigation} 
                  markedId={markedIdRedux} messages={messagesRedux} />
      <ChatContainer messages={messagesRedux} markedId={markedIdRedux} />
      <ChatMessage messages={messagesRedux} markedId={markedIdRedux} />
    </View>
  );
}
