// presentational component : 데이터를 보여주는 것을 관리

import React, { Component } from "react"
import { View, Text, StyleSheet } from "react-native"
import Button from "../Button"

class Timer extends Component {
  // 아이콘 출처: https://expo.github.io/vector-icons/
  // 1. 우선 큰 view를 만들고, 그 큰 view 안에 두개의 view를 만듬
  // 2. 버튼이라는 컴포넌트에 아이콘 이름과 함수를 전달하면 거기서 알아서 처리한다.
  render() {
    console.log("-------------------")
    console.log("presenter.js 확인: ")
    console.log(this.props)
    console.log("-------------------")


    // 리덕스 연결후 스토어로부터 받아온 값 넣기
    const { isPlaying, elapsedTime, timerDuration, startTimer, restartTimer } = this.props

    // 정지중: ▶버튼 / 실행중: ■버튼
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <Text style={styles.time}> 25:00 </Text>
        </View>

        <View style={styles.lower}>
          {!isPlaying ? <Button iconName="play-circle" onPress={startTimer} /> : null}
          {isPlaying ? <Button iconName="stop-circle" onPress={restartTimer} /> : null}
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "red",
  },

  upper: {
    flex: 2,
    justifyContent: "center", // 위아래 가운데 정렬
    alignItems: "center", // 좌우 가운데 정렬
  },

  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100",
  },
})

export default Timer
