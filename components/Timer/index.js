// 타이머의 presentation을 presenter로 이동하고
// 그리고 인덱스는 나의 스토어에 필요한 것들을 넣는다.
// presenter에는 자바스크립트, 여기에는 present만 한다.
// state 혹은 리덕스 작성은 하지 않음. 이건 인덱스에서 할거다.

// 컨테이너는 인덱스, 여기에 리덕스에 관련된 것을 넣고 presenter는 데이터를 보여주기만 하면 된다. 리덕스 작업은 no

// 첫번째: connect 불러온다.
// connect는 react redux에서 왔다.
// 나의 컴포넌트를 스토어에 연결하는 것을 도와줌.
// 인덱스 컴포넌트: state에서 데이터를 가져오는 것을 관리
import { connect } from "react-redux"
import Timer from "./presenter" // 이제 타이머를 불러올거다.

// 컴포넌트는 props를 리덕스 스토어에서 얻었다.
// 리듀서에서 state를 받아오는 것.

// 컴포넌트의 현재 state를 불러옴.
// 이는 provider store에서 불러온다.
// 왜냐하면 App.js에서 Timer를 감싸고 있는 provider는 자동으로 state를 복사하기 때문.
function mapStateToProps(state) {
  // function 안에서 state를 열고 props를 리턴
  const { isPlaying, elapsedTime, timerDuration } = state
  return {
    isPlaying,
    elapsedTime,
    timerDuration,
  }
}

export default connect(mapStateToProps)(Timer)
