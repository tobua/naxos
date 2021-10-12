// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color } from '..'

const createBaseStyles = () => ({
  wrapper: {
    justifyContent: 'center',
  },
  text: {
    color: Color.interact,
  },
})

const mergeStyles = (base, user) => {
  // Check if styles are valid.
  const baseStyles = StyleSheet.create(base)

  if (!user) {
    return baseStyles
  }

  const userStyles = StyleSheet.create(user)

  // TODO possibly return array with second as overrides?
  return Object.assign(baseStyles, userStyles)
}

export type Props = {
  children?: ReactNode,
  title?: string,
  onPress?: () => void,
  background?: string,
  stretch?: boolean,
  styles?: StyleSheet.NamedStyles,
}

export const Button = ({ children, title, onPress, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  if (!children) {
    children = <Text style={sheet.text}>{title}</Text>
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={sheet.wrapper}>{children}</View>
    </TouchableOpacity>
  )
}

Button.createStyles = createBaseStyles
