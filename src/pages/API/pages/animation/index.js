import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Input, ScrollView } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '动画'
  }

  componentWillMount () { }

  componentDidMount () {
    this.animation = Taro.createAnimation()
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      animation: ''
    }
  }

  rotate = () => {
    this.animation.rotate(Math.random() * 720 - 360).step()
    this.setState({animation: this.animation.export()})
  }

  scale = () => {
    this.animation.scale(Math.random() * 2).step()
    this.setState({animation: this.animation.export()})
  }

  translate = () => {
    this.animation.translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
    this.setState({animation: this.animation.export()})
  }

  skew = () => {
    this.animation.skew(Math.random() * 90, Math.random() * 90).step()
    this.setState({animation: this.animation.export()})
  }

  rotateAndScale = () => {
    this.animation.rotate(Math.random() * 720 - 360)
        .scale(Math.random() * 2)
        .step()
    this.setState({animation: this.animation.export()})
  }

  rotateThenScale = () => {
    this.animation.rotate(Math.random() * 720 - 360).step()
        .scale(Math.random() * 2).step()
    this.setState({animation: this.animation.export()})
  }

  all = () => {
    this.animation.rotate(Math.random() * 720 - 360)
        .scale(Math.random() * 2)
        .translate(Math.random() * 100 - 50, Math.random() * 100 - 50)
        .skew(Math.random() * 90, Math.random() * 90)
        .step()
    this.setState({animation: this.animation.export()})
  }

  allInQueue = () => {
    console.log('this.animation.rotate(Math.random() * 720 - 360):', this.animation.rotate(Math.random() * 720 - 360))
    console.log('this.animation.rotate(Math.random() * 720 - 360).step():', this.animation.rotate(Math.random() * 720 - 360).step())
    this.animation.rotate(Math.random() * 720 - 360).step()
        .scale(Math.random() * 2).step()
        .translate(Math.random() * 100 - 50, Math.random() * 100 - 50).step()
        .skew(Math.random() * 90, Math.random() * 90).step()
    this.setState({animation: this.animation.export()})
  }

  reset = () => {
    this.animation.rotate(0, 0)
                  .scale(1)
                  .translate(0, 0)
                  .skew(0, 0)
                  .step({duration: 0})
    this.setState({animation: this.animation.export()})
  }

  render () {
    return (
    <View class="container">
      <Header title="createAnimation"></Header>
      <View class="page-body">
        <View class="page-section">

          <View class="animation-element-wrapper">
            <View class="animation-element" animation={this.state.animation}></View>
          </View>
          <ScrollView class="animation-buttons" scroll-y="true">
            <Button class="animation-button" onTap={this.rotate}>旋转</Button>
            <Button class="animation-button" onTap={this.scale}>缩放</Button>
            <Button class="animation-button" onTap={this.translate}>移动</Button>
            <Button class="animation-button" onTap={this.skew}>倾斜</Button>
            <Button class="animation-button" onTap={this.rotateAndScale}>旋转并缩放</Button>
            <Button class="animation-button" onTap={this.rotateThenScale}>旋转后缩放</Button>
            <Button class="animation-button" onTap={this.all}>同时展示全部</Button>
            <Button class="animation-button" onTap={this.allInQueue}>顺序展示全部</Button>
            <Button class="animation-button animation-button-reset" onTap={this.reset}>还原</Button>
          </ScrollView>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

