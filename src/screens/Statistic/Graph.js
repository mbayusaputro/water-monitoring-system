import React from 'react';
import { View, Text, Dimensions, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { Spinner, Container, Content, Icon } from 'native-base';
import { LineChart } from 'react-native-chart-kit';
import axios from 'axios';

const chartConfig =
{
  backgroundGradientFrom: '#ACDAD0',
  backgroundGradientTo: '#C3E4DD',
  color: (opacity = 1) => `rgba(0, 45, 223, ${opacity})`
}
const chartSuhu =
{
  backgroundGradientFrom: '#ACDAD0',
  backgroundGradientTo: '#C3E4DD',
  color: (opacity = 1) => `rgba(223, 45, 0, ${opacity})`
}
const width = Dimensions.get('window').width
const height = 220

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chart: false,
      ikan: [],
      tanggal: [],
      page: 1
    }
  }

  componentDidMount() {
    this.getChart(1)
  }

  getChart(number){
    axios.get('http://139.180.220.65:3333/data?page='+number).then((res) => {
      this.setState({ ikan: res.data, tanggal: res.data.waktu, page: number })
    })
  }

  renderLoading() {
    return (<Spinner />)
  }

  renderText(){
    if(this.state.chart === true){
      return(
        <Text style={styles.title}>Temperature</Text>
      )
    }else{
      return(
        <Text style={styles.title}>Water pH</Text>
      )
    }
  }

  renderChart(){
    if(this.state.chart === true){
      return(
        <LineChart
        data={{
          labels: this.state.tanggal,
          datasets: [{
            data: this.state.ikan.suhu
          }]
        }}
        width={width}
        height={height}
        chartConfig={chartSuhu}
        bezier
        style={{
          marginVertical: 8,
        }}
        />
      )
    }else{
      return(
        <LineChart
        data={{
          labels: this.state.tanggal,
          datasets: [{
            data: this.state.ikan.ph
          }]
        }}
        width={width}
        height={height}
        chartConfig={chartConfig}
        bezier
        style={{
          marginVertical: 8,
        }}
        />
      )
    }
  }

  render() {
    return (
      <Container>
        <Content style={{ backgroundColor: '#C3E4DD' }}>
          {
            (this.state.ikan.length < 1) ? <Spinner /> :
            <View>

              <View style={{flexDirection:'row'}}>
              {this.renderText()}
                <Switch style={styles.note}
                onValueChange={value => this.setState({ chart: value, title: value })}
                value={this.state.chart}/>
              </View>
              {this.renderChart()}

              <View style={{flexDirection:'row', justifyContent:'center'}}>
                <TouchableOpacity style={{margin:10}} onPress={()=>{
                  if(this.state.page>1){
                    const back = this.state.page-1;
                    this.getChart(back);
                  }
                }}>
                  <Icon style={{color:'#566792'}} name='arrow-back' />
                </TouchableOpacity>
                <TouchableOpacity style={{margin:10}} onPress={()=>{
                  if(this.state.page<4){
                    const next = this.state.page+1;
                    this.getChart(next);
                  }
                }}>
                  <Icon style={{color:'#566792'}} name='arrow-forward' />
                </TouchableOpacity>
              </View>

              <View style={styles.text}>
                <Text style={styles.texttitle}>Information : </Text>
                <Text style={styles.textcontent}>
                  1. Level pH kolam ikan lele yang baik berkisar 6-9.
                </Text>
                <Text style={styles.textcontent1}>
                  2. Kondisi suhu kolam yang intensif untuk ikan lele adalah berkisar 22&deg;celcius - 32&deg;celcius 
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

const styles = StyleSheet.create({
  title : {
    flex: 1,
    marginVertical: 8,
    marginLeft: 10,
    fontWeight: 'bold'
  },
  note: {
    flex: 1,
    marginVertical: 8
  },
  text: {
    paddingLeft: 20
  },
  texttitle: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 16
  },
  textcontent: {
    fontSize: 12
  },
  textcontent1: {
    fontSize: 12,
    marginTop: 10
  }

});