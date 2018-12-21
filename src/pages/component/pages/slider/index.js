import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Slider } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'slider'
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

  slider1change = (e) => {
    console.log('slider' + 1 + '发生change事件，携带值为', e.detail.value)
  }

  slider2change = (e) => {
    console.log('slider' + 2 + '发生change事件，携带值为', e.detail.value)
  }

  slider3change = (e) => {
    console.log('slider' + 3 + '发生change事件，携带值为', e.detail.value)
  }

  render () {
    return (
    <View class="container">
      <Header title="slider"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">设置step</View>
          <View class="body-view">
            <Slider value="60" onChange={this.slider1change} step="5"/>
          </View>
        </View>

        <View class="page-section page-section-gap">
          <View class="page-section-title">显示当前value</View>
          <View class="body-view">
            <Slider value="50" onChange={this.slider2change} show-value/>
          </View>
        </View>

        <View class="page-section page-section-gap">
          <View class="page-section-title">设置最小/最大值</View>
          <View class="body-view">
            <Slider value="100" onChange={this.slider3change} min="50" max="200" show-value/>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

