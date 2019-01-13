import React from 'react';
import { View, Text, Image } from 'react-native';
import { Thumbnail } from 'native-base';

class About extends React.Component{
    render(){
        return(
            <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                <Text>Wamosis v1.0.0 by:</Text>
                <Image style={{margin:10, width:130,height:100}} square source={{uri : 'http://139.180.220.65/water/itarsi.jpg'}}/>
                <View style={{flexDirection:'row'}}>
                    <Thumbnail style={{margin:10}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/social-media-network-fill-flat-icon/512/Gmail-2-512.png'}}/>
                    <Thumbnail style={{margin:10}} source={{uri: 'https://cdn2.iconfinder.com/data/icons/social-media-network-fill-flat-icon/512/Instagram-2-128.png'}}/>
                </View>
            </View>
        )
    }
}

export default About;