import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import common from "../../util/common";
import ChatLoadingScreen from "./loading/ChatLoadingScreen";
import Button from "../components/common/Button";
import { useNavigation } from "@react-navigation/native";
import useVoiceToText from "../../util/hooks/useVoiceToText";
import VoiceModal from "../components/VoiceModal";

// [
//   {
//     user: "currentUser",
//     text: "hi",
//   },
// ];

// {
//   botMessage : {
//     content : text,
//     role : assistant | user
//   },
//   newState : {}
// }

// {
//   messages : [
//     {
//       botMessage : {
//         content : text,
//         role : assistant | user
//       },
//     },
//   ],
//   state : {}
// }

const ChatScreen = () => {
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    (async () => {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          setLoading(false);
          resolve();
        }, 2000);
      });
    })();
  }, []);

  return loading ? (
    <ChatLoadingScreen />
  ) : (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <FlatList
          data={messages}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View
              style={
                item.role === "user" ? styles.userMessage : styles.botMessage
              }
            >
              {item.role !== "user" ? (
                <Image source={require("../../assets/mascot.png")} />
              ) : null}
              <View
                style={
                  item.role === "user"
                    ? styles.subUserMessage
                    : styles.subBotMessage
                }
              >
                <Text style={styles.messageText}>{item.content}</Text>
              </View>
              {item.role === "user" ? (
                <Image source={require("../../assets/bot.png")} />
              ) : null}
            </View>
          )}
        />
      </View>
      <VoiceModal messages={messages} setMessages={setMessages} />
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: common.color.backgroundPrimary,
  },
  subContainer: {
    flex: 1,
    padding: common.sizes.l,
  },
  subUserMessage: {
    padding: common.sizes.ms,
    borderRadius: common.sizes.l,
    marginBottom: common.sizes.m,
    backgroundColor: common.color.buttonPrimary,
  },
  subBotMessage: {
    backgroundColor: common.color.botPrimary,
    padding: common.sizes.ms,
    borderRadius: common.sizes.l,
    marginBottom: common.sizes.m,
  },
  userMessage: {
    alignSelf: "flex-end",
    flexDirection: "row",
  },
  botMessage: {
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  messageText: {
    fontSize: common.sizes.m,
    color: "white",
  },
});
