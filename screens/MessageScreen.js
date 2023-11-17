import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';


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
    userImg: require('../assets/Users/img2.jpg'),
    messageTime: '2 hours ago',
    messageText:
      'Hey there',
  },
  {
    id: '3',
    userName: 'Sipho',
    userImg: require('../assets/Users/img3.jpg'),
    messageTime: '1 hours ago',
    messageText:
      'Hey there',
  },
  {
    id: '4',
    userName: 'Wendy',
    userImg: require('../assets/Users/img4.jpg'),
    messageTime: '1 day ago',
    messageText:
      'Hey there',
  },
  {
    id: '5',
    userName: 'Sinazo',
    userImg: require('../assets/Users/img5.jpg'),
    messageTime: '2 days ago',
    messageText:
      'Hey there.',
  },
];

const MessageScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Messages</Text>
      </View>
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
    padding: 10,
    backgroundColor: '#ffffff',
  },
  headerContainer: { 
    padding: 10,
    marginBottom: 10,
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    top: 10
  },
  headerText: {
    fontSize: 16,
    color: '#000000',
    fontWeight: 'bold',
  },
  card: {
    width: '100%',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    top: 20
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
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
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

export default MessageScreen;
