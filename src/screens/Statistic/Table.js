import React from 'react';
import { View, StyleSheet, WebView, BackHandler } from 'react-native';
import { Container, Row, Col, Text, Content, Grid, Spinner } from 'native-base';

class Table extends React.Component{
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
  renderLoading(){
    return(<Spinner />)
  }
  render(){
    return(
      <WebView
      source={{uri: 'http://139.180.220.65:3333/table'}}
      style={{marginTop: 0, backgroundColor : '#C3E4DD'}}
      renderLoading={this.renderLoading}
      startInLoadingState
    />
      // <Container>
      //   {/* <Content>
      //     <Grid>
      //       <Row>
      //         <Col><Text>Time</Text></Col>
      //         <Col><Text>Water pH</Text></Col>
      //         <Col><Text>Temperatur</Text></Col>
      //         <Col><Text>Height</Text></Col>
      //       </Row>
      //     </Grid>
      //   </Content> */}
      //   <View style={styles.table}>
      //     {
      //       this.data.map(()=> {
      //           return this.renderRow();
      //       })
      //     }
      //   </View>
      // </Container>
    )
  }
}

export default Table;

const styles = StyleSheet.create({
    row: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    col: {
        flex: 1,
        alignSelf: 'stretch'
    },
    table: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
  });