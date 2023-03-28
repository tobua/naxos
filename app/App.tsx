import React, { useState, Fragment } from 'react'
import { StyleSheet, View, SafeAreaView, ScrollView } from 'react-native'
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
} from 'naxos'

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  firstSlideWrapper: {
    backgroundColor: 'red',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 100,
  },
  firstSlideView: {
    width: 50,
    height: 50,
    backgroundColor: 'yellow',
    borderRadius: 25,
  },
  secondSlideView: {
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: { alignItems: 'center' },
  iconGrid: { flexDirection: 'row' },
  iconSpace: { marginRight: 10 },
  absoluteButton: {
    height: 150,
    position: 'relative',
    borderWidth: 1,
    borderRadius: Space.small,
  },
})

const Heading = ({ children }) => (
  <View style={{ marginBottom: Space.small }}>
    <Text large>{children}</Text>
  </View>
)

const Tab = ({ label, active }: { label: string; active?: boolean }) => (
  <TabBar.Tab>
    <Text bold={active}>{label}</Text>
  </TabBar.Tab>
)

export default () => {
  const [showInto, showIntro] = useState(false)

  if (showInto) {
    return (
      <SafeAreaView style={styles.screen}>
        <Intro onDone={() => showIntro(false)}>
          <Intro.Slide key="first">
            <View style={styles.center}>
              <Content style={styles.firstSlideWrapper}>
                <View style={styles.firstSlideView} />
                <Text>First slide</Text>
              </Content>
            </View>
          </Intro.Slide>
          <Intro.Slide key="second">
            <View style={styles.secondSlideView}>
              <Text>Second slide centered</Text>
            </View>
          </Intro.Slide>
          <Intro.Slide key="third">
            <View style={styles.center}>
              <Text>Third one centered horizontally</Text>
            </View>
          </Intro.Slide>
        </Intro>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Content>
          <Heading>NavBar</Heading>
        </Content>
        <NavBar title="naxos" />
        <NavBar>
          <Icon key="left" name="pointer" direction="left" />
          <Fragment key="middle">
            <Text key="middle">Hello</Text>
          </Fragment>
          <View key="right">
            <Icon name="menu" />
          </View>
        </NavBar>
        <Content>
          <Heading>TabBar</Heading>
        </Content>
        <TabBar onPress={(key) => console.log(key)}>
          <Tab key="home" label="Home" />
          <Tab key="trending" label="Trending" />
          <Tab key="about" label="About" />
        </TabBar>
        <Content>
          <Heading>Text</Heading>
          <Text>This is regular text.</Text>
          <Text bold>This is bold text.</Text>
          <Text large>This is large text.</Text>
          <Text small>This is small text.</Text>
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
          <View style={styles.iconGrid}>
            <Icon name="find" style={styles.iconSpace} />
            <Icon name="find" size="small" style={styles.iconSpace} />
            <Icon name="find" size="large" style={styles.iconSpace} />
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
            onChange={(value) => console.log(`Value ${value} selected.`)}
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
            <Text style={Font.regular}>Profile Content</Text>
            <Text style={Font.small}>About Content</Text>
          </Tabs>
        </Content>
        <Content>
          <Heading>Avatar</Heading>
          <Avatar />
        </Content>
        <Content>
          <Heading>AbsoluteButton</Heading>
          <View style={styles.absoluteButton}>
            <AbsoluteButton type="close" position="top-left" />
            <AbsoluteButton type="close" position="top-right" space={Space.small} />
            <AbsoluteButton type="pointer" position="bottom-left" />
            <AbsoluteButton type="close" position="bottom-right" space={Space.tiny} />
          </View>
        </Content>
      </ScrollView>
    </SafeAreaView>
  )
}
