import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LandingPage from './src/screens/LandingPage';
import WebViewPage from './src/screens/WebViewPage';

type RootStackParamList = {
  LandingPage: undefined;
  WebViewPage: { domain: string };
};

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LandingPage">
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="WebViewPage" component={WebViewPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
