import React, { useState, useEffect, useCallback } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Avatar } from 'react-native-elements';

const ChatScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { userName } = route.params;
  const [messages, setMessages] = useState([]);
  const [isOnline, setIsOnline] = useState(false); // New state for online status

  const handlePress = () => {
    navigation.navigate('Group');
  }

  useEffect(() => {
    setMessages([
      {
        _id: 2,
        text: 'Hello World',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hello Developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);

    // Simulating online status changes
    const onlineStatusInterval = setInterval(() => {
      setIsOnline((prevStatus) => !prevStatus);
    }, 5000); // Change online status every 5 seconds

    return () => clearInterval(onlineStatusInterval);
  }, []);

  const onSend = useCallback((newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name='send-circle'
            style={{ marginBottom: 5, marginRight: 5 }}
            size={32}
            color='#A389E8'
          />
        </View>
      </Send>
    );
  }

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: "#A389E8"
          }
        }}
        textStyle={{
          right: {
            color: '#fff'
          }
        }}
      />
    );
  }

  const scrollToBottomComponent = () => {
    return (
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Icon name="arrow-back" size={24} color="#000000" />
        </TouchableOpacity>
        <View style={styles.centerView}></View>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={[styles.onlineStatus, { color: isOnline ? 'green' : 'gray' }]}>
          {isOnline ? 'Online' : 'Offline'}
        </Text>
        <View style={styles.centerView}></View>
      </View>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        scrollToBottom
        scrollToBottomComponent={scrollToBottomComponent}
      />
      <TouchableOpacity style={styles.groupIcon} onPress={handlePress}>
        <MaterialCommunityIcons name='account-group' size={30} color='#000000' />
      </TouchableOpacity>
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
  groupIcon: {
    position: 'absolute',
    top: 0,
    right: 16,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 30,
  },
  onlineStatus: {
    fontSize: 12,
    top: 20,
    right: 45,
    color: '#777',
  },
});

export default ChatScreen;