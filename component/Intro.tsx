import React, { useState, useMemo, useRef, ReactNode } from 'react'
import {
  View,
  PanResponder,
  Dimensions,
  Animated,
  Easing,
  ViewStyle,
  StyleProp,
} from 'react-native'
import { Space, mergeStyles } from '../style'
import { Button } from './Button'

const createBaseStyles = () => ({
  wrapper: {
    flex: 1,
    justifyContent: 'space-between',
  },
  slides: {
    flexDirection: 'row',
    flex: 1,
  },
  bottom: {
    padding: Space.medium,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  slide: {
    width: Dimensions.get('window').width,
    height: '100%',
    position: 'absolute',
    top: 0,
  },
  dots: {
    flexDirection: 'row',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 10,
    marginRight: 10,
  },
})

const backgroundStyle = (active: boolean) => ({
  backgroundColor: active ? 'black' : 'lightgray',
})

const windowWidth = Dimensions.get('window').width
const switchSlideThreshold = windowWidth / 3

interface Props {
  children: ReactNode | ReactNode[]
  styles?: {
    wrapper?: StyleProp<ViewStyle>
    slides?: StyleProp<ViewStyle>
    slide?: StyleProp<ViewStyle>
    bottom?: StyleProp<ViewStyle>
    dots?: StyleProp<ViewStyle>
    dot?: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
  onDone?: () => void
}

export const Intro = ({ children, styles, style, onDone }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const state = useMemo(
    () => ({
      index: 0,
    }),
    []
  )
  const [slideIndex, setSlideIndex] = useState(0)
  const position = useRef(new Animated.Value(0)).current
  const childrenArray = Array.isArray(children) ? children : [children]
  const childrenCount = childrenArray.length
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderTerminationRequest: () => true,
      onPanResponderGrant: (_, gestureState) => {
        position.setValue(gestureState.dx + state.index * windowWidth * -1)
      },
      onPanResponderMove: (_, gestureState) => {
        position.setValue(gestureState.dx + state.index * windowWidth * -1)
      },
      onPanResponderRelease: (_, gestureState) => {
        // Next
        if (gestureState.dx < -switchSlideThreshold && state.index < childrenCount - 1) {
          state.index++
        }

        // Previous
        if (gestureState.dx > switchSlideThreshold && state.index > 0) {
          state.index--
        }

        Animated.timing(position, {
          toValue: state.index * windowWidth * -1,
          easing: Easing.ease,
          useNativeDriver: false,
          duration: 300,
        }).start()
        setTimeout(() => {
          setSlideIndex(state.index)
        }, 300)
      },
    })
  ).current

  return (
    <View style={[sheet.wrapper, style]}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          sheet.slides,
          {
            width: childrenCount * windowWidth,
            transform: [{ translateX: position }],
          },
        ]}
      >
        {childrenArray.map((child: any, index) => (
          <View key={child?.key ?? index} style={[sheet.slide, { left: index * windowWidth }]}>
            {child}
          </View>
        ))}
      </Animated.View>
      <View style={sheet.bottom}>
        <View style={sheet.dots}>
          {Array.from(Array(childrenCount)).map((_, index) => (
            <View key={index} style={[sheet.dot, backgroundStyle(slideIndex === index)]} />
          ))}
        </View>
        <Button title={slideIndex === childrenCount - 1 ? 'Done' : 'Skip'} onPress={onDone} />
      </View>
    </View>
  )
}

Intro.createStyles = createBaseStyles

export type SlideProps = {
  children: ReactNode
  key: string
  styles?: {
    wrapper: StyleProp<ViewStyle>
  }
  style?: StyleProp<ViewStyle>
}

const createSlideBaseStyles = () => ({
  wrapper: {},
})

const Slide = ({ children, styles, style }: SlideProps) => {
  const sheet = useMemo(() => mergeStyles(createSlideBaseStyles(), styles), [styles])

  return <View style={[sheet.wrapper, style]}>{children}</View>
}

Slide.createStyles = createSlideBaseStyles

Intro.Slide = Slide
