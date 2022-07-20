import React, { useMemo } from 'react'
import { StyleProp, Image, ImageStyle, ImageSourcePropType, ImageProps } from 'react-native'
import { mergeStyles } from '../style'
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

interface Props {
  size?: 'small' | 'large' | 'medium'
  source?: ImageSourcePropType | string
  styles?: {
    image: StyleProp<ImageStyle>
  }
  style?: StyleProp<ImageStyle>
}

export const Avatar = ({
  size = 'medium',
  source,
  styles,
  style,
  ...props
}: Props & ImageProps) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const icon = source || avatar
  const image = typeof icon === 'string' ? { uri: icon } : icon

  return <Image style={[sheet.image, sheet[size], style]} source={image} {...props} />
}

Avatar.createStyles = createBaseStyles
