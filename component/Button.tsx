import React, { useMemo, ReactNode } from 'react'
import { StyleProp, View, Text, TouchableOpacity, ViewStyle, TextStyle } from 'react-native'
import { Color, mergeStyles } from '../style'

const createBaseStyles = () => ({
  wrapper: {
    justifyContent: 'center',
  },
  text: {
    color: Color.interact,
  },
})

interface Props {
  children?: ReactNode
  title?: string
  onPress?: () => void
  background?: string
  stretch?: boolean
  styles?: {
    touchable?: StyleProp<ViewStyle>
    view?: StyleProp<ViewStyle>
    text?: StyleProp<TextStyle>
  }
  style?: StyleProp<ViewStyle>
}

export const Button = ({ children, title, onPress, styles, style }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  if (!children) {
    children = <Text style={sheet.text}>{title}</Text>
  }

  return (
    <TouchableOpacity style={sheet.touchable} onPress={onPress}>
      <View style={[sheet.view, style]}>{children}</View>
    </TouchableOpacity>
  )
}

Button.createStyles = createBaseStyles
