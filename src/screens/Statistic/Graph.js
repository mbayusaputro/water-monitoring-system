import React from 'react';
import { View, BackHandler } from 'react-native';

class Graph extends React.Component{
    constructor(props) {
        super(props);
      }
    
      componentWillMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
      }
    
      componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
      }
    
      handleBackButton = () => {
        this.props.navigation.pop()
        return true;
      };
    render(){
        return(
            <View></View>
        )
    }
}

export default Graph;