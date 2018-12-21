import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Progress } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'progress'
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
      <Header title="progress"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">

          <View class="progress-box">
            <Progress percent="20" show-info stroke-width="3"/>
          </View>

          <View class="progress-box">
            <Progress percent="40" active stroke-width="3" />
            <Icon class="progress-cancel" type="cancel"></Icon>
          </View>

          <View class="progress-box">
            <Progress percent="60" active stroke-width="3" />
          </View>

          <View class="progress-box">
            <Progress percent="80" color="#10AEFF" active stroke-width="3" />
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

