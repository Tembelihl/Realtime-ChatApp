import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";

const Messages = [
  {
    id: '1',
    userName: 'Asiphe',
    userImg: require('../assets/Users/img1.jpg'),
    messageTime: '4 mins ago',
    messageText: 'Hey there',
  },
  {
    id: '2',
    userName: 'Lwazi',
    userImg: require('../assets/users/img2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there',
  },
  {
    id: '3',
    userName: 'Sipho',
    userImg: require('../assets/users/img3.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there',
  },
  {
    id: '4',
    userName: 'Wendy',
    userImg: require('../assets/users/img4.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there',
  },
  {
    id: '5',
    userName: 'Sinazo',
    userImg: require('../assets/users/img5.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there.',
  },
];

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={Messages}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Chat', { userName: item.userName })}
          >
            <View style={styles.userInfo}>
              <View style={styles.userImgWrapper}>
                <Image style={styles.userImg} source={item.userImg} />
              </View>
              <View style={styles.textSection}>
                <View style={styles.userInfoText}>
                  <Text style={styles.userName}>{item.userName}</Text>
                  <Text style={styles.postTime}>{item.messageTime}</Text>
                </View>
                <Text style={styles.messageText}>{item.messageText}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#ffffff',
  },
  card: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  userImgWrapper: {
    paddingRight: 15,
  },
  userImg: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textSection: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '70%',
  },
  userInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  userName: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  postTime: {
    fontSize: 12,
    color: '#666',
  },
  messageText: {
    fontSize: 14,
    color: '#333333',
  },
});

export default MessageScreen;
