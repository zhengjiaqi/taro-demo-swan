import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '标题栏加载动画'
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

  showNavigationBarLoading = () => {
    Taro.showNavigationBarLoading()
  }

  hideNavigationBarLoading = () => {
    Taro.hideNavigationBarLoading()
  }

  render () {
    return (
    <View class="container">
      <Header title="setNaivgationBarTitle"></Header>
      <View class="page-body">
        <View class="btn-area">
          <Button type="primary" onTap={this.showNavigationBarLoading}>显示加载动画</Button>
          <Button ontap={this.hideNavigationBarLoading}>隐藏加载动画</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

