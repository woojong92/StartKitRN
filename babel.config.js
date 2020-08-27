module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['emotion'],
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
