import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      "pages/component/index",
      "pages/API/index",
      "pages/component/pages/view/index",
      "pages/component/pages/scroll-view/index",
      "pages/component/pages/swiper/index",
      "pages/component/pages/text/index",
      "pages/component/pages/icon/index",
      "pages/component/pages/progress/index",
      "pages/component/pages/button/index",
      "pages/component/pages/checkbox/index",
      "pages/component/pages/form/index",
      "pages/component/pages/input/index",
      "pages/component/pages/label/index",
      "pages/component/pages/picker/index",
      "pages/component/pages/radio/index",
      "pages/component/pages/slider/index",
      "pages/component/pages/switch/index",
      "pages/component/pages/navigator/index",
      "pages/component/pages/navigate/index",
      "pages/component/pages/redirect/index",
      "pages/component/pages/image/index",
      "pages/component/pages/audio/index",
      "pages/component/pages/video/index",
      "pages/component/pages/map/index",
      "pages/component/pages/canvas/index",
      "pages/API/pages/login/index",
      "pages/API/pages/get-user-info/index",
      "pages/API/pages/set-navigation-bar-title/index",
      "pages/API/pages/navigation-bar-loading/index",
      "pages/API/pages/navigator/index",
      "pages/API/pages/pull-down-refresh/index",
      "pages/API/pages/animation/index",
      "pages/API/pages/action-sheet/index",
      "pages/API/pages/modal/index",
      "pages/API/pages/toast/index",
      "pages/API/pages/get-network-type/index",
      "pages/API/pages/get-system-info/index",
      "pages/API/pages/make-phone-call/index",
      "pages/API/pages/scan-code/index",
      "pages/API/pages/request/index",
      "pages/API/pages/upload-file/index",
      "pages/API/pages/download-file/index",
      "pages/API/pages/video/index"
    ],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "mpvue-demo-swan",
      "navigationBarTextStyle": "black"
    },
    "tabBar": {
      "color": "#7A7E83",
      "selectedColor": "#3cc51f",
      "borderStyle": "black",
      "backgroundColor": "#ffffff",
      "list": [{
        "pagePath": "pages/component/index",
        "iconPath": "./image/icon_component.png",
        "selectedIconPath": "./image/icon_component_HL.png",
        "text": "组件"
      }, {
        "pagePath": "pages/API/index",
        "iconPath": "image/icon_API.png",
        "selectedIconPath": "image/icon_API_HL.png",
        "text": "接口"
      }]
    }

  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
