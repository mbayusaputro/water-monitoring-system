import { createAppContainer, createMaterialTopTabNavigator} from 'react-navigation';
import Table from '../Statistic/Table';
import Graph from '../Statistic/Graph';

const Index = createMaterialTopTabNavigator ({
    Table: {
        screen: Table,
        navigationOptions: {
            title: 'Table'
        }
    },
    Graph: {
        screen: Graph,
        navigationOptions: {
            title: 'Graph'
        }
    }
},{
    tabBarOptions: {
        activeTintColor: '#4167B2',
        inactiveTintColor: 'grey',    
        indicatorStyle: {
            backgroundColor: '#4167B2',
          },
          style: {
            backgroundColor: '#fff',
          }  
    }
});

export default createAppContainer(Index);