import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Switch, Block, Slider } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'view'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      background: ['demo-text-1', 'demo-text-2', 'demo-text-3'],
      indicatorDots: true,
      vertical: false,
      autoplay: false,
      interval: 2000,
      duration: 500
    };
  }

  changeIndicatorDots = () => {
    this.setState((prevState) => {
      return { indicatorDots: !prevState.indicatorDots }
    })
  }

  changeAutoplay = () => {
    this.setState((prevState) => {
      return { autoplay: !prevState.autoplay }
    })
  }

  intervalChange = (e) => {
    this.setState({
      interval : e.detail.value
    })
  }

  durationChange = (e) => {
    this.setState({
      duration : e.detail.value
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="scroll-view"></Header>
      <View class="page-body">
        <View class="page-section page-section-spacing swiper">
          <Swiper indicator-dots={indicatorDots}
            autoplay={autoplay} interval={interval} duration={duration}>
            {background.map((item, index) =>
              <Block key={index}>
                <SwiperItem >
                  <View class={ `swiper-item ${item}` }></View>
                </SwiperItem>
              </Block>
            )}
          </Swiper>
        </View>
        <View class="page-section" style="margin-top: 40rpx;margin-bottom: 0;">
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_switch">
              <View class="weui-cell__bd">指示点</View>
              <View class="weui-cell__ft">
                <Switch checked={indicatorDots} onChange={this.changeIndicatorDots} />
              </View>
            </View>
            <View class="weui-cell weui-cell_switch">
              <View class="weui-cell__bd">自动播放</View>
              <View class="weui-cell__ft">
                <Switch checked={autoplay} onChange={this.changeAutoplay} />
              </View>
            </View>
          </View>
        </View>

        <View class="page-section page-section-spacing">
          <View class="page-section-title">
            <Text>幻灯片切换时长(ms)</Text>
            <Text class="info">{duration}</Text>
          </View>
          <Slider onChange={this.durationChange} value={duration} min="500" max="2000"/>
          <View class="page-section-title">
            <Text>自动播放间隔时长(ms)</Text>
            <Text class="info">{interval}</Text>
          </View>
          <Slider onChange={this.intervalChange} value={interval} min="2000" max="10000"/>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

