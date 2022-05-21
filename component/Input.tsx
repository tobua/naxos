import React, { useMemo } from 'react'
import { StyleProp, TextInput, ViewStyle } from 'react-native'
import { mergeStyles } from '../style'

const createBaseStyles = () => ({
  input: {},
})

export type Props = {
  styles?: { input: StyleProp<ViewStyle> }
  style?: StyleProp<ViewStyle>
}

export const Input = ({ styles, style, ...props }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return <TextInput style={[sheet.input, style]} {...props} />
}

Input.createStyles = createBaseStyles
