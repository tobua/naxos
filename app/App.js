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
  Avatar,
  Font,
} from 'naxos';

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

const Heading = ({children}) => (
  <View style={{marginBottom: Space.small}}>
    <Text large>{children}</Text>
  </View>
);

const Tab = ({label, active}) => (
  <TabBar.Tab>
    <Text bold={active}>{label}</Text>
  </TabBar.Tab>
);

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
          <Heading>NavBar</Heading>
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
          <Heading>TabBar</Heading>
        </Content>
        <TabBar onPress={key => console.log(key)}>
          <Tab key="home" label="Home" />
          <Tab key="trending" label="Trending" />
          <Tab key="about" label="About" />
        </TabBar>
        <Content>
          <Heading>Text</Heading>
          <Text>This is a paragraph.</Text>
        </Content>
        <Content>
          <Heading>Button</Heading>
          <Button title="Click me" onPress={() => alert('Hello World!')} />
          <Button>
            <Text>Click children</Text>
          </Button>
        </Content>
        <Content>
          <Heading>Icon</Heading>
          <View style={{flexDirection: 'row', gap: 20}}>
            <Icon name="find" />
            <Icon name="find" size="small" />
            <Icon name="find" size="large" />
            <Icon name="find" color={Color.highlight} />
          </View>
        </Content>
        <Content>
          <Heading>Input</Heading>
          <Input placeholder="Enter text..." />
        </Content>
        <Content>
          <Heading>Dropdown</Heading>
          <Dropdown
            options={['Home', 'Profile', 'About']}
            onChange={() => {}}
          />
        </Content>
        <Content>
          <Heading>Intro</Heading>
          <Button title="Show Intro" onPress={() => showIntro(true)} />
        </Content>
        <Content>
          <Heading>Tabs</Heading>
          <Tabs labels={['Home', 'Profile', 'About']}>
            <Text>Home Content</Text>
            <Text>Profile Content</Text>
            <Text>About Content</Text>
          </Tabs>
        </Content>
        <Content>
          <Heading>Avatar</Heading>
          <Avatar />
        </Content>
        <Content>
          <Heading>AbsoluteButton</Heading>
          <View
            style={{
              height: 150,
              position: 'relative',
              borderWidth: 1,
              borderRadius: Space.small,
            }}>
            <AbsoluteButton type="close" position="top-left" />
            <AbsoluteButton
              type="close"
              position="top-right"
              space={Space.small}
            />
            <AbsoluteButton type="pointer" position="bottom-left" />
            <AbsoluteButton
              type="close"
              position="bottom-right"
              space={Space.tiny}
            />
          </View>
        </Content>
      </ScrollView>
    </SafeAreaView>
  );
};
