import React from 'react';
import { View, StyleSheet } from 'react-native';
import Loader from 'react-native-mask-loader';
import Root from './src/components/Root';

class App extends React.Component{
  state = {
    appReady: false,
    rootKey: Math.random()
  };

  constructor(){
    super();
    this._image = require('./assets/wallet.png')
  }

  componentDidMount(){
    this.resetAnimation();
  }

  resetAnimation(){
    this.setState({
      appReady: false,
      rootKey: Math.random()
    });

    setTimeout(() => {
      this.setState({
        appReady: true
      });
    }, 1000);
  }

  render(){
    return(
      <View key={this.state.rootKey} style={styles.root}>
        <Loader
        isLoaded={this.state.appReady}
        imageSource={this._image}
        backgroundStyle={styles.loadingBackgroundStyle}
        >
          {/* <View style={styles.container}> */}
            <Root/>
          {/* </View> */}
        </Loader>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  loadingBackgroundStyle: {
    backgroundColor: 'rgba(125, 125, 255, 1)',
  },
});