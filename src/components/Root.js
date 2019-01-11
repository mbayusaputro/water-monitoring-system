import { createStackNavigator, createAppContainer } from 'react-navigation';
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import Statistic from '../screens/Statistic';
import About from '../screens/About';

const Root = createStackNavigator ({
    Splash: {
        screen: Splash,
        headerMode:'none'
    },
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
        screen: About
    },
},{
    initialRouteName: 'Home'
})

export default createAppContainer(Root);