import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'login'
  }

  componentWillMount () { }

  componentDidMount () {
    this.setState({
      hasLogin: getGlobalData('hasLogin')
    })
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      hasLogin: false
    }
  }

  login = () => {
    var that = this
    Taro.login({
      success: function (res) {
        setGlobalData('hasLogin', true)
        that.setState({
          hasLogin: true
        })
      }
    })
  }

  render () {
    let hasLogin = this.state.hasLogin;
    return (
    <View class="container">
      <Header title="login"></Header>
      <View class="page-body">
        <View class="page-section">
        {hasLogin === true && (
          <Block>
            <Text class="page-body-title">已登录</Text>
            <Text class="page-body-text">仅需登录 1 次，后续每次进入页面即可根据 id 自动拉取用户信息</Text>
          </Block>
        )}
        {hasLogin === false && (
          <Block>
            <Text class="page-body-text">仅需登录一次</Text>
            <Button class="page-body-button" type="primary" onTap={this.login} >登录</Button>
          </Block>
        )}
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

