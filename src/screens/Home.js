import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Content, Thumbnail, Icon, Text } from 'native-base';

class Home extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Container style={{justifyContent:'center', backgroundColor: '#C3E4DD'}}>
        <View style={styles.wms}>
        <Thumbnail source={{uri: 'https://bit.ly/2sp7tNz'}}/>
          <Text>Water Monitoring System</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.carditem}>
            <Thumbnail source={{uri: 'https://bit.ly/2sp7tNz'}}/>
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>6.7</Text>
              </View>
              <View style={styles.vtext}>
                <Text>Water pH</Text>
              </View>
            </View>
          </View>
          <View style={styles.carditem}>
            <Thumbnail source={{uri: 'https://bit.ly/2sp7tNz'}}/>
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>30</Text>
              </View>
              <View style={styles.vtext}>
                <Text>Temperature</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.carditem}>
            <Thumbnail source={{uri: 'https://bit.ly/2sp7tNz'}}/>
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>6.7</Text>
              </View>
              <View style={styles.vtext}>
                <Text>Height(cm)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistic')}>
          <View style={styles.carditems}>
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Thumbnail source={{uri: 'https://bit.ly/2sp7tNz'}}/>
              </View>
              <View style={styles.vtext}>
                <Text>Statistic</Text>
              </View>
            </View>
          </View>
          </TouchableOpacity>
        </View>
        <View style={styles.wms}>
          <View style={styles.about}>
            <View style={styles.aboutitem}>
            <Icon name='ios-search'/>
            <Text>About</Text></View>
          </View>
        </View>
      </Container>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
    wms: {
        alignItems: 'center'
    },
    about: {
        flexDirection: 'row',
        margin: 5,
    },
    aboutitem: {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: '#ACDAD0',
        borderRadius: 20,
        padding: 10,
        margin: 5
    },
    card: {
        flexDirection: 'row',
        margin: 5,
        alignItems: 'center'
    },
    carditem: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 10,
        margin: 5,
        backgroundColor: '#ACDAD0',
        borderRadius: 20,
        height: 100
    },
    carditems: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        width: 164,
        backgroundColor: '#ACDAD0',
        borderRadius: 20,
        height: 100
    },
    title: {
        width: 100
    },
    vh1: {
        alignItems: 'center'
    },
    h1: {
        fontWeight: 'bold',
        fontSize: 50
    },
    vtext: {
        alignItems: 'center',
    }
  });