import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '模态弹窗'
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

  modalTap = (e) => {
    Taro.showModal({
      title: "弹窗标题",
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      showCancel: false,
      confirmText: "确定"
    })
  }

  noTitlemodalTap = (e) => {
    Taro.showModal({
      content: "弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内",
      confirmText: "确定",
      cancelText: "取消"
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="modal"></Header>
      <View class="page-body">
        <View class="btn-area">
          <Button type="default" onTap={this.modalTap}>有标题的modal</Button>
          <Button type="default" onTap={this.noTitlemodalTap}>无标题的modal</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

