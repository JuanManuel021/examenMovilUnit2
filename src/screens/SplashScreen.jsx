import React, { useEffect } from 'react';
import { View, Image, ActivityIndicator, StyleSheet } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => navigation.replace('FeedScreen'), 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://www.almoradi.es/wp-content/uploads/2022/02/Facebook-logo-1.png' }} style={styles.logo} />
      <ActivityIndicator size="large" color="#1877F2" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  logo: { width: 100, height: 100, marginBottom: 20 },
});

export default SplashScreen;