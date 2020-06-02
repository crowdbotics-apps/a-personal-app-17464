import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import UserProfile58687Navigator from '../features/UserProfile58687/navigator';
import Tutorial58686Navigator from '../features/Tutorial58686/navigator';
import NotificationList58658Navigator from '../features/NotificationList58658/navigator';
import Settings58657Navigator from '../features/Settings58657/navigator';
import Settings58649Navigator from '../features/Settings58649/navigator';
import UserProfile58647Navigator from '../features/UserProfile58647/navigator';
import ArticleList53349Navigator from '../features/ArticleList53349/navigator';
import ArticleList53348Navigator from '../features/ArticleList53348/navigator';
import ArticleList53347Navigator from '../features/ArticleList53347/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
UserProfile58687: { screen: UserProfile58687Navigator },
Tutorial58686: { screen: Tutorial58686Navigator },
NotificationList58658: { screen: NotificationList58658Navigator },
Settings58657: { screen: Settings58657Navigator },
Settings58649: { screen: Settings58649Navigator },
UserProfile58647: { screen: UserProfile58647Navigator },
ArticleList53349: { screen: ArticleList53349Navigator },
ArticleList53348: { screen: ArticleList53348Navigator },
ArticleList53347: { screen: ArticleList53347Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
