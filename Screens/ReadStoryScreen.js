import React from 'react';
import {StyleSheet,Text,View} from 'react-native';

export default class ReadStoryScreen extends React.Component {
    render(){
        return(
            <View style={styels.container}>
                <Text>ReadStory</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

   
  });