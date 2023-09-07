import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleLogin = () => {
    // Navegar a la pantalla de inicio de sesión
    navigation.navigate('Iniciar Sesión');
  };

  const handleRegistration = () => {
    // Navegar a la pantalla de registro
    navigation.navigate('Registro');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/LOGOAZUL.png')} style={styles.logo} />
      <Text style={styles.title}>Bienvenido</Text>
      <View style={styles.buttonContainer}>
        <Button title="Iniciar Sesión" onPress={handleLogin} />
        <Button title="Registrarte" onPress={handleRegistration} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E4EDF9', // Color de fondo
  },
  logo: {
    width: 300,
    height: 100,
    marginBottom: 80,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
});

export default HomeScreen;
