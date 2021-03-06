import React from 'react';
import { 
  View, 
  StyleSheet, 
  Image,
  TouchableOpacity, 
  BackHandler } from 'react-native';
import { 
  Container, 
  Thumbnail, 
  Text } from 'native-base';
import axios from 'axios';

class Home extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
        suhu: '',
        ph: '',
        tinggi: ''
      }
  }

  componentDidMount() {
    axios.get('http://139.180.220.65:3333/data?limit=all').then((res) => {
      this.setState({
        suhu: Math.round(res.data.suhu[res.data.suhu.length-1]),
        ph: res.data.ph[res.data.ph.length-1],
        tinggi: Math.round(res.data.tinggi[res.data.tinggi.length-1])
      })
    })
  }

  // componentWillMount() {
  //   BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
  // }

  // componentWillUnmount() {
  //   BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
  // }

  // handleBackButton = () => {
  //   BackHandler.exitApp();
  //   return true;
  // };
  render() {
    return (
      <Container style={{ justifyContent: 'center', backgroundColor: '#C3E4DD' }}>
        <View style={styles.wms}>
          <Image source={require('../../assets/logo.png')} style={{width:150,height:150,margin:20}}/>
          <Text style={{color:'#566792', fontWeight:'bold', fontSize:20}}>Water Monitoring System</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.carditem}>
            <Thumbnail source={require('../../assets/iconph.png')} />
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>{this.state.ph}</Text>
              </View>
              <View style={styles.vtext}>
                <Text note style={{color:'#000'}}>Water pH</Text>
              </View>
            </View>
          </View>
          <View style={styles.carditem}>
            <Image source={require('../../assets/iconsuhu.png')} style={{width: 25, height: 80, margin:10}}/>
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>{this.state.suhu}&deg;</Text>
              </View>
              <View style={styles.vtext}>
                <Text note style={{color:'#000'}}>Temperature</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.carditem}>
            <Thumbnail square source={require('../../assets/icontinggi.png')} />
            <View style={styles.title}>
              <View style={styles.vh1}>
                <Text style={styles.h1}>{this.state.tinggi}</Text>
              </View>
              <View style={styles.vtext}>
                <Text note style={{color:'#000'}}>Height(cm)</Text>
              </View>
            </View>
          </View>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Statistic')}>
            <View style={styles.carditems}>
              <View style={styles.title}>
                <View style={styles.vh1}>
                  <Image source={require('../../assets/iconstats.png')} style={{width: 75, height: 50}}/>
                </View>
                <View style={styles.vtext}>
                  <Text style={{fontWeight:'bold'}}>Statistic</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('About')}>
        <View style={styles.wms}>
          <View style={styles.about}>
            <View style={styles.aboutitem}>
              <Thumbnail source={require('../../assets/iconinfo.png')} style={styles.imgabout}/>
              <Text style={{fontWeight:'bold'}}>  About</Text>
            </View>
          </View>
        </View>
        </TouchableOpacity>
      </Container>
    )
  }
}

export default Home;

const styles = StyleSheet.create({
    wms: {
      alignItems: 'center',
      margin: 20
    },
    about: {
      flexDirection: 'row',
      margin: 5,
    },
    imgabout: {
      width: 30,
      height: 30
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
      fontSize: 50,
      fontFamily: 'Roboto'
    },
    vtext: {
      alignItems: 'center',
    }
  });
