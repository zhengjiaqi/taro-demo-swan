import Taro, { Component } from '@tarojs/taro'
import { View, Text, ScrollView, Button } from '@tarojs/components'
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
      toView: 'green',
      scrollTop: 0,
      scrollLeft: 0
    };
  }
  
  upper = (e) => {
    console.log(e)
  }

  lower = (e) => {
    console.log(e)
  }

  scroll = (e) => {
    console.log(e)
  }

  scrollToTop = (e) => {
    console.log('scrollToTop1:', this.state.scrollTop)
    this.setState({
      scrollTop: 1
    })
    console.log('scrollToTop2', this.state.scrollTop)
  }

  scrollToLeft = (e) => {
    console.log('scrollToLeft1:', this.state.scrollLeft)
    this.setState({
      scrollLeft: 1
    })
    console.log('scrollToLeft2:', this.state.scrollLeft)
  }

  render () {
    return (
    <View class="container">
      <Header title="scroll-view"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-section-title">
            <Text>Vertical Scroll\n纵向滚动</Text>
          </View>
          <View class="page-section-spacing">
            <ScrollView scroll-y="true" style="height: 300rpx;"
              onScrolltoupper={this.upper} onScrolltolower={this.lower} onScroll={this.scroll}
              scroll-into-view={toView} scroll-top={scrollTop}>
              <View id="demo1" class="scroll-view-item demo-text-1"></View>
              <View id="demo2"  class="scroll-view-item demo-text-2"></View>
              <View id="demo3" class="scroll-view-item demo-text-3"></View>
            </ScrollView>
          </View>
          <Button class="" onTap={this.scrollToTop}>回到顶部</Button>
        </View>
        <View class="page-section">
          <View class="page-section-title">
            <Text>Horizontal Scroll\n横向滚动</Text>
          </View>
          <View class="page-section-spacing">
            <ScrollView class="scroll-view_H" scroll-left={scrollLeft} scroll-x="true"
              onScroll="scroll" style="width: 100%">
              <View id="demo1" class="scroll-view-item_H demo-text-1"></View>
              <View id="demo2"  class="scroll-view-item_H demo-text-2"></View>
              <View id="demo3" class="scroll-view-item_H demo-text-3"></View>
            </ScrollView>
          </View>
          <Button class="" onTap={this.scrollToLeft}>回到左边</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

