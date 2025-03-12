import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Card, Avatar, Icon } from "react-native-elements";

const FeedScreen = ({ navigation }) => {
  const stories = [
    {
      id: "1",
      name: "Create story",
      image: "https://via.placeholder.com/100",
      isCreate: true,
    },
    {
      id: "2",
      name: "Manuel Vazquez",
      image: "https://via.placeholder.com/100",
    },
    {
      id: "3",
      name: "Farith Salomón",
      image: "https://via.placeholder.com/100",
    },
    { id: "4", name: "NEURO", image: "https://via.placeholder.com/100" },
  ];

  const posts = [
    {
      id: "1",
      user: "UTEZ Universidad Tecnológica",
      text: "¡Nuevas oportunidades de intercambio académico!",
      images: [
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
        "https://via.placeholder.com/150",
      ],
    },
  ];

  const activeUsers = [
    { id: "1", image: "https://via.placeholder.com/100" },
    { id: "2", image: "https://via.placeholder.com/100" },
    { id: "3", image: "https://via.placeholder.com/100" },
    { id: "4", image: "https://via.placeholder.com/100" },
    { id: "5", image: "https://via.placeholder.com/100" },
  ];

  return (
    <View style={styles.container}>
      {/* Barra superior */}
      <View style={styles.header}>
        <Text style={styles.logo}>facebook</Text>
        <View style={styles.icons}>
          <Icon name="plus" type="font-awesome" color="#000" size={22} />
          <Icon name="search" type="font-awesome" color="#000" size={22} />
          <Icon name="bars" type="font-awesome" color="#000" size={22} />
        </View>
      </View>

      {/* Barra de iconos debajo del header */}
      <View style={styles.topMenu}>
        <TouchableOpacity>
          <Icon name="home" type="font-awesome" color="#1877F2" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="users" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Icon name="user" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="shopping-bag"
            type="font-awesome"
            color="#000"
            size={24}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Avatar
            rounded
            size="small"
            source={{ uri: "https://via.placeholder.com/50" }}
          />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Sección de creación de publicaciones en fila */}
        <View style={styles.createPost}>
          <Avatar rounded source={{ uri: "https://via.placeholder.com/50" }} />
          <TextInput
            placeholder="What's on your mind?"
            style={styles.input}
            placeholderTextColor="#000"
          />
        </View>
        {/* Opciones de publicación en fila */}
        <View style={styles.postOptions}>
          <TouchableOpacity style={styles.option}>
            <Icon
              name="video-camera"
              type="font-awesome"
              color="red"
              size={20}
            />
            <Text style={styles.optionText}>Live</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="image" type="font-awesome" color="green" size={20} />
            <Text style={styles.optionText}>Photo</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.option}>
            <Icon name="video" type="font-awesome" color="purple" size={20} />
            <Text style={styles.optionText}>Room</Text>
          </TouchableOpacity>
        </View>

        {/* Sección "Create Room" en fila */}
        <View style={styles.createRoomContainer}>
          <TouchableOpacity style={styles.createRoomButton}>
            <Icon
              name="video-camera"
              type="font-awesome"
              color="purple"
              size={20}
            />
            <Text style={styles.createRoomText}>Create Room</Text>
          </TouchableOpacity>
          <FlatList
            horizontal
            data={activeUsers}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.activeUser}>
                <Avatar rounded size="medium" source={{ uri: item.image }} />
                <View style={styles.onlineIndicator} />
              </View>
            )}
          />
        </View>

        {/* Lista de historias en fila */}
        <View style={styles.storyContainer}>
          <FlatList
            horizontal
            data={[
              {
                id: "0",
                name: "Create Story",
                image: "https://via.placeholder.com/100",
                isCreate: true,
              },
              {
                id: "1",
                name: "Manuel Vazquez",
                image: "https://via.placeholder.com/100",
              },
              {
                id: "2",
                name: "Farith Salomón",
                image: "https://via.placeholder.com/100",
              },
              {
                id: "3",
                name: "NEURO",
                image: "https://via.placeholder.com/100",
              },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.story}>
                {/* Avatar superior */}
                <Avatar
                  rounded
                  size="medium"
                  source={{ uri: item.image }}
                  containerStyle={styles.avatarStory}
                />

                {/* Fondo de historia */}
                <View style={styles.storyBackground}>
                  {item.isCreate ? (
                    <>
                      <TouchableOpacity style={styles.createStoryButton}>
                        <Icon
                          name="plus"
                          type="font-awesome"
                          color="white"
                          size={14}
                        />
                      </TouchableOpacity>
                      <Text style={styles.createStoryText}>Create Story</Text>
                    </>
                  ) : null}
                </View>
              </View>
            )}
          />
        </View>

        {/* Lista de publicaciones */}
        <FlatList
          data={[
            {
              id: "1",
              user: "Lorem Ipsum",
              time: "2h",
              text: "Este es un post de prueba",
              image: "https://via.placeholder.com/300",
            },
          ]}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card containerStyle={styles.postCard}>
              {/* Encabezado del post */}
              <View style={styles.postHeader}>
                <View style={styles.userInfo}>
                  <Avatar
                    rounded
                    source={{ uri: "https://via.placeholder.com/50" }}
                  />
                  <View style={styles.userText}>
                    <Text style={styles.postName}>{item.user}</Text>
                    <Text style={styles.postTime}>{item.time} • 🌎</Text>
                  </View>
                </View>
                <Icon
                  name="ellipsis-h"
                  type="font-awesome"
                  color="#666"
                  size={16}
                />
              </View>

              {/* Contenido del post */}
              <Text style={styles.postText}>{item.text}</Text>
              {item.image && (
                <Image source={{ uri: item.image }} style={styles.postImage} />
              )}
            </Card>
          )}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 60,
  },
  logo: { fontSize: 24, fontWeight: "bold", color: "#1877F2" },
  icons: { flexDirection: "row", gap: 15 },
  topMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  createPost: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  input: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: "#e4e6eb",
    padding: 8,
    borderRadius: 20,
    color: "#000",
  },
  postOptions: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  createRoomContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  createRoomButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#e4e6eb",
    padding: 10,
    borderRadius: 20,
    marginRight: 10,
  },
  createRoomText: { marginLeft: 5, color: "purple", fontWeight: "bold" },
  activeUser: { position: "relative", marginHorizontal: 5 },
  onlineIndicator: {
    position: "absolute",
    bottom: 5,
    right: 5,
    width: 10,
    height: 10,
    backgroundColor: "green",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#fff",
  },
  storyContainer: { marginTop: 10, padding: 10, flexDirection: "row" },

  story: {
    width: 100,
    height: 170,
    borderRadius: 15,
    backgroundColor: "#ddd",
    marginRight: 10,
    alignItems: "center",
    overflow: "hidden",
  },

  avatarStory: {
    position: "absolute",
    top: 10,
    borderWidth: 2,
    borderColor: "#1877F2",
  },

  storyBackground: {
    flex: 1,
    width: "100%",
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 10,
  },

  createStoryButton: {
    backgroundColor: "#1877F2",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 5,
  },

  createStoryText: {
    fontSize: 12,
    fontWeight: "bold",
    color: "#000",
  },
  postCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    marginVertical: 8,
    elevation: 2,
  },

  postHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  userInfo: {
    flexDirection: "row",
    alignItems: "center",
  },

  userText: {
    marginLeft: 8,
  },

  postName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
  },

  postTime: {
    fontSize: 12,
    color: "#777",
  },

  postText: {
    fontSize: 14,
    color: "#000",
    marginVertical: 5,
  },

  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginTop: 5,
  },
});

export default FeedScreen;
