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

const TRIGGER_RACE = true;

class BadAccess extends React.Component {
  componentWillMount() {
    let showLargeGif = large => this.setState({largeGif: large});

    setTimeout(() => {
      showLargeGif(true)
      setTimeout(() => showLargeGif(false), TRIGGER_RACE ? 10 : 1000);
    }, 100);
    this.setState({largeGif: false});
  }

  render() {
    let {largeGif} = this.state;
    let gifUri = (largeGif ? 'large_static' : '1') + '.gif';

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
