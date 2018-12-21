import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Image } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import image1 from '../../resources/pic/1.jpg'
import image2 from '../../resources/pic/2.jpg'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'image'
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
      <Header title="image"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">Local Image</View>
          <View class="page-section-ctn">
            <Image class="image" src={image1}/>
          </View>
        </View>
        <View class="page-section page-section-gap">
          <View class="page-section-title">Internet Image</View>
          <View class="page-section-ctn">
            <Image class="image" src={image2}/>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

