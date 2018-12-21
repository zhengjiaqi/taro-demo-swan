import Taro, { Component } from '@tarojs/taro'
import { View, Text, Form, Button, Input } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '设置页面标题'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {}
  }

  setNaivgationBarTitle = (e) => {
    var title = e.detail.value.title
    console.log(title)
    Taro.setNavigationBarTitle({
      title: title,
      success: function() {
        console.log('setNavigationBarTitle success')
      },
      fail: function(err) {
        console.log('setNavigationBarTitle fail, err is', err)
      }
    })

    return false
  }

  render () {
    return (
    <View class="container">
      <Header title="setNaivgationBarTitle"></Header>
      <Form class="page-body" onSubmit={this.setNaivgationBarTitle}>
        <View class="weui-cells weui-cells_after-title">
          <View class="weui-cell weui-cell_input">
            <View class="weui-cell__hd">
              <View class="weui-label">页面标题</View>
            </View>
            <View class="weui-cell__bd">
              <Input class="weui-input" type="text" placeholder="请输入页面标题并点击设置即可" name="title"></Input>
            </View>
          </View>
        </View>
        <View class="btn-area">
          <Button type="primary" formType="submit">设置</Button>
        </View>
      </Form>
      <Foot></Foot>
    </View>
    )
  }
}

