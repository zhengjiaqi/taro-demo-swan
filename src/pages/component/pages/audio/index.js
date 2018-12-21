import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Audio } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import image1 from '../../resources/pic/1.jpg'
import image2 from '../../resources/pic/2.jpg'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'audio'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      current: {
        poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
        name: '此时此刻',
        author: '许巍',
        src: 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46',
      },
      audioAction: {
        method: 'pause'
      }
    };
  }

  render () {
    let {current, audioAction} = this.state
    return (
    <View class="container">
      <Header title="audio"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap" style="text-align: center;">
          <Audio style="text-align: left" src={current.src} poster={current.poster} name={current.name} author={current.author} action={audioAction} controls></Audio>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

