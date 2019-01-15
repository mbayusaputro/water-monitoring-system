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
        height: 50,
        activeTintColor: '#566792',
        inactiveTintColor: '#566792',
        labelStyle : {
            fontWeight: 'bold'
        },
        indicatorStyle: {
            backgroundColor: '#566792',
          },
          style: {
            backgroundColor: '#C3E4DD',
          }  
    }
});

export default createAppContainer(Index);