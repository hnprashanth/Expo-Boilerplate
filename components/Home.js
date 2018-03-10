import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Logged in successfully</Text>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
};

export default Home;
