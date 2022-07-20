import React, { ReactNode, useMemo } from 'react'
import { View, Text, ViewStyle, StyleProp, TextStyle, ViewProps } from 'react-native'
import { Color, Font, Space, mergeStyles } from '../style'

const createBaseStyles = () => ({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: Space.small,
    alignItems: 'center',
  },
  left: {
    flex: 1,
    alignItems: 'flex-start',
  },
  middle: {
    flex: 1,
    alignItems: 'center',
  },
  right: {
    flex: 1,
    alignItems: 'flex-end',
  },
  title: {
    ...Font.bold,
    ...Font.large,
    color: Color.highlight,
  },
})

interface Props {
  children?: ReactNode | ReactNode[]
  title?: string
  styles?: {
    wrapper?: StyleProp<ViewStyle>
    title?: StyleProp<TextStyle>
    left?: StyleProp<ViewStyle>
    middle?: StyleProp<ViewStyle>
    right?: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
}

const getChild = (children: any, place: 'left' | 'middle' | 'right') => {
  if (!children) {
    return null
  }

  if (!Array.isArray(children)) {
    if (children.key === place) {
      return children
    } else {
      return null
    }
  }

  return children.find((child) => child.key === place)
}

export const NavBar = ({ children, title, styles, style, ...props }: Props & ViewProps) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  let Left = getChild(children, 'left')
  let Middle = getChild(children, 'middle')
  let Right = getChild(children, 'right')

  if (!Middle) {
    Middle = <Text style={sheet.title}>{title}</Text>
  }

  return (
    <View style={[sheet.wrapper, style]} {...props}>
      <View style={sheet.left}>{Left}</View>
      <View style={sheet.middle}>{Middle}</View>
      <View style={sheet.right}>{Right}</View>
    </View>
  )
}

NavBar.createStyles = createBaseStyles
