import React from "react"
import PropTypes from "prop-types"
import { TouchableOpacity } from "react-native"
import { FontAwesome } from "@expo/vector-icons"

// 버튼을 누르는 순간 이 컴포넌트를 호출한다 (버튼 아이콘 이름과 함수를 전달받음)
// onPressOut : onPress는 버튼 누른채 밖으로 나가면 작동 안되지만, Out은 나가는 순간 작동됨
function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPressOut={onPress}>
      <FontAwesome name={iconName} size={80} color="white" />
    </TouchableOpacity>
  )
}

Button.prototype = {
  iconName: PropTypes.string.isRequired, // iconName이 string 타입인지 확인
  onPress: PropTypes.func.isRequired, // onPress는 반드시 funcion 타입임
}

export default Button


/* 
    // 앱의 state를 추적해야 해. 이것이 카운팅을 하고 있다면 추적을 해야 해. 
    // 멈춤 사인을 보내야 하므로. 그 경우가 아니라면 재생 사인을 보여줘야 해.
    {
      isCounting: true | false,  // 참: 타이머 시간 감소 | 거짓: 타이머 시간 멈춤
      maxDuration: 1500,  // 만약 25분이 최대 시간이면: 25*60초
      elapsedTime: 0  // 우리가 카운팅을 시작한지 얼마나 시간이 지났는지 확인 (0초부터 1500초까지)
    }
*/