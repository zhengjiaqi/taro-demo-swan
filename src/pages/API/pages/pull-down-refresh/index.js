import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '下拉刷新',
    "enablePullDownRefresh": true
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

  onPullDownRefresh = () => {
    Taro.showToast({
      title: 'loading...',
      icon: 'loading'
    })
    console.log('onPullDownRefresh', new Date())
  }

  stopPullDownRefresh = () => {
    Taro.stopPullDownRefresh({
      complete: function (res) {
        Taro.hideToast()
        console.log(res, new Date())
      }
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="on/stopPullDownRefresh"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-body-info">
            <Text class="page-body-text">下滑页面即可刷新</Text>
          </View>
          <View class="btn-area">
            <Button onTap={this.stopPullDownRefresh}>停止刷新</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

