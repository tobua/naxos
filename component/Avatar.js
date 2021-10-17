// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Color, mergeStyles } from '..'
import avatar from '../asset/avatar.png'

const createBaseStyles = () => ({
  image: {
    borderWidth: 1,
    borderColor: 'black',
  },
  small: {
    width: 10,
    height: 10,
    borderRadius: 10,
  },
  medium: {
    width: 20,
    height: 20,
    borderRadius: 20,
  },
  large: {
    width: 40,
    height: 40,
    borderRadius: 40,
  },
})

export type Props = {
  size?: 'small' | 'large',
  source?: string,
  styles?: StyleSheet.NamedStyles,
}

export const Avatar = ({ size = 'medium', source, styles }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const icon = source || avatar

  return <Image style={[sheet.image, sheet[size]]} source={icon} />
}

Avatar.createStyles = createBaseStyles
