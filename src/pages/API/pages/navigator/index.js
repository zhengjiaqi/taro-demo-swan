import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '页面跳转'
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

  navigateTo = () => {
    Taro.navigateTo({ url: '/pages/API/pages/navigator/index' })
  }

  navigateBack = () => {
    Taro.navigateBack()
  }

  redirectTo = () => {
    Taro.redirectTo({ url: '/pages/API/pages/navigator/index' })
  }

  render () {
    return (
    <View class="container">
      <Header title="navigateTo/Back, redirectTo'"></Header>
      <View class="page-body">
        <View class="btn-area">
          <Button onTap={this.navigateTo}>跳转新页面</Button>
          <Button onTap={this.navigateBack}>返回上一页</Button>
          <Button onTap={this.redirectTo}>在当前页面打开</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

