import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Avatar, Icon } from 'react-native-elements';

const ProfileScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Barra de navegación superior */}
      <View style={styles.topMenu}>
      <TouchableOpacity onPress={() => navigation.navigate('FeedScreen')}>
  <Icon name="home" type="font-awesome" color="#000" size={24} />
</TouchableOpacity>
        <TouchableOpacity>
          <Icon name="users" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.activeTab}>
            <Icon name="user" type="font-awesome" color="#1877F2" size={24} />
            <View style={styles.activeIndicator} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="shopping-bag" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bell" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon name="bars" type="font-awesome" color="#000" size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView>
        {/* Imagen de portada */}
        <View style={styles.coverContainer}>
          <Image
            source={{ uri: 'https://via.placeholder.com/400x200' }}
            style={styles.coverImage}
          />
          {/* Foto de perfil superpuesta */}
          <View style={styles.profileImageContainer}>
            <Avatar
              rounded
              size="xlarge"
              source={{ uri: 'https://via.placeholder.com/100' }}
              containerStyle={styles.profileImage}
            />
            <TouchableOpacity style={styles.editProfilePic}>
              <Icon name="camera" type="font-awesome" color="#fff" size={16} />
            </TouchableOpacity>
          </View>
        </View>

        {/* Información del usuario */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Lorem Ipsum</Text>

          {/* Botón "Add to Story" */}
          <View style={styles.storyButtonContainer}>
  <TouchableOpacity style={styles.storyButton}>
    <Icon name="plus-circle" type="font-awesome" color="#fff" size={16} />
    <Text style={styles.buttonText}> Add to Story</Text>
  </TouchableOpacity>

  {/* Botón de edición al lado derecho */}
  <TouchableOpacity style={styles.editButton}>
    <Icon name="ellipsis-h" type="font-awesome" color="#000" size={16} />
  </TouchableOpacity>
</View>

          {/* Información básica */}
          <View style={styles.infoList}>
            <View style={styles.infoItem}>
              <Icon name="briefcase" type="font-awesome" color="#666" size={16} />
              <Text style={styles.infoText}> Work at Lorem Ipsum</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="graduation-cap" type="font-awesome" color="#666" size={16} />
              <Text style={styles.infoText}> Studied at XYZ University</Text>
            </View>
            <View style={styles.infoItem}>
              <Icon name="home" type="font-awesome" color="#666" size={16} />
              <Text style={styles.infoText}> Lives in Example City</Text>
            </View>
            <Text style={styles.viewMore}>See Your About Info</Text>
          </View>

          {/* Botón "Edit Public Details" */}
          <TouchableOpacity style={styles.editDetailsButton}>
            <Text style={styles.editDetailsText}>Edit Public Details</Text>
          </TouchableOpacity>
        </View>

        {/* Sección inferior con "Friends" y "Find Friends" */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Text style={styles.footerText}>Friends</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.footerText}>Find Friends</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },

  /* Barra de navegación superior */
  topMenu: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 60,
  },
  activeTab: { alignItems: 'center' },
  activeIndicator: { width: 40, height: 2, backgroundColor: '#1877F2', marginTop: 2 },

  /* Imagen de portada */
  coverContainer: { width: '100%', height: 200, backgroundColor: '#ccc' },
  coverImage: { width: '100%', height: '100%' },

  /* Foto de perfil */
  profileImageContainer: {
    position: 'absolute',
    bottom: -40,
    left: '50%',
    transform: [{ translateX: -50 }],
  },
  profileImage: { borderWidth: 3, borderColor: '#fff' },
  editProfilePic: {
    position: 'absolute',
    bottom: 5,
    right: 5,
    backgroundColor: '#1877F2',
    borderRadius: 15,
    padding: 5,
  },

  /* Información del usuario */
  userInfo: { alignItems: 'center', marginTop: 50, paddingHorizontal: 20 },
  userName: { fontSize: 22, fontWeight: 'bold', color: '#000' },

  /* Botón "Add to Story" */
  storyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1877F2',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },

  /* Información básica */
  infoList: { width: '100%', marginTop: 20 },
  infoItem: { flexDirection: 'row', alignItems: 'center', marginBottom: 5 },
  infoText: { fontSize: 16, color: '#000', marginLeft: 8 },
  viewMore: { fontSize: 16, color: '#1877F2', marginTop: 5 },

  /* Botón "Edit Public Details" */
  editDetailsButton: {
    backgroundColor: '#1877F2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',  
    justifyContent: 'center',  
  },
  editDetailsText: { fontSize: 14, fontWeight: 'bold', color: '#fff' },

  /* Sección inferior */
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    marginTop: 20,
  },
  footerText: { fontSize: 14, fontWeight: 'bold', color: '#1877F2' },
  storyButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
  },
  
  storyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877F2',
    paddingVertical: 10,
    borderRadius: 8,
    width: '80%',
  },
  
  buttonText: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    color: '#fff', 
    marginLeft: 5 
  },
  
  editButton: {
    backgroundColor: '#e4e6eb',
    padding: 8,
    borderRadius: 8,
  },
});

export default ProfileScreen;