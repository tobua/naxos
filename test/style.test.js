// @flow
import React from 'react'
import { View } from 'react-native'
import renderer from 'react-test-renderer'
import { Button, Color, configure } from 'naxos'

const highlightColor = '#ee5602'
const interactColor = '#029bee'

test('Can access and configure style values.', () => {
  expect(Color.highlight).toBe(highlightColor)
  expect(Color.interact).toBe(interactColor)

  configure({ Color: { highlight: 'red' } })

  expect(Color.highlight).toBe('red')
  expect(Color.interact).toBe(interactColor)

  configure({ Color: { highlight: highlightColor } })
  configure({ Color: { highlight: highlightColor, interact: interactColor } })
  configure({ Color: {} })
  configure({})

  expect(Color.highlight).toBe(highlightColor)
  expect(Color.interact).toBe(interactColor)
})

test('Button includes color from styles.', () => {
  const rendered = renderer.create(<Button title="Press me!" />)
  const tree = rendered.toJSON()

  expect(tree.children[0].children[0].props.style.color).toEqual(interactColor)
})

test('Button styles can be modified through configure.', () => {
  configure({ Color: { interact: 'red' } })

  const rendered = renderer.create(<Button title="Press me!" />)
  const tree = rendered.toJSON()

  expect(tree.children[0].children[0].props.style.color).toEqual('red')

  configure({ Color: { interact: interactColor } })
})

test('Button styles can modified through styles prop.', () => {
  const styles = Button.createStyles()

  expect(styles.text.color).toBe(interactColor)

  const rendered = renderer.create(
    <Button title="Press me!" styles={{ text: { color: highlightColor } }} />
  )
  const tree = rendered.toJSON()

  expect(tree.children[0].children[0].props.style.color).toEqual(highlightColor)
})
