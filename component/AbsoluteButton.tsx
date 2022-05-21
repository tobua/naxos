import React, { useMemo } from 'react'
import { StyleProp, View, TouchableOpacity, ViewStyle } from 'react-native'
import { Space, mergeStyles } from '../style'
import { Icon } from './Icon'

type Position = 'inline' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'

const getPosition = (position: Position, space?: number) => {
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

interface Props {
  onPress: () => void
  type: 'back' | 'close' | 'add'
  position: Position
  space?: number
  styles?: {
    touchable?: StyleProp<ViewStyle>
    view?: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
}

export const AbsoluteButton = ({
  onPress,
  type,
  position,
  space = Space.medium,
  styles,
  style,
}: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return (
    <TouchableOpacity style={[sheet.touchable, getPosition(position, space)]} onPress={onPress}>
      <View style={[sheet.view, style]}>
        <Icon name={type} />
      </View>
    </TouchableOpacity>
  )
}

AbsoluteButton.createStyles = createBaseStyles
