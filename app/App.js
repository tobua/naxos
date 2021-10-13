// @flow
import React from 'react';
import {StyleSheet, View, SafeAreaView} from 'react-native';
import {NavBar, TabBar, Button, Text, Content, Icon} from 'naxos';

export default () => (
  <SafeAreaView style={styles.screen}>
    <Content>
      <Text large>NavBar</Text>
    </Content>
    <NavBar title="naxos" />
    <NavBar>
      <NavBar.Left>
        <Icon name="pointer" direction="left" />
      </NavBar.Left>
      <NavBar.Middle>
        <Text>Hello</Text>
      </NavBar.Middle>
      <NavBar.Right>
        <Icon name="menu" />
      </NavBar.Right>
    </NavBar>
    <Content>
      <Text large>TabBar</Text>
    </Content>
    <TabBar onPress={key => console.log(key)}>
      <TabBar.Tab key="home">
        <Text>Home</Text>
      </TabBar.Tab>
      <TabBar.Tab key="trending">
        <Text>Trending</Text>
      </TabBar.Tab>
      <TabBar.Tab key="about">
        <Text>About</Text>
      </TabBar.Tab>
    </TabBar>
    <Content>
      <Text large>Button</Text>
      <Button title="Click me" />
      <Button>
        <Text>Click children</Text>
      </Button>
    </Content>
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
