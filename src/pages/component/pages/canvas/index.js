import Taro, { Component } from '@tarojs/taro'
import { View, Text, Canvas } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'canvas'
  }

  componentWillMount () {
    this.position = {
      x: 150,
      y: 150,
      vx: 2,
      vy: 2
    }
    this.context = Taro.createCanvasContext('canvas')
    this.drawBall()
    this.interval = setInterval(this.drawBall, 17)
  }

  componentDidMount () {}

  componentWillUnmount () {
    clearInterval(this.interval)
  }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {};
  }

  drawBall = (e) => {
    var p = this.position
    p.x += p.vx
    p.y += p.vy
    if (p.x >= 300) {
      p.vx = -2
    }
    if (p.x <= 7) {
      p.vx = 2
    }
    if (p.y >= 300) {
      p.vy = -2
    }
    if (p.y <= 7) {
      p.vy = 2
    }

    var context = this.context

    function ball(x, y) {
      context.beginPath(0)
      context.arc(x, y, 5, 0, Math.PI * 2)
      context.setFillStyle('#1aad19')
      context.setStrokeStyle('rgba(1,1,1,0)')
      context.fill()
      context.stroke()
    }

    ball(p.x, 150)
    ball(150, p.y)
    ball(300 - p.x, 150)
    ball(150, 300 - p.y)
    ball(p.x, p.y)
    ball(300 - p.x, 300 - p.y)
    ball(p.x, 300 - p.y)
    ball(300 - p.x, p.y)

    context.draw();
  }

  render () {
    return (
    <View class="container">
      <Header title="canvas"></Header>
      <View class="page-body">
        <View class="page-body-wrapper">
          <Canvas canvas-id="canvas" class="canvas"></Canvas>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

