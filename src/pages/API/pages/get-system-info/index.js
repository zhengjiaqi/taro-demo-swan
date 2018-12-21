import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '获取手机系统信息'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      systemInfo: {}
    }
  }

  getSystemInfo = () => {
    var that = this
    Taro.getSystemInfo({
      success: function (res) {
        that.setState({
          systemInfo: res
        })
      }
    })
  }

  render () {
    let {systemInfo} = this.state
    return (
    <View class="container">
      <Header title="getSystemInfo"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">手机型号</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.model}></Input>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">微信语言</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.language}></Input>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">微信版本</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.version}></Input>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">屏幕宽度</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.windowWidth}></Input>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">屏幕高度</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.windowHeight}></Input>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">DPI</View>
              </View>
              <View class="weui-cell__bd">
                <Input class="weui-input" type="text" disabled={true} placeholder="未获取" value={systemInfo.pixelRatio}></Input>
              </View>
            </View>
          </View>
          <View class="btn-area">
            <Button type="primary" onTap={this.getSystemInfo}>获取手机系统信息</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

