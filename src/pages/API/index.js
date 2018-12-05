import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block,Image, Navigator } from '@tarojs/components'
import './index.less'
import logo from './resources/kind/logo.png'
import api from './resources/kind/api.png'
import device from './resources/kind/device.png'
import feedback from './resources/kind/feedback.png'
import location from './resources/kind/location.png'
import media from './resources/kind/media.png'
import network from './resources/kind/network.png'
import page from './resources/kind/page.png'
import storage from './resources/kind/storage.png'
let images ={
  api,
  device,
  feedback,
  location,
  media,
  network,
  page,
  storage
}

export default class Index extends Component {

  config = {
    navigationBarTitleText: '小程序接口能力展示'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          id: 'api',
          name: '开放接口',
          open: false,
          pages: [
            {
              zh: '登录',
              url: 'login'
            }, {
              zh: '获取用户信息',
              url: 'get-user-info'
            },
            // {
            //   zh: '发起支付',
            //   url: 'request-payment'
            // }, {
            //   zh: '分享',
            //   url: 'share'
            // }, {
            //   zh: '客服消息',
            //   url: 'custom-message'
            // }, {
            //   zh: '模板消息',
            //   url: 'template-message'
            // }
          ]
        },
        // {
        //   id: 'page',
        //   name: '界面',
        //   open: false,
        //   pages: [
        //     {
        //       zh: '设置界面标题',
        //       url: 'set-navigation-bar-title'
        //     }, {
        //       zh: '标题栏加载动画',
        //       url: 'navigation-bar-loading'
        //     }, {
        //       zh: '页面跳转',
        //       url: 'navigator'
        //     }, {
        //       zh: '下拉刷新',
        //       url: 'pull-down-refresh'
        //     }, {
        //       zh: '创建动画',
        //       url: 'animation'
        //     }, {
        //       zh: '创建绘画',
        //       url: 'canvas'
        //     }, {
        //       zh: '显示操作菜单',
        //       url: 'action-sheet'
        //     }, {
        //       zh: '显示模态弹窗',
        //       url: 'modal'
        //     }, {
        //       zh: '显示消息提示框',
        //       url: 'toast'
        //     }
        //   ]
        // }, {
        //   id: 'device',
        //   name: '设备',
        //   open: false,
        //   pages: [
        //     {
        //       zh: '获取手机网络状态',
        //       url: 'get-network-type'
        //     }, {
        //       zh: '获取手机系统信息',
        //       url: 'get-system-info'
        //     }, {
        //       zh: '监听重力感应数据',
        //       url: 'on-accelerometer-change'
        //     }, {
        //       zh: '监听罗盘数据',
        //       url: 'on-compass-change'
        //     }, {
        //       zh: '打电话',
        //       url: 'make-phone-call'
        //     }, {
        //       zh: '扫码',
        //       url: 'scan-code'
        //     }
        //   ]
        // }, {
        //   id: 'network',
        //   name: '网络',
        //   open: false,
        //   pages: [
        //     {
        //       zh: '发起一个请求',
        //       url: 'request'
        //     }, {
        //       zh: 'WebSocket',
        //       url: 'web-socket'
        //     }, {
        //       zh: '上传文件',
        //       url: 'upload-file'
        //     }, {
        //       zh: '下载文件',
        //       url: 'download-file'
        //     }
        //   ]
        // }, {
        //   id: 'media',
        //   name: '媒体',
        //   open: false,
        //   pages: [
        //     {
        //       zh: '图片',
        //       url: 'image'
        //     }, {
        //       zh: '录音',
        //       url: 'voice'
        //     }, {
        //       zh: '背景音频',
        //       url: 'background-audio'
        //     }, {
        //       zh: '文件',
        //       url: 'file'
        //     }, {
        //       zh: '视频',
        //       url: 'video'
        //     }
        //   ]
        // }, {
        //   id: 'location',
        //   name: '位置',
        //   open: false,
        //   pages: [
        //     {
        //       zh: '获取当前位置',
        //       url: 'get-location'
        //     }, {
        //       zh: '使用原生地图查看位置',
        //       url: 'open-location'
        //     }, {
        //       zh: '使用原生地图选择位置',
        //       url: 'choose-location'
        //     }
        //   ]
        // }, {
        //   id: 'storage',
        //   name: '数据',
        //   url: 'storage'
        // }
      ]
    };
  }
  kindToggle = (e) => {
    let id = e.currentTarget.id;
    let list = this.state.list;
    for (let i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        if(list[i].url){
          swan.navigateTo({
            url: 'pages/' + list[i].url
          })
          return
        }
        list[i].open = !list[i].open
      } else {
        list[i].open = false
      }
    }
    this.setState({
      list: list
    });
  }

  render () {
    return (
      <View class="index">
        <View class="index-hd">
          <Image class="index-logo" src={logo}></Image>
          <View class="index-desc">以下将演示小程序接口能力，具体属性参数详见小程序开发文档。</View>
        </View>
        <View class="index-bd">
          <View class="kind-list">
          {this.state.list.map((item, index) => (
            <View class="kind-list-item" key={index}>
              <View id={item.id} class={`kind-list-item-hd ${item.open ? 'kind-list-item-hd-show' : ''}}`} onTap={this.kindToggle}>
                <View class="kind-list-text">{item.name}</View>
                <Image class="kind-list-img" src={images[item.id]}></Image>
              </View>
              <View class={`kind-list-item-bd ${item.open ? 'kind-list-item-bd-show' : ''}`}>
                <View class={`navigator-box ${item.open ? 'navigator-box-show' : ''}`}>
                {item.pages.map((page, index) => (
                  <Navigator key={index} url={`pages/${page.url}/index`} class="navigator">
                    <View class="navigator-text">{page.zh}</View>
                    <View class="navigator-arrow"></View>
                  </Navigator>
                ))}
                </View>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
    )
  }
}

