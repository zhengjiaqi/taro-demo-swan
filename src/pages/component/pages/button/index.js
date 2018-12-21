import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'button'
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

  render () {
    return (
    <View class="container">
      <Header title="button"></Header>
      <View class="page-body">
        <View class="btn-area" id="buttonContainer">
          <Button type="primary">页面主操作 Normal</Button>
          <Button type="primary" loading="true">页面主操作 Loading</Button>
          <Button type="primary" disabled="true">页面主操作 Disabled</Button>

          <Button type="default">页面次要操作 Normal</Button>
          <Button type="default" disabled="true">页面次要操作 Disabled</Button>

          <Button type="warn">警告类操作 Normal</Button>
          <Button type="warn" disabled="true">警告类操作 Disabled</Button>

          <View class="button-sp-area">
            <Button type="primary" plain="true">按钮</Button>
            <Button type="primary" disabled="true" plain="true">不可点击的按钮</Button>

            <Button type="default" plain="true">按钮</Button>
            <Button type="default" disabled="true" plain="true">按钮</Button>

            <Button class="mini-btn" type="primary" size="mini">按钮</Button>
            <Button class="mini-btn" type="default" size="mini">按钮</Button>
            <Button class="mini-btn" type="warn" size="mini">按钮</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

