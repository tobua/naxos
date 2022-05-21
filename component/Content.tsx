import React, { useMemo, ReactNode } from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import { Space, mergeStyles } from '../style'

const createBaseStyles = () => ({
  wrapper: {
    paddingTop: Space.small,
    paddingRight: Space.medium,
    paddingBottom: Space.small,
    paddingLeft: Space.medium,
  },
})

interface Props {
  children?: ReactNode
  styles?: {
    wrapper: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
}

export const Content = ({ children, styles, style }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])

  return <View style={[sheet.wrapper, style]}>{children}</View>
}

Content.createStyles = createBaseStyles
