import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '扫码'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      result: ''
    }
  }

  scanCode = () => {
    var that = this
    Taro.scanCode({
      success: function (res) {
        that.setState({
          result: res.result
        })
      },
      fail: function (res) {
      }
    })
  }

  render () {
    let {result} = this.state
    return (
    <View class="container">
      <Header title="scanCode"></Header>
      <View class="page-body">
        <View class="weui-cells__title">扫码结果</View>
        <View class="weui-cells weui-cells_after-title">
          <View class="weui-cell">
            <View class="weui-cell__bd">{result}</View>
          </View>
        </View>
        <View class="btn-area">
          <Button type="primary" onTap={this.scanCode}>扫一扫</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

