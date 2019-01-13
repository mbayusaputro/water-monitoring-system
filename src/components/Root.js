import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Statistic from '../screens/Statistic';
import About from '../screens/About';

const Root = createStackNavigator ({
    Home: {
        screen: Home,
        navigationOptions: {
            header:null
        }
    },
    Statistic: {
        screen: Statistic,
        navigationOptions: {
            title: 'Statistic'
        }
    },
    About: {
        screen: About,
        navigationOptions: {
            header:null
        }
    },
},{
    initialRouteName: 'Home',
    defaultNavigationOptions: {
        headerStyle : {
            backgroundColor: '#C3E4DD',
            elevation: 0,
            height: 50
        },
        headerTintColor : '#566792'
    }
});

const switchNavigator = createSwitchNavigator ({
    Splash : Splash,
    App: Root
})

export default createAppContainer(switchNavigator);