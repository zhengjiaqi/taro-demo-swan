import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'icon'
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
      <Header title="icon"></Header>
      <View class="icon-box">
        <Icon class="icon-box-img" type="success" size="93"></Icon>
        <View class="icon-box-ctn">
          <View class="icon-box-title">成功</View>
          <View class="icon-box-desc">用于表示操作顺利完成</View>
        </View>
      </View>
      <View class="icon-box">
        <Icon class="icon-box-img" type="info" size="93"></Icon>
        <View class="icon-box-ctn">
          <View class="icon-box-title">提示</View>
          <View class="icon-box-desc">用于表示信息提示；也常用于缺乏条件的操作拦截，提示用户所需信息</View>
        </View>
      </View>
      <View class="icon-box">
        <Icon class="icon-box-img" type="warn" size="93" color="#C9C9C9"></Icon>
        <View class="icon-box-ctn">
          <View class="icon-box-title">普通警告</View>
          <View class="icon-box-desc">用于表示操作后将引起一定后果的情况；也用于表示由于系统原因而造成的负向结果</View>
        </View>
      </View>
      <View class="icon-box">
        <Icon class="icon-box-img" type="warn" size="93"></Icon>
        <View class="icon-box-ctn">
          <View class="icon-box-title">强烈警告</View>
          <View class="icon-box-desc">用于表示由于用户原因造成的负向结果；也用于表示操作后将引起不可严重的挽回的后果的情况</View>
        </View>
      </View>
      <View class="icon-box">
        <Icon class="icon-box-img" type="waiting" size="93"></Icon>
        <View class="icon-box-ctn">
          <View class="icon-box-title">等待</View>
          <View class="icon-box-desc">用于表示等待，告知用户结果需等待</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="success" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">多选控件图标_已选择</View>
          <View class="icon-box-desc">用于多选控件中，表示已选择该项目</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="circle" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">多选控件图标_未选择</View>
          <View class="icon-box-desc">用于多选控件中，表示该项目可被选择，但还未选择</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="warn" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">错误提示</View>
          <View class="icon-box-desc">用于在表单中表示出现错误</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="success_no_circle" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">单选控件图标_已选择</View>
          <View class="icon-box-desc">用于单选控件中，表示已选择该项目</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="download" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">下载</View>
          <View class="icon-box-desc">用于表示可下载</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="info_circle" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">提示</View>
          <View class="icon-box-desc">用于在表单中表示有信息提示</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="cancel" size="23"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">停止或关闭</View>
          <View class="icon-box-desc">用于在表单中，表示关闭或停止</View>
        </View>
      </View>
      <View class="icon-box">
        <View class="icon-small-wrp">
          <Icon class="icon-small" type="search" size="14"></Icon>
        </View>
        <View class="icon-box-ctn">
          <View class="icon-box-title">搜索</View>
          <View class="icon-box-desc">用于搜索控件中，表示可搜索</View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

