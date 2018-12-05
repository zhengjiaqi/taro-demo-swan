import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem, Switch, Block, Slider } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import './index.less'

const texts = [
  '2011年1月，1.0发布',
  '同年5月，2.0语音对讲发布',
  '10月，3.0新增摇一摇功能',
  '2012年3月，用户突破1亿',
  '4月份，4.0朋友圈发布',
  '同年7月，4.2发布公众平台',
  '2013年8月，5.0发布支付',
  '2014年9月，企业号发布',
  '同月，发布卡包',
  '2015年1月，第一条朋友圈广告',
  '2016年1月，企业发布',
  '2017年1月，小程序发布',
  '......'
]

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
      text: '',
      canAdd: true,
      canRemove: false,
      scrollTop: 0
    };
    this.extraLine = []
  }

  add = () => {
    this.extraLine.push(texts[this.extraLine.length % 12])
    this.setState((prevState) => {
      return {
        extraLine: this.extraLine.push(texts[this.extraLine.length % 12]),
        text: this.extraLine.join('\n'),
        canAdd: this.extraLine.length < 12,
        canRemove: this.extraLine.length > 0
      }
    })
    setTimeout(() => {
      this.setState({
        scrollTop: 99999
      })
    }, 0)
  }

  remove = () => {
    if (this.extraLine.length > 0) {
      this.setState((prevState) => {
        this.extraLine.pop()
        return {
          text: this.extraLine.join('\n'),
          canAdd: this.extraLine.length < 12,
          canRemove: this.extraLine.length > 0
        }
      })
    }
    setTimeout(() =>{
      this.setState({
        scrollTop: 99999
      });
    }, 0)
  }

  render () {
    return (
    <View class="container">
      <Header title="text"></Header>
      <View class="page-body">
        <View class="page-section page-section-spacing">
          <View class="text-box" scroll-y="true" scroll-top={scrollTop}>
            <Text>{text}</Text>
          </View>
          <Button disabled={!canAdd} onTap={this.add}>add line</Button>
          <Button disabled={!canRemove} onTap={this.remove}>remove line</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

