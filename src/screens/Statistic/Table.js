import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Container, Row, Col, Text, Content, Grid } from 'native-base';

class Table extends React.Component{
  data =[1,2,3,4]
  renderRow(){
    return(
      <View style={styles.row}>
        <View style={styles.col}/>
        <View style={styles.col}/>
        <View style={styles.col}/>
        <View style={styles.col}/>
      </View>
    );
  }

  render(){
    return(
      <Container>
        <Content>
          <Grid>
            <Row>
              <Col><Text>Time</Text></Col>
              <Col><Text>Water pH</Text></Col>
              <Col><Text>Temperatur</Text></Col>
              <Col><Text>Height</Text></Col>
            </Row>
          </Grid>
        </Content>
      </Container>
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