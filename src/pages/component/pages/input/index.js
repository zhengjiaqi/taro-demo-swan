import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Input, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'input'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      focus: false,
      inputValue: '',
      value: ''
    };
  }

  bindKeyInput = (e) => {
    this.setState({
      inputValue: e.detail.value
    })
  }

  addText = (e) => {
    this.setState({
      value: '23333333'
    })
  }

  bindReplaceInput = (e) => {
    var value = e.detail.value
    var pos = e.detail.cursor
    var left
    if (pos !== -1) {
      // 光标在中间
      left = e.detail.value.slice(0, pos)
      // 计算光标的位置
      pos = left.replace(/11/g, '2').length
    }

    // 直接返回对象，可以对输入进行过滤处理，同时可以控制光标的位置
    return {
      value: value.replace(/11/g, '2'),
      cursor: pos
    }

    // 或者直接返回字符串,光标在最后边
    // return value.replace(/11/g,'2'),
  }

  bindHideKeyboard = (e) => {
    if (e.detail.value === '123') {
      // 收起键盘
      Taro.hideKeyboard()
    }
  }

  render () {
    return (
    <View class="container">
      <Header title="input"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="weui-cells__title">可以自动聚焦的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input value={value} class="weui-input" auto-focus placeholder="将会获取焦点"/>
            </View>
            <Button class="" onTap={this.addText}>添加内容</Button>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">控制最大输入长度的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input value={11111} class="weui-input" maxlength="10" placeholder="最大输入长度为10" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">实时获取输入值：{inputValue}</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input"  maxlength="10" onInput={this.bindKeyInput} placeholder="输入同步到view中"/>
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">控制输入的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input"  onInput={this.bindReplaceInput} placeholder="连续的两个1会变成2" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">控制键盘的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input"  onInput={this.bindHideKeyboard} placeholder="输入123自动收起键盘" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">数字输入的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input" type="number" placeholder="这是一个数字输入框" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">密码输入的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input" password type="text" placeholder="这是一个密码输入框" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">带小数点的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input" type="digit" placeholder="带小数点的数字键盘"/>
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">身份证输入的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input" type="idcard" placeholder="身份证输入键盘" />
            </View>
          </View>
        </View>
        <View class="page-section">
          <View class="weui-cells__title">控制占位符颜色的input</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <Input class="weui-input" placeholder-style="color:#F76260" placeholder="占位符字体是红色的" />
            </View>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

