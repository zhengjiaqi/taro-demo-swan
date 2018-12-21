import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Switch } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'switch'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {};
  }

  switch1Change = (e) => {
    console.log('switch1Change:', e)
    console.log('switch1 发生 change 事件，携带值为', e.detail.value)
  }

  switch2Change = (e) => {
    console.log('switch2Change:', e)
    console.log('switch2 发生 change 事件，携带值为', e.detail.value)
  }

  render () {
    return (
    <View class="container">
      <Header title="switch"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">默认样式</View>
          <View class="body-view">
            <Switch checked onChange={this.switch1Change}/>
            <Switch onChange={this.switch2Change}/>
          </View>
        </View>

        <View class="page-section">
          <View class="page-section-title">推荐展示样式</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_switch">
              <View class="weui-cell__bd">开启中</View>
              <View class="weui-cell__ft">
                <Switch checked />
              </View>
            </View>
            <View class="weui-cell weui-cell_switch">
              <View class="weui-cell__bd">关闭</View>
              <View class="weui-cell__ft">
                <Switch />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

