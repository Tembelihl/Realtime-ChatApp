import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import Icon from 'react-native-vector-icons/Ionicons';

const Groups = [
  {
    id: '1',
    groupName: 'Job Seekers',
    groupImg: require('../assets/Users/group1.jpg'),
    lastMessageTime: '4 mins ago',
    users: [
      {
        id: '1',
        userName: 'Asiphe',
        userImg: require('../assets/Users/img1.jpg'),
        lastMessage: 'Hey there',
      },
      {
        id: '2',
        userName: 'Lwazi',
        userImg: require('../assets/Users/img2.jpg'),
        lastMessage: 'Hey there',
      },
      // Add more users as needed
    ],
  },
  {
    id: '2',
    groupName: 'Family Unity',
    groupImg: require('../assets/Users/group2.jpg'),
    lastMessageTime: '2 hours ago',
    users: [
      {
        id: '3',
        userName: 'Sipho',
        userImg: require('../assets/Users/img3.jpg'),
        lastMessage: 'Hey there',
      },
      // Add more users as needed
    ],
  },
  // Add more groups as needed
];


const GroupScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerText}>Groups</Text>
        </View>
        <FlatList
          data={Groups}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.card}
              onPress={() => navigation.navigate('GroupChat', { groupId: item.id })}
            >
              <View style={styles.groupInfo}>
                <View style={styles.groupImgWrapper}>
                  <Image style={styles.groupImg} source={item.groupImg} />
                </View>
                <View style={styles.textSection}>
                  <View style={styles.groupInfoText}>
                    <Text style={styles.groupName}>{item.groupName}</Text>
                  </View>
                  <Text style={styles.lastMessageText}>{item.users[0].lastMessage}</Text>
                </View>
                <Text style={styles.lastMessageTime}>{item.lastMessageTime}</Text>
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
    backgroundColor: '#f4f4f4',
  },
  headerContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    backgroundColor: '#fff',
    margin: 10,
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  groupInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
  },
  groupImgWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    overflow: 'hidden',
  },
  groupImg: {
    width: '100%',
    height: '100%',
  },
  textSection: {
    marginLeft: 10,
    flexShrink: 1,
  },
  groupInfoText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  groupName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lastMessageTime: {
    color: '#777',
  },
  lastMessageText: {
    color: '#555',
    marginRight: 100
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#fff',
  },
  bottomItem: {
    alignItems: 'center',
  },
  bottomText: {
    marginTop: 5,
  },
});

export default GroupScreen;




