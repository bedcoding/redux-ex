import React from "react"
import { StyleSheet, Text, View } from "react-native"
import Timer from "./components/Timer"

// 리덕스를 위해 3개 불러온다.
import reducer from "./reducer" // 리듀서를 자동으로 불러온다 - 왜냐하면 리듀서를 디폴트 값으로 export 했기 때문
import { createStore } from "redux"
import { Provider } from "react-redux" // 우리는 리듀서 그리고 앱의 state를 복사할 수 있어야 한다. 우리의 컴포넌트로 복사해와야 함. 방법은 provider를 사용하면 된다.
// provider의 역할은 컴포넌트 안의 스토어를 복사해서 자식 컴포넌트에 넣는 것이다.

// 스토어 생성
let store = createStore(reducer)
console.log(store)

/*
// 이때 로그 찍어보면 이렇게 출력된다.
Object {
  "dispatch": [Function dispatch],
  "getState": [Function getState],
  "replaceReducer": [Function replaceReducer],
  "subscribe": [Function subscribe],
  Symbol(observable): [Function observable],
}
*/

export default function App() {
  // return <Timer />
  // 타이머가 복사할 수 있는 스토어가 생김 (타이머가 스토어와 연결된다)
  // provider의 역할은 컴포넌트 안의 스토어를 복사해서 자식 컴포넌트에 넣는 것이다.
  // provider를 변경할 떄마다 반드시 새로고침을 해야 한다.

  // store에 있는 state를 복사해서 타이머에 붙여넣는다.
  return (
    <Provider store={store}>
      <Timer />
    </Provider>
  )
}

// 리덕스를 사용하려면 리덕스를 설치한 뒤, 리액트 리덕스를 설치해야 한다
// npm install redux react-redux --save (yarn은 자동으로 save 해줌)

// - 스토어는 '오브젝트'다.
// - 오브젝트 안의 데이터를 변경하려면 '액션'을 보내야 한다.
// - 액션을 받는 사람은 'reducer'이고, 이놈은 액션을 살펴본 후 데이터를 변경해준다.
