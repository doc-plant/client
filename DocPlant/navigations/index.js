import { createSwitchNavigator, createAppContainer } from 'react-navigation';
import Login from '../screens/login'
import App from './app'
import AuthLoadingScreen from '../screens/index'


const DrawerNavigation = createAppContainer(createSwitchNavigator(
  {
    AuthLoading: AuthLoadingScreen,
    Login: Login,
    App: App
  },
  {
    initialRouteName: 'AuthLoading',
  }
));

const Index = createAppContainer(DrawerNavigation);

export default Index