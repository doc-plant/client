import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/login'
import App from './app'
import AuthLoadingScreen from '../screens/index'
import  FirstScreen from '../screens/first_screen';
import  Register from '../screens/register';

const DrawerNavigation = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    FirstScreen: FirstScreen,
    Login: Login,
    Register: Register,
    App: App,
  
   
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const Index = createAppContainer(DrawerNavigation);

export default Index