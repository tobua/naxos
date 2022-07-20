import React, { useMemo } from 'react'
import { Image, ImageProps, ImageStyle, StyleProp } from 'react-native'
import { mergeStyles } from '../style'
import add from '../asset/icon/add.png'
import addRounded from '../asset/icon/add-rounded.png'
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
import back from '../asset/icon/back.png'
import backRounded from '../asset/icon/back-rounded.png'

// Icons cannot be bundled as png using: https://esbuild.github.io/content-types/#external-file
// Currently they are inlined as dataurls and take up a lot of space.
// TODO optimization: create icons using React primitives.

const icons: { [key: string]: { regular: string; rounded?: string } } = {
  arrow: {
    regular: arrow as string,
    rounded: arrowRounded as string,
  },
  close: {
    regular: close as string,
    rounded: closeRounded as string,
  },
  find: {
    regular: find as string,
  },
  menu: {
    regular: menu as string,
    rounded: menuRounded as string,
  },
  pointer: {
    regular: pointer as string,
    rounded: pointerRounded as string,
  },
  like: {
    regular: like as string,
  },
  note: {
    regular: note as string,
  },
  trash: {
    regular: trash as string,
  },
  back: {
    regular: back as string,
    rounded: backRounded as string,
  },
  add: {
    regular: add as string,
    rounded: addRounded as string,
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
  name: 'arrow' | 'close' | 'menu' | 'find' | 'pointer' | 'back' | 'add'
  direction?: 'top' | 'bottom' | 'left' | 'right'
  rounded?: boolean
  color?: string
  size?: 'small' | 'large' | 'medium'
  styles?: {
    image: StyleProp<ImageStyle>
  }
  style?: StyleProp<ImageStyle>
}

export const Icon = ({
  name,
  direction = 'right',
  rounded,
  size = 'medium',
  color = 'black',
  styles,
  style,
  ...props
}: Props & Omit<ImageProps, 'source'>) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const icon = icons[name][rounded ? 'rounded' : 'regular']

  if (!icon) {
    return null
  }

  return (
    <Image
      style={[sheet.image, sheet[size], sheet[direction], { tintColor: color }, style]}
      source={{ uri: icon }}
      {...props}
    />
  )
}

Icon.createStyles = createBaseStyles
