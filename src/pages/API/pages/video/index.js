import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Picker, Video, Block } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var camera = [ ['front'], ['back'], ['front', 'back'] ]
var duration = Array.apply(null, {length: 60}).map(function (n, i) {
  return i + 1
})

export default class Index extends Component {

  config = {
    navigationBarTitleText: '拍摄/选择视频'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      sourceTypeIndex: 2,
      sourceType: ['拍摄', '相册', '拍摄或相册'],

      cameraIndex: 2,
      camera: ['前置', '后置', '前置或后置'],

      durationIndex: 59,
      duration: duration.map(function (t) { return t + '秒'}),

      src: ''
    }
  }

  sourceTypeChange = (e) => {
    this.setState({
      sourceTypeIndex: e.detail.value
    })
  }

  cameraChange = (e) => {
    this.setState({
      cameraIndex: e.detail.value
    })
  }

  durationChange = (e) => {
    this.setState({
      durationIndex: e.detail.value
    })
  }

  chooseVideo = () => {
    var that = this
    Taro.chooseVideo({
      sourceType: sourceType[this.state.sourceTypeIndex],
      camera: camera[this.state.cameraIndex],
      maxDuration: duration[this.state.durationIndex],
      success: function (res) {
        that.setState({
          src: res.tempFilePath
        })
      }
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="chooseVideo"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">视频来源</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range="{{sourceType}}" bindchange="sourceTypeChange" value="{{sourceTypeIndex}}">
                  <View class="weui-input">{sourceType[sourceTypeIndex]}</View>
                </Picker>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">摄像头</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range="{{camera}}" bindchange="cameraChange" value="{{cameraIndex}}">
                  <View class="weui-input">{camera[cameraIndex]}</View>
                </Picker>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">拍摄长度</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range="{{duration}}" bindchange="durationChange" value="{{durationIndex}}">
                  <View class="weui-input">{duration[durationIndex]}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View class="page-body-info">
          { src === '' && (
            <Block>
              <View class="image-plus image-plus-nb" onTap={this.chooseVideo}>
                <View class="image-plus-horizontal"></View>
                <View class="image-plus-vertical"></View>
              </View>
              <View class="image-plus-text">添加视频</View>
            </Block>
          )}
          { src != '' && (
            <Video src={src} class="video"></Video>
          )}
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

