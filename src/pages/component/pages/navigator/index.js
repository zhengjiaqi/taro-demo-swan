import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Navigator, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'navigator'
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
      <Header title="navigator"></Header>
      <View class="page-body">
        <View class="btn-area">
          <Navigator url="/pages/component/pages/navigate/index?title=navigate" hover-class="navigator-hover">
            <Button type="default">跳转到新页面</Button>
          </Navigator>
          <Navigator url="/pages/component/pages/redirect/index?title=redirect" redirect hover-class="other-navigator-hover">
            <Button type="default">在当前页打开</Button>
          </Navigator>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

