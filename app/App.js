// @flow
import React, {useState} from 'react';
import {StyleSheet, View, SafeAreaView, ScrollView} from 'react-native';
import {
  NavBar,
  TabBar,
  Button,
  Text,
  Content,
  Icon,
  Tabs,
  Input,
  Dropdown,
  AbsoluteButton,
  Color,
  Space,
  Intro,
} from 'naxos';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default () => {
  const [showInto, showIntro] = useState(false);

  if (showInto) {
    return (
      <SafeAreaView style={styles.screen}>
        <Intro onDone={() => showIntro(false)}>
          <Intro.Slide key="first">
            <Content>
              <Text>First slide.</Text>
            </Content>
          </Intro.Slide>
          <Intro.Slide key="second">
            <Content>
              <Text>Second slide.</Text>
            </Content>
          </Intro.Slide>
          <Intro.Slide key="third">
            <Content>
              <Text>Third slide.</Text>
            </Content>
          </Intro.Slide>
        </Intro>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
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
        <Content>
          <Text large>Icon</Text>
          <View style={{flexDirection: 'row', gap: 20}}>
            <Icon name="find" />
            <Icon name="find" size="small" />
            <Icon name="find" size="large" />
          </View>
        </Content>
        <Content>
          <Text large>Tabs</Text>
          <Tabs labels={['Home', 'Profile', 'About']}>
            <Text>Home Content</Text>
            <Text>Profile Content</Text>
            <Text>About Content</Text>
          </Tabs>
        </Content>
        <Content>
          <Text large>Input</Text>
          <Input placeholder="Enter text..." />
        </Content>
        <Content>
          <Text large>Dropdown</Text>
          <Dropdown
            options={['Home', 'Profile', 'About']}
            onChange={() => {}}
          />
        </Content>
        <Content>
          <Text large>Text</Text>
          <Text>This is a paragraph.</Text>
        </Content>
        <Content>
          <Text large>AbsoluteButton</Text>
          <View
            style={{
              backgroundColor: Color.highlight,
              padding: Space.small,
              flexDirection: 'row',
              gap: Space.medium,
            }}>
            <AbsoluteButton type="close" position="inline" onPress={() => {}} />
            <AbsoluteButton type="add" position="inline" onPress={() => {}} />
            <AbsoluteButton type="back" position="inline" onPress={() => {}} />
          </View>
        </Content>
        <Content>
          <Text large>Intro</Text>
          <Button title="Show Intro" onPress={() => showIntro(true)} />
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
};
