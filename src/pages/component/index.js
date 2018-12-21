import Taro, { Component } from '@tarojs/taro'
import { View, Text, Image, Navigator } from '@tarojs/components'
import './index.less'
import logo from './resources/kind/logo.png'
import canvas from './resources/kind/canvas.png'
import content from './resources/kind/content.png'
import form from './resources/kind/form.png'
import map from './resources/kind/map.png'
import media from './resources/kind/media.png'
import nav from './resources/kind/nav.png'
import view from './resources/kind/view.png'
let images ={
  canvas,
  content,
  form,
  map,
  media,
  nav,
  view
}


export default class Index extends Component {

  config = {
    navigationBarTitleText: '小程序官方组件展示'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      list: [{
        id: 'view',
        name: '视图容器',
        open: false,
        pages: ['view', 'scroll-view', 'swiper']
      },
      {
        id: 'content',
        name: '基础内容',
        open: false,
        pages: ['text', 'icon', 'progress']
      },
      {
        id: 'form',
        name: '表单组件',
        open: false,
        pages: ['button', 'checkbox', 'form', 'input', 'label', 'picker', 'radio', 'slider', 'switch']
      },
      {
        id: 'nav',
        name: '导航',
        open: false,
        pages: ['navigator']
      }, {
        id: 'media',
        name: '媒体组件',
        open: false,
        pages: ['image', 'audio', 'video']
      }, {
        id: 'map',
        name: '地图',
        pages: ['map']
      }, {
        id: 'canvas',
        name: '画布',
        pages: ['canvas']
      }
    ]
    };
  }

  kindToggle = (e) => {
    console.log('kindToggle')
    var id = e.currentTarget.id,
        list = this.state.list;
    for (var i = 0, len = list.length; i < len; ++i) {
      if (list[i].id == id) {
        list[i].open = !list[i].open;
      } else {
        list[i].open = false;
      }
    }
    this.setState({
      list: list
    })
  }

  render () {
    return (
      <View className='index'>
        <View class="index">
          <View class="index-hd">
            <Image class="index-logo" src={logo}></Image>
            <View class="index-desc">以下将展示小程序官方组件能力，组件样式仅供参考，开发者可根据自身需求自定义组件样式，具体属性参数详见小程序开发文档。</View>
          </View>
          <View class="index-bd">
            <View class="kind-list">
            {this.state.list.map((item, index) => (
              <View class="kind-list-item" key={index}>
                  <View id={item.id} class={`kind-list-item-hd ${item.open ? 'kind-list-item-hd-show' : ''}`} onTap={this.kindToggle}>
                    <View class="kind-list-text">{item.name}</View>
                    <Image class="kind-list-img" src={images[item.id]}></Image>
                  </View>
                  <View class={`kind-list-item-bd ${item.open ? 'kind-list-item-bd-show' : ''}`}>
                    <View class={`navigator-box ${item.open ? 'navigator-box-show' : ''}`}>
                    {item.pages.map((page, index) => (
                      <Navigator key={index} url={`pages/${page}/index`} class="navigator">
                        <View class="navigator-text">{page}</View>
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
      </View>
    )
  }
}

