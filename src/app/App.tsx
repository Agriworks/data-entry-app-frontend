import React from 'react';
import {
  StatusBar,
  useColorScheme,
  SafeAreaView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { enableScreens } from 'react-native-screens';
import '../i18n';
import '../../global.css';
import Login from './public/Login';
import ERP from './authenticated/Home';
import FormsList from './authenticated/workflow/form/FormsList';
import FormDetail from './authenticated/workflow/form/FormDetail';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { RootStackParamList } from '@/shared/RootStackedList';
import { NetworkProvider } from '../context/NetworkProvider';
import Downloads from './authenticated/workflow/downloads';

enableScreens();

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  const Stack = createNativeStackNavigator<RootStackParamList>();

  const backgroundStyle = {
    flex: 1,
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <NetworkProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="ERP" component={ERP} />
            <Stack.Screen name="FormsList" component={FormsList} />
            <Stack.Screen name="FormDetail" component={FormDetail} />
            <Stack.Screen name="Downloads" component={Downloads} />

          </Stack.Navigator>
        </NavigationContainer>
      </NetworkProvider>
    </SafeAreaView>
  );
}

export default App;
