import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '消息提示框'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {}
  }

  toast1Tap = () => {
    Taro.showToast({
      title: "默认"
    })
  }

  toast2Tap = () => {
    Taro.showToast({
      title: "duration 3000",
      duration: 3000
    })
  }

  toast3Tap = () => {
    Taro.showToast({
      title: "loading",
      icon: "loading",
      duration: 5000
    })
  }

  hideToast = () => {
    Taro.hideToast()
  }

  render () {
    return (
    <View class="container">
      <Header title="toast"></Header>
      <View class="page-body">
        <View class="btn-area">
          <View class="body-view">
            <Button type="default" onTap={this.toast1Tap}>点击弹出默认toast</Button>
          </View>
          <View class="body-view">
            <Button type="default" onTap={this.toast2Tap}>点击弹出设置duration的toast</Button>
          </View>
          <View class="body-view">
            <Button type="default" onTap={this.toast3Tap}>点击弹出显示loading的toast</Button>
          </View>
          <View class="body-view">
            <Button type="default" onTap={this.hideToast}>点击隐藏toast</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

