// @flow
import React, { useMemo } from 'react'
import type ReactNode from 'react'
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native'
import { Color, mergeStyles } from '../style'
import arrow from '../asset/icon/arrow.png'
import arrowRounded from '../asset/icon/arrow-rounded.png'
import close from '../asset/icon/close.png'
import closeRounded from '../asset/icon/close-rounded.png'
import find from '../asset/icon/find.png'
import menu from '../asset/icon/menu.png'
import menuRounded from '../asset/icon/menu-rounded.png'
import pointer from '../asset/icon/pointer.png'
import pointerRounded from '../asset/icon/pointer-rounded.png'
import like from '../asset/icon/like.png'
import note from '../asset/icon/note.png'
import trash from '../asset/icon/trash.png'

const icons = {
  arrow: {
    regular: arrow,
    rounded: arrowRounded,
  },
  close: {
    regular: close,
    rounded: closeRounded,
  },
  find: {
    regular: find,
  },
  menu: {
    regular: menu,
    rounded: menuRounded,
  },
  pointer: {
    regular: pointer,
    rounded: pointerRounded,
  },
  like: {
    regular: like,
  },
  note: {
    regular: note,
  },
  trash: {
    regular: trash,
  },
}

const createBaseStyles = () => ({
  image: {},
  small: {
    width: 10,
    height: 10,
  },
  medium: {
    width: 20,
    height: 20,
  },
  large: {
    width: 40,
    height: 40,
  },
  right: {},
  top: {
    transform: [{ rotate: '270deg' }],
  },
  bottom: {
    transform: [{ rotate: '90deg' }],
  },
  left: {
    transform: [{ rotate: '180deg' }],
  },
})

export type Props = {
  name: 'arrow' | 'close' | 'menu' | 'find' | 'pointer',
  direction?: 'top' | 'bottom' | 'left',
  rounded?: boolean,
  color?: string,
  size?: 'small' | 'large',
  styles?: StyleSheet.NamedStyles,
}

export const Icon = ({
  name,
  direction = 'right',
  rounded,
  size = 'medium',
  color = 'black',
  styles,
}: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const icon = icons[name][rounded ? 'rounded' : 'regular']

  return (
    <Image
      style={[sheet.image, sheet[size], sheet[direction], { tintColor: color }]}
      source={icon}
    />
  )
}

Icon.createStyles = createBaseStyles