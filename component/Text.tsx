import React, { useMemo } from 'react'
import { Text as RNText, TextStyle, StyleProp, TextProps } from 'react-native'
import { Font, mergeStyles } from '../style'

const createBaseStyles = () => ({
  text: {},
})

interface Props {
  children: string
  large?: true
  bold?: true
  small?: true
  styles?: {
    text: StyleProp<TextStyle>
  }
  style?: StyleProp<TextStyle>
}

export const Text = ({
  children,
  large,
  bold,
  small,
  styles,
  style,
  ...props
}: Props & TextProps) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return (
    <RNText
      style={[style, large && Font.large, bold && Font.bold, small && Font.small, sheet.text]}
      {...props}
    >
      {children}
    </RNText>
  )
}

Text.createStyles = createBaseStyles
