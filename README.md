<p align="center">
  <img src="https://github.com/tobua/naxos/raw/main/video.gif" alt="naxos Preview" width="195">
</p>

# naxos

<img align="right" src="https://github.com/tobua/naxos/raw/main/logo.png" width="20%" alt="naxos" />

[![npm](https://img.shields.io/npm/v/naxos)](https://npmjs.com/naxos)
[![codesandbox](https://img.shields.io/badge/demo-codesandbox-yellow)](https://codesandbox.io/s/naxos-web-ypb2ny)

React Native UI components library.

- NavBar, TabBar
- Button, Text, Input, Dropdown, Content
- Icon, Avatar
- Intro, Tabs, AbsoluteButton

## Installation

```
npm i naxos
```

## Usage

```jsx
import React from 'react'
import { AppRegistry, SafeAreaView, ScrollView } from 'react-native'
import { NavBar, TabBar, Text, Content } from 'naxos'

const App = () => (
  <SafeAreaView style={{ flex: 1 }}>
    <NavBar title="naxos" />
    <ScrollView>
      <Content>
        <Text large bold>
          React Native UI Library
        </Text>
      </Content>
    </ScrollView>
    <TabBar>
      <TabBar.Tab key="home">
        <Text>Home</Text>
      </TabBar.Tab>
      <TabBar.Tab key="profile">
        <Text>Profile</Text>
      </TabBar.Tab>
    </TabBar>
  </SafeAreaView>
)

AppRegistry.registerComponent('naxos', () => App)
```

## Components

### `NavBar`

```jsx
import { NavBar, Button, Text, Avatar } from 'naxos'

const Navigation = (
  <NavBar>
    <Button key="left" onPress={back}>
      Back
    </Button>
    <Text key="middle">naxos</Text>
    <Avatar key="right" onPress={go('Profile')} image={userImage} />
  </NavBar>
)
```

The `key` property is required on the root child to indicate the desired position. It can also be placed on a `Fragment` or a `View` wrapping multiple other elements.

### `TabBar`

```jsx
import { TabBar } from 'naxos'

const Tab = ({ label, active }) => (
  <TabBar.Tab>
    <Text bold={active}>{label}</Text>
  </TabBar.Tab>
)

const tabBar = (
  <TabBar onPress={(key) => console.log(key)}>
    <Tab key="home" label="Home" />
    <Tab key="trending" label="Trending" />
    <Tab key="about" label="About" />
  </TabBar>
)
```

### `Button`

By default the button will appear as text in the `Color.interact` color to indicate a possible action.

```jsx
const textButton = <Button title="Click me" onPress={() => alert('clicked')} />
const customButton = (
  <Button onPress={() => alert('clicked')}>
    <Text>Custom button content</Text>
  </Button>
)
```

### `Text`

```jsx
const regularText = <Text>Regular text.</Text>
const largeText = <Text large>Hello title.</Text>
const boldText = <Text bold>Bold and important text.</Text>
```

### `Input`

```jsx
import { Input } from 'naxos'

const regularInput = <Input placeholder="Enter text..." />
```

### `Dropdown`

```jsx
import { Dropdown } from 'naxos'

const simpleDropdown = (
  <Dropdown options={['Home', 'Profile', 'About']} onChange={(option) => alert(option)} />
)
```

### `Content`

Wraps content with `Space.medium` to the side and `Space.small` for top and bottom.

```jsx
import { Content, Button } from 'naxos'

const WrappedButton = (
  <Content>
    <Button title="Hello" onPress={() => alert('Hello World')} />
  </Content>
)
```

### `Icon`

```jsx
import { Icon } from 'naxos'

const backPointer = <Icon name="pointer" direction="left" />
const hamburgerMenu = <Icon name="menu" />
```

### `Avatar`

```jsx
import { Avatar } from 'naxos'
import profileImage from './some-image.png'

const smallAvatar = <Avatar size="small" />
const customImage = <Avatar source={profileImage} />
```

### `Intro`

```jsx
import { Intro, Text } from 'naxos'

const Slides = (
  <Intro skippable onDone={() => setDone(true)}>
    <Intro.Slide key="first">
      <Text>First Slide</Text>
    </Intro.Slide>
    <Intro.Slide key="second">
      <Text>Second Slide</Text>
    </Intro.Slide>
  </Intro>
)
```

### `Tabs`

```jsx
import { Tabs } from 'naxos'

const tabs = (
  <Tabs labels={['Home', 'Profile', 'About']}>
    <Text>Home Content</Text>
    <Text>Profile Content</Text>
    <Text>About Content</Text>
  </Tabs>
)
```

### `AbsoluteButton`

```jsx
import { AbsoluteButton } from 'naxos'

const Slides = (
  <AbsoluteButton
    type="back | close | add"
    position="top-left | top-right | bottom-left | bottom-right"
  />
)
```

## Style

The plugin includes helper values for `Color`, `Space` and `Font` that are shared with the build in components and can also be configured as shown in the next paragraph.

The default styles used by the built-in components can be inspected and extended to allow for significant customization.

```jsx
import { Color, Space, Font, Button } from 'naxos'

const buttonStyles = Button.createStyles()

buttonStyles.wrapper.padding = Space.small
buttonStyles.wrapper.backgroundColor = Color.highlight
buttonStyles.wrapper.borderRadius = Space.tiny

export const CustomizedButton = ({ label, ...props }) => (
  <Button styles={buttonStyles} {...props}>
    {label}
  </Button>
)
```

## Configuration

```jsx
import { AppRegistry } from 'react-native'
import { configure } from 'naxos'
import { App } from './App'

configure({
  Color: {
    interact: '#009695',
    highlight: '#7e0ce1',
  },
  Space: {
    medium: 25,
  },
  Font: {
    bold: {
      fontWeight: 700,
    },
  },
})

AppRegistry.registerComponent('app', () => App)
```
