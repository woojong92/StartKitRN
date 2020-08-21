# 프로젝트 생성

```
npx react-native init [Project Name]
```

# 폴더 구조

- /
  - android /
  - ios /
  - src /
    - assets /
    - components /
    - features /
    - servies /
    - utils

# Root폴더 설정

## babel-plugin-root-import

### install

```
yarn add babel-plugin-root-import -D
```

### babel.config.js 파일 수정

```
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'babel-plugin-styled-components',
    [
      'babel-plugin-root-import',
      {
        rootPathPrefix: '~',
        rootPathSuffix: 'src',
      },
    ],
  ],
};
```

[참고문서](https://dev-yakuza.github.io/ko/react-native/root-import/)

# ESLint 설정

[참고자료](https://dev-yakuza.github.io/ko/react-native/eslint-prettier-husky-lint-staged/)

- React Native

### eslint 초기화

```js
// eslint 초기화
npx eslint --init
```

### 코드 규칙

- configfile -> javascript
- single quotes
- style of indentation -> tabs
- line endings -> unix
- semicolons -> yes

# Prettier 설정

# redux 사용

## redux toolkit

[참고문서](https://redux-toolkit.js.org/introduction/quick-start)

```
yarn add @reduxjs/toolkit
```

## src/store.js

```js
import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: [],
  enhancers: [],
});
```

## src/index.js

# React Navigation

## install

```
yarn add @react-navigation/native
```

```
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
```

```
npx pod-install ios
```
