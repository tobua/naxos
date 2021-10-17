// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { Color, Icon, mergeStyles, Space } from '..'

const getPosition = (position, space) => {
  if (position === 'inline') {
    return null
  }

  const [first, second] = position.split('-')

  return {
    position: 'absolute',
    [first]: space,
    [second]: space,
  }
}

const createBaseStyles = () => ({
  touchable: {},
  view: {
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
  space?: number,
  styles?: StyleSheet.NamedStyles,
}

export const AbsoluteButton = ({
  children,
  onPress,
  type,
  position,
  space = Space.medium,
  styles,
}: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return (
    <TouchableOpacity
      style={[sheet.touchable, getPosition(position, space)]}
      onPress={onPress}
    >
      <View style={sheet.view}>
        <Icon name={type} />
      </View>
    </TouchableOpacity>
  )
}

AbsoluteButton.createStyles = createBaseStyles
