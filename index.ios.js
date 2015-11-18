/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Image,
  Text,
  View,
} = React;

class BadAccess extends React.Component {

  componentWillMount() {
    let interval = setInterval(() => this.setState(state => ({i: state.i+1})), 59);
    this.setState({interval, i: 0});
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  render() {
    let {i} = this.state;
    let gifUri = ((i % 5) + 1) + '.gif';

    return (
      <View style={styles.container}>
        <Image style={{flex: 1}} source={{uri: gifUri}} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('BadAccess', () => BadAccess);
