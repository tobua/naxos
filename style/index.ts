import { StyleSheet } from 'react-native'

export const Color = {
  highlight: '#ee5602',
  interact: '#029bee',
}

export const Space = {
  tiny: 5,
  small: 10,
  medium: 20,
  large: 40,
  huge: 80,
}

export const Font = {
  bold: {
    fontWeight: 'bold',
  },
  regular: {
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
  large: {
    fontSize: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 25,
    fontWeight: 'bold',
  },
}

type ConfigureInput = {
  Color?: Partial<typeof Color>
  Space?: Partial<typeof Space>
  Font?: Partial<typeof Font>
}

export const configure = (inputs: ConfigureInput = {}) => {
  if (inputs.Color) {
    Object.assign(Color, inputs.Color)
  }
  if (inputs.Space) {
    Object.assign(Space, inputs.Space)
  }
  if (inputs.Font) {
    Object.assign(Font, inputs.Font)
  }
}

export const mergeStyles = (base: any, user: any) => {
  // Check if styles are valid.
  const baseStyles = StyleSheet.create(base)

  if (!user) {
    return baseStyles
  }

  const userStyles = StyleSheet.create(user)

  // TODO possibly return array with second as overrides? harder to debug...
  return Object.assign(baseStyles, userStyles)
}
