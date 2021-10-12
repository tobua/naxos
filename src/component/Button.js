// @flow
import React from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'center',
  },
})

export type Props = {
  children?: ReactNode,
  title?: string,
  onPress?: () => void,
  background?: string,
  stretch?: boolean,
}

export const Button = ({ children, title, onPress }: Props) => {
  if (!children) {
    children = <Text>{title}</Text>
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>{children}</View>
    </TouchableOpacity>
  )
}
