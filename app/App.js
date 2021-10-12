// @flow
import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {NavBar, Button, Text} from 'naxos';

export default () => (
  <SafeAreaView style={styles.screen}>
    <Text large>NavBar</Text>
    <NavBar title="naxos" />
    <NavBar>
      <NavBar.Left>
        <Text>Bakc</Text>
      </NavBar.Left>
      <NavBar.Middle>
        <Text>Hello</Text>
      </NavBar.Middle>
    </NavBar>
    <Text large>Button</Text>
    <Button title="Click me" />
    <Button>
      <Text>Click children</Text>
    </Button>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  title: {
    fontSize: 50,
  },
  subtitle: {
    fontSize: 15,
  },
});
