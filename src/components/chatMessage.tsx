import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React, { useState } from "react";
import { chatStyle } from "../styles/chatStyle";
import { useDispatch, useSelector } from 'react-redux'
import allActions from "../store/actions";
import { IMessage } from "../store/reducers/reducerInteface";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

interface IProps {
  messages: IMessage[]
  markedId?: string
}

export default function ChatMessage({ messages }: IProps) {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");

  return (
    <View style={chatStyle.messageContent}>
      <View style={chatStyle.messageBox}>
        <TouchableOpacity style={chatStyle.messageButton}>
          <MaterialIcons name="emoji-emotions" style={chatStyle.messageIcon} />
        </TouchableOpacity>
        <TextInput
          placeholder="Message"
          style={chatStyle.messageInput}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={chatStyle.messageButton}>
          <MaterialIcons
            name="attach-file"
            style={[
              chatStyle.messageIcon,
              { transform: [{ rotate: "45deg" }] },
            ]}
          />
        </TouchableOpacity>
        <TouchableOpacity style={chatStyle.messageButton}>
          <MaterialIcons name="photo-camera" style={chatStyle.messageIcon} />
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={chatStyle.voiceMessageButton}
        onPress={() => {
          if (message) {
            const now = new Date();
            dispatch(allActions.messages.addMessage({
              id: messages.length + 1,
              sender: 'abc',
              message: message,
              emoji: null,
              time: `${now.getHours()}:${now.getMinutes()}`
            }));
            setMessage("");
          }
        }}
      >
        <MaterialIcons name={message ? "send" : "mic"} style={chatStyle.voiceMessageIcon} />
      </TouchableOpacity>
    </View>
  );
}
