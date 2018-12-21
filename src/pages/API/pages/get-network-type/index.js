import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Block } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '获取手机网络状态'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      hasNetworkType: false,
      networkType: ''
    }
  }

  getNetworkType = () => {
    var that = this
    Taro.getNetworkType({
      success: function (res) {
        console.log(res)
        that.setState({
          hasNetworkType: true,
          networkType: res.subtype || res.networkType
        })
      }
    })
  }

  clear = () => {
    this.setState({
      hasNetworkType: false,
      networkType: ''
    })
  }

  render () {
    let {hasNetworkType, networkType} = this.state
    return (
    <View class="container">
      <Header title="getNetworkType"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-body-info">
            <View class="page-body-title">网络状态</View>
            {
              hasNetworkType === false && (
                <Block>
                  <Text class="page-body-text">未获取</Text>
                  <Text class="page-body-text">点击绿色按钮可获取网络状态</Text>
                </Block>
              )
            }
            {
              hasNetworkType === true && (
                <Block>
                  <Text class="page-body-text-network-type">{networkType}</Text>
                </Block>
              )
            }
          </View>
          <View class="btn-area">
            <Button type="primary" onTap={this.getNetworkType}>获取手机网络状态</Button>
            <Button onTap={this.clear}>清空</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

