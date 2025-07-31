/**
 * plugins/theme.js
 *
 * Theme configuration for Vuetify
 */

const black = Object.freeze({
  darken5: '#000000',
  darken4: '#000000',
  darken3: '#000000',
  darken2: '#000000',
  darken1: '#000000',
  base: '#000000',
  lighten1: '#000000',
  lighten2: '#000000',
  lighten3: '#000000',
  lighten4: '#000000',
  lighten5: '#000000',
})

const grey = Object.freeze({
  darken5: '#000000',
  darken4: '#0D0D0D',
  darken3: '#262626',
  darken2: '#404040',
  darken1: '#666666',
  base: '#8C8C8C',
  lighten1: '#B3B1B1',
  lighten2: '#CCCACA',
  lighten3: '#E6E3E3',
  lighten4: '#F3F1F1',
  lighten5: '#FAFAFA',
})

const white = Object.freeze({
  darken5: '#FFFFFF',
  darken4: '#FFFFFF',
  darken3: '#FFFFFF',
  darken2: '#FFFFFF',
  darken1: '#FFFFFF',
  base: '#FFFFFF',
  lighten1: '#FFFFFF',
  lighten2: '#FFFFFF',
  lighten3: '#FFFFFF',
  lighten4: '#FFFFFF',
  lighten5: '#FFFFFF',
})

const teal = Object.freeze({
  darken5: '#0D2B33',
  darken4: '#133B47',
  darken3: '#174B59',
  darken2: '#1E6073',
  darken1: '#24768C',
  base: '#288099',
  lighten1: '#319FBE',
  lighten2: '#79C9E0',
  lighten3: '#C2E5EF',
  lighten4: '#E0F1F5',
  lighten5: '#EFF8FA',
})

const green = Object.freeze({
  darken5: '#08332B',
  darken4: '#0B473C',
  darken3: '#0E5C4D',
  darken2: '#127563',
  darken1: '#158C76',
  base: '#19A389',
  lighten1: '#62C0AE',
  lighten2: '#A3DAD0',
  lighten3: '#B9E3DB',
  lighten4: '#D5EEEA',
  lighten5: '#EDF8F6',
})

const blue = Object.freeze({
  darken5: '#0A1A26',
  darken4: '#102C40',
  darken3: '#163D59',
  darken2: '#1D4F73',
  darken1: '#23608C',
  base: '#2A72A5',
  lighten1: '#69A4D0',
  lighten2: '#9BC3E0',
  lighten3: '#BCD7EA',
  lighten4: '#DEEBF5',
  lighten5: '#F2F7FB',
})

const red = Object.freeze({
  darken5: '#330310',
  darken4: '#4D0518',
  darken3: '#660720',
  darken2: '#800929',
  darken1: '#990B31',
  base: '#BB0E3D',
  lighten1: '#D45F7E',
  lighten2: '#E291A7',
  lighten3: '#E9AABB',
  lighten4: '#F2CED8',
  lighten5: '#FAECF0',
})

const purple = Object.freeze({
  darken5: '#240F26',
  darken4: '#3B1940',
  darken3: '#522359',
  darken2: '#5F2866',
  darken1: '#72307A',
  base: '#82368C',
  lighten1: '#A46DAC',
  lighten2: '#BF98C4',
  lighten3: '#D9C2DC',
  lighten4: '#E8DAEA',
  lighten5: '#F5EFF6',
})

const yellow = Object.freeze({
  darken5: '#402F0B',
  darken4: '#59430F',
  darken3: '#806016',
  darken2: '#B3861E',
  darken1: '#D9A325',
  base: '#FFBF17',
  lighten1: '#FED577',
  lighten2: '#FFE29F',
  lighten3: '#FFECBF',
  lighten4: '#FFF2D4',
  lighten5: '#FFF9E9',
})

const orange = Object.freeze({
  darken5: '#402109',
  darken4: '#592E0C',
  darken3: '#804112',
  darken2: '#A85618',
  darken1: '#CC691D',
  base: '#F57E23',
  lighten1: '#F8A668',
  lighten2: '#FBC59B',
  lighten3: '#FCDBC1',
  lighten4: '#FDE8D7',
  lighten5: '#FFF5ED',
})

const _colors = {
  red,
  purple,
  blue,
  teal,
  green,
  yellow,
  orange,
  black,
  white,
  grey,

  // types
  primary: teal,
  secondary: green,
  accent: purple,
  default: grey.darken3,

  // types
  error: red,
  info: blue,
  success: green,
  warning: orange,

  // single colors
  background: white,
  focus: teal,
}

const colors = Object.keys(_colors).reduce((acc, colorName) => {
  const colorObj = _colors[colorName]
  if (typeof colorObj === 'string') {
    acc[colorName] = colorObj
    return acc
  }

  acc[colorName] = colorObj.base
  acc[`${colorName}-darken-1`] = colorObj.darken1
  acc[`${colorName}-darken-2`] = colorObj.darken2
  acc[`${colorName}-darken-3`] = colorObj.darken3
  acc[`${colorName}-darken-4`] = colorObj.darken4
  acc[`${colorName}-darken-5`] = colorObj.darken5
  acc[`${colorName}-lighten-1`] = colorObj.lighten1
  acc[`${colorName}-lighten-2`] = colorObj.lighten2
  acc[`${colorName}-lighten-3`] = colorObj.lighten3
  acc[`${colorName}-lighten-4`] = colorObj.lighten4
  acc[`${colorName}-lighten-5`] = colorObj.lighten5
  return acc
}, {})

export default {
  defaultTheme: 'dark',
  themes: {
    light: {
      dark: false,
      colors: colors,
    },
    dark: {
      dark: true,
      colors: colors,
    },
  },
}
