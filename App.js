import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Stack from './StackNavigation';
import HomeScreen from './screens/HomeScreen'; // Importa tus pantallas
import LoginScreen from './login';
import RegistrationScreen from './register';
import CompleteProfileScreen from './complete_profile';


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen name="Inicio" component={HomeScreen} />
        <Stack.Screen name="Iniciar Sesión" component={LoginScreen} />
        <Stack.Screen name="Registro" component={RegistrationScreen} />
        <Stack.Screen name="Completar_Perfil" component={CompleteProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;





/*import React from 'react';
import AppNavigation from './navigation/appNavigation'; // Ajusta la ruta según sea necesario
import LoginScreen from './login';
//import InteractiveImage from './screens/InteractiveImage';

function App() {
  return (
  
      //<AppNavigation />
      <LoginScreen/>

  );
}

export default App;
*/