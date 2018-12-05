import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import './head.less'

export default class Head extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
  }

  render () {
    const {title, desc} = this.props
    return (
      <View className="page-head" class="page-head">
        <View className="page-head-title" class="page-head-title">{title}</View>
        <View class="page-head-line"></View>
        {desc && <View class="page-head-desc">{desc}</View>}
      </View>
    )
  }
}

