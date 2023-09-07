import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet} from 'react-native';
import { Picker } from '@react-native-picker/picker';

const CompleteProfileScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  const [isProfileComplete, setIsProfileComplete] = useState(false);

  const handleCompleteProfile = () => {
    // Aquí puedes agregar la lógica para completar el perfil del usuario
    // Por ahora, solo marcamos el perfil como completo
    setIsProfileComplete(true);
  };

  return (
    <View style={styles.container}>
      {isProfileComplete ? (
        <Text style={styles.profileCompleteText}>Perfil completado. ¡Bienvenido, {username}! :D</Text>
      ) : (
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tus apellidos"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <Text style={styles.label}>Nombre de Usuario:</Text>
          <TextInput
            style={styles.input}
            placeholder="Ingresa tu nombre de usuario"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <Text style={styles.label}>Carrera:</Text>
          <Picker
            selectedValue={selectedCareer}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCareer(itemValue)}
          >
            <Picker.Item label="Seleccione una carrera" value="" />
            <Picker.Item label="Licenciatura en Matemáticas LIMA" value="LIMA" />
            <Picker.Item label="Licenciatura en Física LIFI" value="LIFI" />
            <Picker.Item label="Licenciatura en Química LQUI" value="LQUI" />
            <Picker.Item label="Licenciatura en Químico Farmacéutico Biólogo LQFB" value="LQFB" />
            <Picker.Item label="Licenciatura en Ciencia de Materiales LCMA" value="LCMA" />
            <Picker.Item label="Ingeniería Química INQU" value="INQU" />
            <Picker.Item label="Ingeniería Civil ICIV" value="ICIV" />
            <Picker.Item label="Ingeniería en Topografía Geomática" value="ITOG" />
            <Picker.Item label="Ingeniería en Alimentos y Biotecnología" value="LIAB/LINA" />
            <Picker.Item label="Ingeniería Industrial INDU" value="INDU" />
            <Picker.Item label="Ingeniería Industrial INDU" value="INME" />
            <Picker.Item label="Ingeniería en Logística y Transporte LOGT" value="LOGT" />
            <Picker.Item label="Ingeniería en Informática INNI" value="INNI" />
            <Picker.Item label="Ingeniería Biomédica INBI" value="INBI" />
            <Picker.Item label="Ingeniería en Computación INCO" value="INCO" />
            <Picker.Item label="Ingeniería en Comunicaciones y Electrónica INCE" value="INCE" />
            <Picker.Item label="Ingeniería Fotónica IGFO" value="IGFO" />
            <Picker.Item label="Ingeniería Robótica INRO" value="INRO " />
           
          </Picker>

          <Button title="Aceptar" onPress={handleCompleteProfile} />
        </View>
      )}
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
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    width: '80%',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
    width: '80%',
  },
  profileCompleteText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default CompleteProfileScreen;



/*import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image} from 'react-native';
import { Picker } from '@react-native-picker/picker';


const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [selectedCareer, setSelectedCareer] = useState('');
  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const handleRegistration = () => {
    // Aquí puedes agregar la lógica para registrar al usuario
    // Por ahora, solo marcamos el registro como completo
    setIsRegistrationComplete(true);
  };

  return (
    
    <View style={styles.container}>

      {isRegistrationComplete ? (
        <Text style={styles.registrationCompleteText}>Registro exitoso. ¡Bienvenido, {username}! :D</Text>
      ) : (
        <View>
          <Text style={styles.label}>Nombre:</Text>
          <TextInput
            style={styles.input}
            placeholder="Alumno CUCEI"
            value={name}
            onChangeText={(text) => setName(text)}
          />

          <Text style={styles.label}>Apellidos:</Text>
          <TextInput
            style={styles.input}
            placeholder="Apellido Alumno"
            value={lastName}
            onChangeText={(text) => setLastName(text)}
          />

          <Text style={styles.label}>Nombre de Usuario:</Text>
          <TextInput
            style={styles.input}
            placeholder="@ CUCEI_24"
            value={username}
            onChangeText={(text) => setUsername(text)}
          />

          <Text style={styles.label}>Carrera:</Text>
          <Picker
            selectedValue={selectedCareer}
            style={styles.picker}
            onValueChange={(itemValue) => setSelectedCareer(itemValue)}
          >
            <Picker.Item label="Seleccione una carrera" value="" />
            <Picker.Item label="Licenciatura en Física LIFI" value="LIFI" />
            <Picker.Item label="Licenciatura en Matemáticas LIMA" value="LIMA" />
            <Picker.Item label="Licenciatura en Química LQUI" value="LQUI" />
            <Picker.Item label="Licenciatura en Químico Farmacéutico Biólogo LQFB" value="LQFB" />
            <Picker.Item label="Licenciatura en Ciencia de Materiales LCMA" value="LCMA" />
            <Picker.Item label="Ingeniería Química INQU" value="INQU" />
            <Picker.Item label="Ingeniería Civil ICIV" value="ICIV" />
            <Picker.Item label="Ingeniería en Topografía Geomática" value="ITOG" />
            <Picker.Item label="Ingeniería en Alimentos y Biotecnología" value="LIAB/LINA" />
            <Picker.Item label="Ingeniería Industrial INDU" value="INDU" />
            <Picker.Item label="Ingeniería Industrial INDU" value="INME" />
            <Picker.Item label="Ingeniería en Logística y Transporte LOGT" value="LOGT" />
            <Picker.Item label="Ingeniería en Informática INNI" value="INNI" />
            <Picker.Item label="Ingeniería Biomédica INBI" value="INBI" />
            <Picker.Item label="Ingeniería en Computación INCO" value="INCO" />
            <Picker.Item label="Ingeniería en Comunicaciones y Electrónica INCE" value="INCE" />
            <Picker.Item label="Ingeniería Fotónica IGFO" value="IGFO" />
            <Picker.Item label="Ingeniería Robótica INRO" value="INRO " />
          </Picker>

          <Button title="Aceptar" onPress={handleRegistration} />
        </View>
      )}
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
  logo: {
    width: 100,
    height: 100,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
    marginBottom: 15,
    width: '80%',
  },
  picker: {
    borderWidth: 1,
    borderColor: 'purple',
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 15,
    width: '80%',
  },
  registrationCompleteText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegistrationScreen;
*/ 