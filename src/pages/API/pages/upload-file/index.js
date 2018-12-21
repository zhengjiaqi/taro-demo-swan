import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Block } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'
let uploadFileUrl = `https://14592619.qcloud.la/upload`
export default class Index extends Component {

  config = {
    navigationBarTitleText: '上传文件'
  }

  componentWillMount () { }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      imageSrc : ''
    }
  }

  chooseImage = () => {
    var self = this

    Taro.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album'],
      success: function(res) {
        console.log('chooseImage success, temp path is', res.tempFilePaths[0])

        var imageSrc = res.tempFilePaths[0]

        Taro.uploadFile({
          url: uploadFileUrl,
          filePath: imageSrc,
          name: 'data',
          success: function(res) {
            console.log('uploadImage success, res is:', res)

            Taro.showToast({
              title: '上传成功',
              icon: 'success',
              duration: 1000
            })

            self.setState({
              imageSrc
            })
          },
          fail: function({errMsg}) {
            console.log('uploadImage fail, errMsg is', errMsg)
          }
        })

      },
      fail: function({errMsg}) {
        console.log('chooseImage fail, err is', errMsg)
      }
    })
  }

  render () {
    let {imageSrc} = this.state
    return (
    <View class="container">
      <Header title="uploadFile"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-body-info">
            {
              imageSrc && (
                <Image src={imageSrc} class="image" mode="aspectFit"></Image>
              )
            }
            {
              !imageSrc && (
                <Block>
                  <View class="image-plus image-plus-nb" onTap={this.chooseImage}>
                    <View class="image-plus-horizontal"></View>
                    <View class="image-plus-vertical"></View>
                  </View>
                  <View class="image-plus-text">选择图片</View>
                </Block>
              )
            }
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

