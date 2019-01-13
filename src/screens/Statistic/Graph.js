import React from 'react';
import { View, BackHandler, WebView, Text, Dimensions, StyleSheet} from 'react-native';
import { Spinner, Container, Content } from 'native-base';
import {
  LineChart
} from 'react-native-chart-kit'
import { LineChart as LN, YAxis, Grid, AreaChart,XAxis} from 'react-native-svg-charts'
import axios from 'axios'
import * as shape from 'd3-shape'

const chartConfigs = {
  backgroundColor: '#e26a00',
  backgroundGradientFrom: '#fb8c00',
  backgroundGradientTo: '#ffa726',
  decimalPlaces: 2, // optional, defaults to 2dp
  color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
  style: {
    borderRadius: 16
  }
}
class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ikan: []
    }
  }

  componentDidMount() {
    axios.get('http://139.180.220.65:3333/data?limit=all').then((res) => {
      this.setState({ ikan: res.data })
    })
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
  renderLoading() {
    return (<Spinner />)
  }
  render() {
    const contentInset = { top: 20, bottom: 20 }
    const data = [ 3, 5, 7, 10, 15, 18, 20, 22, 25, 26, 28, 30]
    return (
      <Container>
        <Content style={{ backgroundColor: '#C3E4DD' }}>
          {
            (this.state.ikan.length < 1) ? <Spinner /> :
            <View>
              <View style={{ height: 200, flexDirection: 'row' }}>
                <YAxis
                    data={ data }
                    contentInset={ contentInset }
                    svg={{
                        fill: 'grey',
                        fontSize: 10,
                    }}
                    numberOfTicks={ 10 }
                    formatLabel={ value => `${value}` }
                />
                <AreaChart
                    style={ { flex: 1 } }
                    data={ this.state.ikan.suhu }
                    svg={{ fill: 'rgba(29, 170, 102, 0.5)' }}
                    contentInset={ { top: 20, bottom: 20 } }
                    curve={ shape.curveNatural }
                >
                    <Grid/>
                </AreaChart>
                <AreaChart
                    style={ StyleSheet.absoluteFill }
                    data={ this.state.ikan.ph }
                    svg={{ fill: 'rgba(34, 128, 176, 0.5)' }}
                    contentInset={ { top: 20, bottom: 20 } }
                    curve={ shape.curveNatural }
                />
                <AreaChart
                    style={ StyleSheet.absoluteFill }
                    data={ this.state.ikan.tinggi }
                    svg={{ fill: 'rgba(104, 18, 156, 0.5)' }}
                    contentInset={ { top: 20, bottom: 20 } }
                    curve={ shape.curveNatural }
                />
                {/* <Text style={{ alignContent: 'center', textAlign : 'center', fontSize: 14, fontWeight:'bold' }}>
             Bezier Line Chart
            </Text>
           <LineChart
             data={{
               labels: this.state.ikan.waktu,
               datasets: [{
                data: this.state.ikan.suhu
                },
                {
                  data: this.state.ikan.ph
                },  
                {
                  data: this.state.ikan.tinggi
                }
               
               
               ]
             }}
             width={Dimensions.get('window').width} // from react-native
             height={500}
             chartConfig={chartConfigs}            
             bezier
             style={{
               marginVertical: 8,
               borderRadius: 16
             }}
           /> */}
              </View>
               <View style={{ marginTop : 30, paddingLeft : 20 }}>
                <Text style={{ marginBottom : 10, fontWeight : 'bold', fontSize : 16 }}>Information : </Text>
                <Text style={{ fontSize : 12 }}>
                  PH meter adalah sebuah alat elektronik yang berfungsi untuk mengukur pH (derajat keasaman atau kebasaan) suatu cairan (ada elektroda khusus yang berfungsi untuk mengukur pH bahan-bahan semi-padat). 
                  Sebuah pH meter terdiri dari sebuah elektroda (probe pengukur) yang terhubung ke sebuah alat elektronik yang mengukur dan menampilkan nilai pH. alat ini sangat berguna untuk industri air minum, laboratorium, akuarium, industri pakaian terutama batik dan pewarna pakaian 
                  (wikipedia)
                </Text>
                <Text style={{ fontSize : 12, marginTop : 10}}>
                  Elektrode adalah konduktor yang digunakan untuk bersentuhan dengan bagian atau media non-logam dari sebuah sirkuit (misal semikonduktor, elektrolit atau vakum). Ungkapan kata ini diciptakan oleh ilmuwan Michael Faraday dari bahasa Yunani elektron (berarti amber, dan hodos sebuah cara). 
                  (wikipedia)
                </Text>
              </View>
            </View>
            
          }


        </Content>
      </Container>
    )
  }
}

export default Graph;