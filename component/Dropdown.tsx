import React, { useMemo, useState } from 'react'
import { Text, TouchableOpacity, View, ViewStyle, TextStyle, StyleProp } from 'react-native'
import { Font, Space, mergeStyles } from '../style'
import { Icon } from './Icon'

const createBaseStyles = () => ({
  wrapper: {},
  main: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  currentText: {},
  open: {
    width: '100%',
    marginTop: Space.small,
    paddingLeft: Space.small,
  },
  option: {
    paddingBottom: Space.tiny,
  },
  activeOption: {
    ...Font.bold,
  },
})

interface Props {
  options: string[]
  initial?: string
  onChange: (value: string) => void
  styles?: {
    touchable?: StyleProp<ViewStyle>
    wrapper?: StyleProp<ViewStyle>
    main?: StyleProp<ViewStyle>
    currentText?: StyleProp<TextStyle>
    open?: StyleProp<ViewStyle>
    option?: StyleProp<ViewStyle>
    activeOption?: StyleProp<TextStyle>
  }
  style?: StyleProp<ViewStyle>
}

export const Dropdown = ({ options, initial = options[0], onChange, styles, style }: Props) => {
  const sheet = useMemo(() => mergeStyles(createBaseStyles(), styles), [styles])
  const [current, setCurrent] = useState(initial)
  const [open, setOpen] = useState(false)

  return (
    <TouchableOpacity style={sheet.touchable} onPress={() => !open && setOpen(true)}>
      <View style={[sheet.wrapper, style]}>
        <View style={sheet.main}>
          <Text style={sheet.currentText}>{current}</Text>
          <Icon name="pointer" direction={open ? 'top' : 'bottom'} size="small" />
        </View>
        {open && (
          <View style={sheet.open}>
            {options.map((option) => (
              <TouchableOpacity
                key={option}
                onPress={() => {
                  setCurrent(option)
                  setOpen(false)
                  onChange(option)
                }}
              >
                <View style={sheet.option}>
                  <Text style={[current === option ? sheet.activeOption : null]}>{option}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </View>
    </TouchableOpacity>
  )
}

Dropdown.createStyles = createBaseStyles
