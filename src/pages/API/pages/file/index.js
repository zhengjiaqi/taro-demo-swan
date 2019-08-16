import Taro, { Component } from '@tarojs/taro'
import { View, Text, Button, Image, Modal, Block } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '文件'
  }

  componentWillMount () {
    this.setState({
      savedFilePath: Taro.getStorageSync('savedFilePath')
    })
  }

  componentDidMount () {}

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      tempFilePath: '',
      savedFilePath: '',
      dialog: {
        hidden: true
      }
    }
  }

  chooseImage = () => {
    var that = this
    Taro.chooseImage({
      count: 1,
      success: function (res) {
        that.setState({
          tempFilePath: res.tempFilePaths[0]
        })
      }
    })
  }

  saveFile = () => {
    if (this.state.tempFilePath.length > 0) {
      var that = this
      Taro.saveFile({
        tempFilePath: this.state.tempFilePath,
        success: function (res) {
          that.setState({
            savedFilePath: res.savedFilePath
          })
          Taro.setStorageSync('savedFilePath', res.savedFilePath)
          that.setState({
            dialog: {
              title: '保存成功',
              content: '下次进入应用时，此文件仍可用',
              hidden: false
            }
          })
        },
        fail: function (res) {
          that.setState({
            dialog: {
              title: '保存失败',
              content: '应该是有 bug 吧',
              hidden: false
            }
          })
        }
      })
    }
  }

  clear = () => {
    Taro.setStorageSync('savedFilePath', '')
    this.setState({
      tempFilePath: '',
      savedFilePath: ''
    })
  }

  confirm = () => {
    this.setState({
      'dialog.hidden': true
    })
  }

  render () {
    let {tempFilePath, savedFilePath, dialog} = this.state
    return (
    <View class="container">
      <Header title="saveFile"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="page-body-info">
          { tempFilePath != '' && (
            <Image src={tempFilePath} class="image" mode="aspectFit"></Image>
          )}
          { tempFilePath === '' && savedFilePath != '' && (
            <Image src={savedFilePath} class="image" mode="aspectFit"></Image>
          )}
          { tempFilePath === '' && savedFilePath === '' && (
            <Block>
              <View class="image-plus image-plus-nb" onTap={this.chooseImage}>
                <View class="image-plus-horizontal"></View>
                <View class="image-plus-vertical"></View>
              </View>
              <View class="image-plus-text">请选择文件</View>
            </Block>
          )}
          </View>
          <View class="btn-area">
            <Button type="primary" onTap={this.saveFile}>保存文件</Button>
            <Button onTap={this.clear}>删除文件</Button>
          </View>
        </View>
      </View>

      <Modal title={dialog.title} hidden={dialog.hidden} no-cancel onConfirm={this.confirm}>{dialog.content}</Modal>
      <Foot></Foot>
    </View>
    )
  }
}

