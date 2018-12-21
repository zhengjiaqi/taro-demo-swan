import Taro, { Component } from '@tarojs/taro'
import { View, Text, Map } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'map'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      latitude: 23.099994,
      longitude: 113.324520,
      markers: [{
        latitude: 23.099994,
        longitude: 113.324520,
        name: 'T.I.T 创意园'
      }],
      covers: [{
        latitude: 23.099994,
        longitude: 113.344520,
        iconPath: '/image/location.png'
      }, {
        latitude: 23.099994,
        longitude: 113.304520,
        iconPath: '/image/location.png'
      }]
    };
  }

  render () {
    let {latitude, longitude, markers, covers} = this.state;
    return (
    <View class="container">
      <Header title="map"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <Map
            style="width: 100%; height: 300px;"
            latitude={latitude}
            longitude={longitude}
            markers={markers}
            covers={covers}
            >
          </Map>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

