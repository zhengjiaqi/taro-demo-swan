import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'
const requestUrl = 'https://14592619.qcloud.la/testRequest'
const duration = 2000
export default class Index extends Component {

  config = {
    navigationBarTitleText: '网络请求'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      loading: false
    }
  }

  makeRequest = () => {
    var self = this

    self.setState({
      loading: true
    })

    Taro.request({
      url: requestUrl,
      data: {
        noncestr: Date.now()
      },
      success: function(result) {
        Taro.showToast({
          title: '请求成功',
          icon: 'success',
          mask: true,
          duration: duration
        })
        self.setState({
          loading: false
        })
        console.log('request success', result)
      },

      fail: function({errMsg}) {
        console.log('request fail', errMsg)
        self.setState({
          loading: false
        })
      }
    })
  }

  render () {
    let {loading} = this.state
    return (
    <View class="container">
      <Header title="request"></Header>
      <View class="page-body">
        <View class="page-body-wording">
          <Text class="page-body-text">
            点击向服务器发起请求
          </Text>
        </View>
        <View class="btn-area">
          <Button onTap={this.makeRequest} type="primary" loading={loading}>request</Button>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

