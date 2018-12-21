import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'redirect'
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
      <Header title="当前页"></Header>
      <Foot></Foot>
    </View>
    )
  }
}

