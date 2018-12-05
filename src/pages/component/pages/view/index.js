import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'view'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  onShareAppMessage() {
    Taro.showToast({
      title: 'onShareAppMessage',
      duration: 1000,
    });
    return {
      title: 'view',
      path: 'pages/component/pages/view/main'
    }
  }

  onPullDownRefresh() {
    Taro.showToast({
      title: 'onPullDownRefresh',
      duration: 1000,
    });
  }

  render () {
    return (
    <View class="container">
      <Header title="view"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-section-title">
            <Text>flex-direction: row\n横向布局</Text>
          </View>
          <View class="page-section-spacing">
            <View class="flex-wrp" style="flex-direction:row;">
              <View class="flex-item demo-text-1"></View>
              <View class="flex-item demo-text-2"></View>
              <View class="flex-item demo-text-3"></View>
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="page-section-title">
            <Text>flex-direction: column\n纵向布局</Text>
          </View>
          <View class="flex-wrp" style="flex-direction:column;">
            <View class="flex-item flex-item-V demo-text-1"></View>
            <View class="flex-item flex-item-V demo-text-2"></View>
            <View class="flex-item flex-item-V demo-text-3"></View>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

