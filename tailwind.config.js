module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'base-1': '#2f3462',
        'base-2': '#191c3f'
      },
      minHeight: {
        'custom-dashboard-height': 'calc(100% - 64px)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
