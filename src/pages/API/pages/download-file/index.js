import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Block } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'
const downloadExampleUrl = `https://14592619.qcloud.la/static/weapp.jpg`
export default class Index extends Component {

  config = {
    navigationBarTitleText: '下载文件'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      imageSrc: ''
    }
  }

  downloadImage = () => {
    var self = this

    Taro.downloadFile({
      url: downloadExampleUrl,
      success: function(res) {
        console.log('downloadFile success, res is', res)
        self.setState({
          imageSrc: res.tempFilePath
        })
      },
      fail: function({errMsg}) {
        console.log('downloadFile fail, err is:', errMsg)
      }
    })
  }

  render () {
    let {imageSrc} = this.state
    return (
    <View class="container">
      <Header title="downloadFile"></Header>
      <View class="page-body">
        {
          imageSrc && (
            <Image src={imageSrc} mode="center" />
          )
        }
        {
          !imageSrc && (
            <Block>
              <View class="page-body-wording">
                <Text class="page-body-text">
                  点击按钮下载服务端示例图片
                </Text>
              </View>
              <View class="btn-area">
                <Button onTap={this.downloadImage} type="primary">下载</Button>
              </View>
            </Block>
          )
        }

      </View>
      <Foot></Foot>
    </View>
    )
  }
}

