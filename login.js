import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Image } from 'react-native';

const LoginScreen = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [avatarModalVisible, setAvatarModalVisible] = useState(false);
  const [selectedAvatar, setSelectedAvatar] = useState(null);

  const handleLogin = () => {
    // Simular un inicio de sesión exitoso con un usuario y contraseña específicos
    if (username === 'papiyair' && password === 'admin') {
      setLoggedIn(true);
    }
  };

  const handleLogout = () => {
    // Cerrar sesión al cambiar el estado a "deslogueado"
    setLoggedIn(false);
    setUsername('');
    setPassword('');
    setSelectedAvatar(null);
  };

  const selectAvatar = (avatar) => {
    setSelectedAvatar(avatar);
    setAvatarModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.loginBox}>
        {loggedIn ? (
          <View>
            <Text style={styles.welcomeText}>¡Bienvenido, {username}!</Text>
            {selectedAvatar ? (
              <View style={styles.avatarContainer}>
                <Image source={selectedAvatar} style={styles.avatar} />
              </View>
            ) : null}
            <Button title="Cerrar Sesión" onPress={handleLogout} />
          </View>
        ) : (
          <View>
            <TouchableOpacity onPress={() => setAvatarModalVisible(true)}>
              <View style={styles.avatarContainer}>
                {selectedAvatar ? (
                  <Image source={selectedAvatar} style={styles.avatar} />
                ) : (
                  <View style={styles.avatarPlaceholder} />
                )}
              </View>
            </TouchableOpacity>
            <Text style={styles.label}>Usuario:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su usuario"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />

            <Text style={styles.label}>Contraseña:</Text>
            <TextInput
              style={styles.input}
              placeholder="Ingrese su contraseña"
              value={password}
              onChangeText={(text) => setPassword(text)}
              secureTextEntry={true}
            />

            <Button title="Iniciar Sesión" onPress={handleLogin} />
          </View>
        )}

        <Modal visible={avatarModalVisible} animationType="slide" transparent={true}>
          <View style={styles.modalContainer}>
            <Text style={styles.modalTitle}>Seleccionar Tu Avatar</Text>
            <TouchableOpacity onPress={() => selectAvatar(require('./assets/Iconos_animales/ajolote.png'))}>
              <Image source={require('./assets/Iconos_animales/ajolote.png')} style={styles.avatarOption} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectAvatar(require('./assets/Iconos_animales/abeja.png'))}>
              <Image source={require('./assets/Iconos_animales/abeja.png')} style={styles.avatarOption} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectAvatar(require('./assets/Iconos_animales/cangrejo.png'))}>
              <Image source={require('./assets/Iconos_animales/cangrejo.png')} style={styles.avatarOption} />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => selectAvatar(require('./assets/Iconos_animales/Tortuga.png'))}>
                <Image source={require('./assets/Iconos_animales/Tortuga.png')} style={styles.avatarOption} />
            </TouchableOpacity>             
            <TouchableOpacity onPress={() => selectAvatar(require('./assets/Iconos_animales/cucaracha.png'))}>
                <Image source={require('./assets/Iconos_animales/cucaracha.png')} style={styles.avatarOption} />
            </TouchableOpacity>             
            <Button title="Cerrar" onPress={() => setAvatarModalVisible(false)} />
          </View>
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '##E4EDF9', // Color de fondo
  },
  loginBox: {
    width: '80%',
    backgroundColor: 'white',
    padding: 25,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  welcomeText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple', // Color del borde de los campos de texto
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
  },
  avatarContainer: {
    alignItems: 'center',
    justifyContent: 'center', // Centrar verticalmente
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderWidth: 1.5,
    borderColor: 'purple', // Color del borde del avatar
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    backgroundColor: 'lightgray',
    borderRadius: 70,
  },
  modalContainer: {
    flex: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  avatarOption: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginVertical: 10,
  },
});

export default LoginScreen;
