import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '打电话'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      disabled: true
    }
  }

  bindInput = (e) => {
    this.inputValue = e.detail.value

    if (this.inputValue.length > 0) {
      this.setState({
        disabled: false
      })
    } else {
      this.setState({
        disabled: true
      })
    }
  }

  makePhoneCall = () => {
    var that = this
    Taro.makePhoneCall({
      phoneNumber: this.inputValue,
      success: function () {
        console.log("成功拨打电话")
      }
    })
  }

  render () {
    let {disabled} = this.state
    return (
    <View class="container">
      <Header title="makePhoneCall"></Header>
      <View class="page-body">
        <viViewew class="page-section">
          <View class="desc">请在下方输入电话号码</View>
          <Input class="input" type="number" name="input" onInput={this.bindInput} />
          <View class="btn-area">
            <Button type="primary" onTap={this.makePhoneCall} disabled={disabled}>拨打</Button>
          </View>
        </viViewew>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

