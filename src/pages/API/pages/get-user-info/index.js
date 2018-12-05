import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Button, Image } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'getUserInfo'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      hasUserInfo: false,
      userInfo: {}
    }
  }

  getUserInfo = () => {
    var that = this

    if (getGlobalData('hasLogin') === false) {
      Taro.login({
        success: _getUserInfo
      })
    } else {
      _getUserInfo()
    }

    function _getUserInfo() {
      Taro.getUserInfo({
        success: function (res) {
          that.setState({
            hasUserInfo: true,
            userInfo: res.userInfo
          })
        }
      })
    }
  }

  clear = () => {
    this.setState({
      hasUserInfo: false,
      userInfo: {}
    })
  }

  render () {
    let hasUserInfo = this.state.hasUserInfo;
    let userInfo = this.state.userInfo;
    return (
    <View class="container">
      <Header title="getUserInfo"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-body-info">
            <View class="page-body-title">用户信息</View>
            {hasUserInfo === false && (
              <Block>
                <Text>未获取</Text>
                <Text class="page-body-text">点击按钮可获取用户头像及昵称</Text>
              </Block>
            )}
            {hasUserInfo === true && (
              <Block>
                <Image class="userinfo-avatar" src={userInfo.avatarUrl}></Image>
                <Text class="userinfo-nickname">{userInfo.nickName}</Text>
              </Block>
            )}
          </View>
          <View class="btn-area">
            <Button type="primary" onTap={this.getUserInfo}>获取用户信息</Button>
            <Button onTap={this.clear}>清空</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

