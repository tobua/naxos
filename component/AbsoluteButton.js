// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Icon, mergeStyles, Space } from '..'

const createBaseStyles = () => ({
  wrapper: {
    padding: Space.small,
    borderRadius: Space.small,
    backgroundColor: 'rgba(52, 52, 52, 0.5)',
  },
})

export type Props = {
  children?: ReactNode,
  onPress: () => void,
  type: 'back' | 'close' | 'add',
  position:
    | 'inline'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right',
  styles?: StyleSheet.NamedStyles,
}

export const AbsoluteButton = ({
  children,
  onPress,
  type,
  position,
  styles,
}: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={sheet.wrapper}>
        <Icon name="close" />
      </View>
    </TouchableOpacity>
  )
}

AbsoluteButton.createStyles = createBaseStyles
