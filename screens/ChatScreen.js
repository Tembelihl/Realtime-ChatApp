import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { GiftedChat } from 'react-native-gifted-chat';

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#007BFF" />
        </TouchableOpacity>
        {/* Empty View to center align */}
        <View style={styles.centerView}></View>
        <Text style={styles.userName}>{userName}</Text>
        {/* Empty View to center align */}
        <View style={styles.centerView}></View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
      />
      <View style={styles.bottomContainer}>
        <View style={styles.bottomItem}>
          <Icon name="home-outline" size={30} color="#000000" />
          <Text style={styles.bottomText}>Home</Text>
        </View>
        <View style={styles.bottomItem}>
          <Icon name="chatbox-outline" size={30} color="#000000" />
          <Text style={styles.bottomText}>Messages</Text>
        </View>
        <View style={styles.bottomItem}>
          <Icon name="person-outline" size={30} color="#000000" />
          <Text style={styles.bottomText}>Profile</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    padding: 10,
  },
  backButton: {
    padding: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  centerView: {
    flex: 1,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 5,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  bottomItem: {
    alignItems: 'center',
  },
  bottomText: {
    fontSize: 10,
  },
});

export default ChatScreen;




