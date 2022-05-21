import React, { useState } from 'react'
import renderer, { act } from 'react-test-renderer'
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
  // @ts-ignore
  expect(tree.children[0].children[0].props.style.color).toEqual(interactColor)
})

test('Button styles can be modified through configure.', () => {
  configure({ Color: { interact: 'red' } })

  const rendered = renderer.create(<Button title="Press me!" />)
  const tree = rendered.toJSON()
  // @ts-ignore
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
  // @ts-ignore
  expect(tree.children[0].children[0].props.style.color).toEqual(highlightColor)
})

test('Memoized styles can be updated.', () => {
  let colorState: [string, React.Dispatch<React.SetStateAction<string>>] | null = null
  let titleState: [string, React.Dispatch<React.SetStateAction<string>>]
  const renderCount = jest.fn()

  const DynamicComponent = () => {
    colorState = useState('red')
    titleState = useState('Press me!')
    renderCount(colorState[0], titleState[0])
    return <Button title={titleState[0]} styles={{ text: { color: colorState[0] } }} />
  }

  const rendered = renderer.create(<DynamicComponent />)

  let tree = rendered.toJSON()

  expect(colorState).toBeDefined()
  // @ts-ignore
  expect(tree.children[0].children[0].props.style.color).toEqual('red')
  expect(renderCount.mock.calls.length).toBe(1)

  act(() => {
    if (colorState) {
      colorState[1]('blue')
    }
  })

  tree = rendered.toJSON()
  // @ts-ignore
  expect(tree.children[0].children[0].props.style.color).toEqual('blue')
  expect(renderCount.mock.calls.length).toBe(2)
  // @ts-ignore
  expect(tree.children[0].children[0].children[0]).toBe('Press me!')

  act(() => {
    titleState[1]('Press again!')
  })

  tree = rendered.toJSON()
  // @ts-ignore
  expect(tree.children[0].children[0].props.style.color).toEqual('blue')
  expect(renderCount.mock.calls.length).toBe(3)
  // @ts-ignore
  expect(tree.children[0].children[0].children[0]).toBe('Press again!')
})
