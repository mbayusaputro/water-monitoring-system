import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loader from 'react-native-mask-loader';

class App extends React.Component{
  state = {
    appReady: false,
  };

  constructor(){
    super();
    this._image = require('../../assets/splash.png')
  }

  componentDidMount(){
    this.resetAnimation();
  }

  resetAnimation(){
    this.setState({
      appReady: true
    });
  }

  render(){
    setTimeout(()=> {
        if(this.state.appReady === true){
            this.props.navigation.navigate('Home')
        }
    }, 1000);

    return(
        <Loader
        isLoaded={this.state.appReady}
        imageSource={this._image}
        // backgroundStyle={styles.loadingBackgroundStyle}
        >
        </Loader>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  loadingBackgroundStyle: {
    // backgroundColor: 'rgba(125, 125, 255, 1)',
  },
});