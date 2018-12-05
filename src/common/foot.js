import Taro, { Component } from '@tarojs/taro'
import { Navigator, Image} from '@tarojs/components'
import iconFoot from '../image/icon_foot.png'
import './foot.less'

export default class Foot extends Component {

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
  }

  render () {
    return (
      <Navigator class="page-foot" openType="switchTab" url="/pages/component/index" hover-class="none">
        <Image class="icon-foot" src={iconFoot}/>
      </Navigator>
    )
  }
}

