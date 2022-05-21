import React, { useState, useMemo, cloneElement, ReactNode } from 'react'
import { View, Text, TouchableOpacity, StyleProp, TextStyle, ViewStyle } from 'react-native'
import { Space, mergeStyles } from '../style'

const activeStyle = (active: boolean) =>
  ({ fontWeight: active ? 'bold' : 'normal' } as StyleProp<TextStyle>)

const TextTab = ({ active, label }: { active: boolean; label: string }) => (
  <Text style={activeStyle(active)}>{label}</Text>
)

const createBaseStyles = () => ({
  wrapper: {},
  labels: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: Space.small,
  },
  content: {},
})

interface Props {
  children: ReactNode[]
  labels:
    | Exclude<ReactNode, undefined | null | string | number | boolean | Iterable<ReactNode>>[]
    | string[]
  styles?: {
    wrapper?: StyleProp<ViewStyle>
    labels?: StyleProp<ViewStyle>
    content?: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
}

// TODO animation possibly with https://reactnative.dev/docs/layoutanimation

export const Tabs = ({ children, labels, styles, style }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [current, setCurrent] = useState(0)

  return (
    <View style={[sheet.wrapper, style]}>
      <View style={sheet.labels}>
        {labels.map((label, index) => {
          let inner = label

          if (typeof label === 'string') {
            inner = <TextTab label={label} active={false} />
          }

          return (
            <TouchableOpacity
              // @ts-ignore
              key={typeof label === 'string' ? label : label?.key}
              onPress={() => setCurrent(index)}
            >
              {typeof inner === 'string'
                ? inner
                : cloneElement(inner, { active: current === index })}
            </TouchableOpacity>
          )
        })}
      </View>
      <View style={sheet.content}>{children[current]}</View>
    </View>
  )
}

Tabs.createStyles = createBaseStyles
