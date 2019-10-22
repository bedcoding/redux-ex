// 여기서는 redux ducks 방식을 사용한다.

// [리듀서 순서]
// 1. import (필요한 것을 불러온다)
// 2. Actions (액션을 정의)
// 3. Action Creator 정의
// 4. Reducer (리듀서 정의)
// 5. Reducer Function 생성
// 6. Export Action Creator
// 7. Export Reducer

// [액션]
// 첫번째 액션은 '플레이' - 타이머를 시작하는 것
// 두번째 액션은 '멈 춤' - 타이머를 다시 시작하는 것
// 세번째 액션은 '카운트' - 현재 카운트에서 추가하는 것

// [리듀서 순서]
// 1. import (필요한 것을 불러온다)

// 2. Actions (액션을 정의)
const START_TIMER = "START_TIMER"
const RESTART_TIMER = "RESTAR_TIMER"
const ADD_SECOND = "ADD_SECOND"

// 3. Action Creator 정의
// 우리가 버튼을 누르면 이 액션을 보내고, 리덕스는 리듀서로 실행, 액션이 실행된다.
// 액션 '스타트 타이머'를 보내면, 리듀서로 가서 '스타트 타이머' 케이스를 가져와서 데이터에 해당 변환을 적용한다.
function startTimer() {
  return {
    type: START_TIMER, // 예시: 내가 ▶ 버튼을 누르면 이 함수가 소환됨
  }
}

function restartTimer() {
  return {
    type: RESTART_TIMER,
  }
}

function addSecond() {
  return {
    type: ADD_SECOND,
  }
}

// ↓
// ↓
// ↓
// 리덕스는 자동으로 액션을 리듀서로 보낸다.
// ↓
// ↓
// ↓

// 4. Reducer (리듀서 정의)
// ↓ 디폴트 state. 이때 내가 버튼을 누르면 스타트 타이머를 보내고, 리덕스는 리듀서로 액션을 수행
const TIME_DURATION = 1500 // 최대 실행 시간 설정
const initialState = {
  isPlaying: false, // 디폴트 값: stop
  elapsedTime: 0, // 카운터: 0에서 시작
  timerDuration: TIME_DURATION,
}

// 리듀서는 function일 뿐이다. 언제나 state를 가진다.
// a. state 안 주면, 디폴트로 initial state로 시작한다.
// b. 액션을 보낼 때마다 리덕스는 자동으로 리듀서를 실행함.
function reducer(state = initialState, action) {
  switch (action.type) {
    // 만약 액션이 '타이머 시작'이면: 해당 function 수행
    case START_TIMER:
      return applyStartTimer(state, action) // 해당 function은 내가 현재 갖고 있는 state에서 위에 있는 디폴트 state를 overwrite한다. (예: 이 함수는 isPlaying 함수를 true로 변경한다.)

    // 만약 액션이 '타이머 종료'인 경우
    case RESTART_TIMER:
      return applyRestartTimer(state, action)

    // 카운터
    case ADD_SECOND:
      return applyAddSecond(state)

    default:
      return state;
  }
}

// 액션 '스타트 타이머'를 보내면, 리듀서로 가서 '스타트 타이머' 케이스를 가져와서 데이터에 해당 변환(transformation)을 적용한다.

// 5. Reducer Function 생성
// 만약 '스타트 타이머'가 클릭되었을 경우
// 해당 함수는 isPlaying이라는 state 값을 true로 변경시킬 것이다.
function applyStartTimer(state) {
  return {
    ...state, // 이전 state 값도 남겨야 한다. (안쓰면 다 날아감)
    isPlaying: true, // ▶를 눌렀으니 플레이 시작으로 값 변경
  }
}

// 종료 버튼을 누른 경우
function applyRestartTimer(state) {
  return {
    ...state, // 이전 state 값도 남겨야 한다. (안쓰면 다 날아감)
    isPlaying: false, // ■를 눌렀으니 플레이 종료로 값 변경
  }
}

// 카운터
function applyAddSecond(state) {
  // 여기서 new state는 달라. 여기서 체크를 해야 해.
  // elapsedTime: 0에서 시작하는 카운터
  // TIME_DURATION: 최대 실행 시간 (예: 2500초)
  if (state.elapsedTime < TIME_DURATION) {
    return {
      ...state,
      elapsedTime: state.elapsedTime + 1,
    }
  } else {
    return {
      ...state,
      isPlaying: false, // 최대 실행 시간을 초과할 경우 종료
    }
  }
}

// 6. Export Action Creator
// 우리가 사용하고 있는 것들을 export 해준다.
// 우리가 exporting 하는 것들이 버튼이 이행하는 명령이다.
const actionCreators = {
  startTimer,
  restartTimer,
  addSecond,
}

// 7. Export Reducer
export default reducer

// 이제 리듀서를 자동으로 불러온다.
// 왜냐하면 리듀서를 디폴트 값으로 export 했기 때문.
// 여기서 디폴트는 불러오기를 할 때 default export를 불러온다. default export는 여기에 있는 리듀서를 말함.
// 리듀서가 exported 된 후에 스토어를 생성할거다.
// 그리고 스토어는 리덕스에서 온다.