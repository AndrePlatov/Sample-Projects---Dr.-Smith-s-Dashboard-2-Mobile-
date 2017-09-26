import React, {Component} from 'react';
import {  StyleSheet, Text, View, Button, Alert } from 'react-native';


class Greeting extends Component {
  render() {
    return (
      <Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends React.Component {
  
  //onPressLearnMore = () => {}
_onPress() {
  Alert.alert('on Press!');
 }

  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menuuuu??.</Text>
        <Button onPress={this._onPress} title="Hey! Press me!" color="#FFFFFF" backgroundColor="#FBB" accessibilityLabel="Tap on Me"/>

        <Greeting name='Rexxar' />
        <Greeting name='Jaina' />
        <Greeting name='Valeera' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
