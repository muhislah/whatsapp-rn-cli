import { View, Text, FlatList, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
import { useDispatch, useSelector } from 'react-redux'
import React, { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import EmojiPicker from 'rn-emoji-keyboard'
import { chatStyle } from "../styles/chatStyle";
import allActions from "../store/actions";
import { IMessage } from "../store/reducers/reducerInteface";

interface IProps {
  messages: IMessage[],
  markedId: string | number | null
}

export default function ChatContainer ({ messages, markedId }: IProps) {
  const senderId = 'abc';
  const dispatch = useDispatch()
  const [showEmoji, setShowEmoji] = useState(false)

  const handleSelectMessage = (id: string | number) => {
    dispatch(allActions.messages.markMessage(id as string));
    if (!showEmoji) setShowEmoji(true)
  };

  const handleSelectEmoji = (emojiObject: any) => {
    dispatch(allActions.messages.updateMessage(markedId as number, emojiObject.emoji))
  }

  const keyExtractor = (item: IMessage, index: number): string => { return index.toString() };

  const renderMessage = ({ item }: {item: IMessage}) => {
    return (
      <View>
        <View style={[ item.sender === senderId ? chatStyle.chatBoxLeft2 : chatStyle.chatBoxRight2, ]}>
            <TouchableOpacity onLongPress={() => { handleSelectMessage(item.id) }}>
              <Text style={chatStyle.chatText}>
                { item.message }
              </Text>
              <View style={chatStyle.chatBottomText}>
              <View style={[item.emoji? chatStyle.emojiLayout : '',
                            item.sender === senderId ? chatStyle.emojiRight : chatStyle.emojiLeft,
                          ]}>
                    { 
                      item.emoji ? (
                        <Text style={chatStyle.iconEmoji}>{item.emoji}</Text>
                      ) : (<></>)
                    }
              </View>
                <View><Text style={chatStyle.chatTime}>{item.time} pm</Text></View>
              </View>
            </TouchableOpacity>

            

            <View style={[ item.sender === senderId ? chatStyle.rightArrow : chatStyle.leftArrow ]}></View>
            <View style={[ item.sender === senderId ? chatStyle.rightArrowOverlap : chatStyle.leftArrowOverlap  ]}></View>
            
        </View>
        <View style={{ height:40 }}></View>
      </View>
    );
  };

  return (
      <View style={chatStyle.chatContainer}>
        <SafeAreaView style={{flex: 1}}>
          <FlatList
            data={messages}
            renderItem={renderMessage}
            keyExtractor={keyExtractor}
            // getItemLayout = {(data, index) => ({
            //   length: 70,
            //   offset: 70 * index,
            //   index
            // })}
          />
        </SafeAreaView>
        <EmojiPicker
            onEmojiSelected={handleSelectEmoji}
            open={showEmoji}
            onClose={() => { setShowEmoji(false) }}
            disabledCategories={['activities', 'flags', 'objects', 'symbols']}
        />
    </View>
  );

}
