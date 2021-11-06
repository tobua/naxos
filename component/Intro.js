// @flow
import React, { Children, useState, useMemo, useRef } from 'react'
import type ReactNode from 'react'
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  PanResponder,
  Dimensions,
  Animated,
  Easing,
} from 'react-native'
import { Color, Font, Space, mergeStyles } from '../style'
import { Button } from './Button'
import { Content } from './Content'

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
    flex: 1,
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

const windowWidth = Dimensions.get('window').width

export type Props = {
  children: ReactNode,
  styles?: StyleSheet.NamedStyles,
  onDone?: () => void,
}

export const Intro = ({ children, styles, onDone }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const state = useMemo(
    () => ({
      index: 0,
    }),
    []
  )
  const [active, setActive] = useState(children[0].key)
  const [slideIndex, setSlideIndex] = useState(0)
  const position = useRef(new Animated.Value(0)).current
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onPanResponderGrant: (evt, gestureState) => {
        position.setValue(gestureState.dx + state.index * windowWidth * -1)
      },
      onPanResponderMove: (evt, gestureState) => {
        position.setValue(gestureState.dx + state.index * windowWidth * -1)
      },
      onPanResponderRelease: (evt, gestureState) => {
        // Next
        if (gestureState.dx < -(windowWidth / 2) && state.index < children.length - 1) {
          state.index++
        }

        // Previous
        if (gestureState.dx > windowWidth / 2 && state.index > 0) {
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
    <View style={sheet.wrapper}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          sheet.slides,
          {
            width: children.length * windowWidth,
            transform: [{ translateX: position }],
          },
        ]}
      >
        {children.map((child, index) => (
          <View key={child.key} style={[sheet.slide, { left: index * windowWidth }]}>
            {child}
          </View>
        ))}
      </Animated.View>
      <View style={sheet.bottom}>
        <View style={sheet.dots}>
          {Array.from(Array(children.length)).map((_, index) => (
            <View
              key={index}
              style={[
                sheet.dot,
                {
                  backgroundColor: slideIndex === index ? 'black' : 'lightgray',
                },
              ]}
            />
          ))}
        </View>
        <Button title={slideIndex === children.length - 1 ? 'Done' : 'Skip'} onPress={onDone} />
      </View>
    </View>
  )
}

Intro.createStyles = createBaseStyles

export type SlideProps = {
  children: ReactNode,
  key: string,
  styles?: StyleSheet.NamedStyles,
}

const createSlideBaseStyles = () => ({
  wrapper: {},
})

Intro.Slide = function Slide({ children, styles }: SlideProps) {
  const sheet = useMemo(() => mergeStyles(createSlideBaseStyles(), styles), [styles])

  return <View style={sheet.wrapper}>{children}</View>
}

Intro.Slide.createStyles = createSlideBaseStyles
