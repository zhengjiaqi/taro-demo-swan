import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '操作菜单'
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

  actionSheetTap = () => {
    Taro.showActionSheet({
      itemList: ['item1', 'item2', 'item3', 'item4'],
      success: function (e) {
        console.log(e.tapIndex)
      }
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="action-sheet"></Header>
      <View class="page-body">
        <View class="btn-area">
          <Button type="default" onTap={this.actionSheetTap}>弹出action sheet</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

