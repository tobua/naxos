import React from 'react'
import { StyleSheet, View } from 'react-native'
import renderer from 'react-test-renderer'
import { NavBar } from 'naxos'

test('Renders without any options.', () => {
  const rendered = renderer.create(<NavBar />)
  const tree = rendered.toJSON()
  // @ts-ignore
  expect(tree.type).toEqual('View')
})

test('Renders inside a View with initialCount prop.', () => {
  const styles = StyleSheet.create({
    color: {
      backgroundColor: 'red',
    },
  })

  const rendered = renderer.create(
    <View style={styles.color}>
      <NavBar title="test" />
    </View>,
  )
  const tree = rendered.toJSON()
  // @ts-ignore
  expect(tree.props.style.backgroundColor).toEqual('red')
})
