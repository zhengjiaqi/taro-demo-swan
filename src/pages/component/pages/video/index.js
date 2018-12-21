import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Video, Input, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

function getRandomColor () {
  const rgb = []
  for (let i = 0 ; i < 3; ++i){
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
export default class Index extends Component {

  config = {
    navigationBarTitleText: 'video'
  }

  componentWillMount () { }

  componentDidMount () {
    this.videoContext = Taro.createVideoContext('myVideo')
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.inputValue = ''
    this.state = {
        src: '',
        danmuList:
        [{
            text: '第 1s 出现的弹幕',
            color: '#ff0000',
            time: 1
        },
        {
            text: '第 3s 出现的弹幕',
            color: '#ff00ff',
            time: 3
        }]
    };
  }

  bindInputBlur = (e) => {
    this.inputValue = e.detail.value
  }

  bindButtonTap = (e) => {
    var that = this
    Taro.chooseVideo({
        sourceType: ['album', 'camera'],
        maxDuration: 60,
        camera: ['front','back'],
        success: function(res) {
            that.setState({
                src: res.tempFilePath
            })
        }
    })
  }

  bindSendDanmu = (e) => {
    console.log('this.videoContext:', this.videoContext)
    console.log('this.inputValuet:', this.inputValue)
    this.videoContext.sendDanmu({
      text: this.inputValue,
      color: getRandomColor()
    })
  }

  videoErrorCallback = (e) => {
    console.log('视频错误信息:')
    console.log(e.detail.errMsg)
  }

  render () {
    return (
    <View class="container">
      <Header title="video"></Header>
      <View class="page-body">
        <View class="page-section tc">
          <Video id="myVideo" src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" binderror="videoErrorCallback" danmu-list="{{danmuList}}" enable-danmu danmu-btn controls></Video>

          <View class="weui-cells">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">弹幕内容</View>
              </View>
              <View class="weui-cell__bd">
                <Input onBlur={this.bindInputBlur} class="weui-input" type="text" placeholder="在此处输入弹幕内容" />
              </View>
            </View>
          </View>
          <View class="btn-area">
            <Button onTap={this.bindSendDanmu} class="page-body-button" type="primary" formType="submit">发送弹幕</Button>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

