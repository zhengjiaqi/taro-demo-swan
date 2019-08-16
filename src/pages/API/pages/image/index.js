import Taro, { Component } from '@tarojs/taro'
import { View, Text, Block, Button, Image, Form, Picker } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'
import { setGlobalData, getGlobalData } from '../../../global-data'

import './index.less'
var sourceType = [ ['camera'], ['album'], ['camera', 'album'] ]
var sizeType = [ ['compressed'], ['original'], ['compressed', 'original'] ]
export default class Index extends Component {

  config = {
    navigationBarTitleText: '图片'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      imageList: [],
      sourceTypeIndex: 2,
      sourceType: ['拍照', '相册', '拍照或相册'],

      sizeTypeIndex: 2,
      sizeType: ['压缩', '原图', '压缩或原图'],

      countIndex: 8,
      count: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }

  sourceTypeChange = (e) => {
    this.setState({
      sourceTypeIndex: e.detail.value
    })
  }

  sizeTypeChange = (e) => {
    this.setState({
      sizeTypeIndex: e.detail.value
    })
  }

  countChange = (e) => {
    this.setState({
      countIndex: e.detail.value
    })
  }

  chooseImage = () => {
    var that = this
    Taro.chooseImage({
      sourceType: sourceType[this.state.sourceTypeIndex],
      sizeType: sizeType[this.state.sizeTypeIndex],
      count: this.state.count[this.state.countIndex],
      success: function (res) {
        console.log(res)
        that.setState({
          imageList: res.tempFilePaths
        })
      }
    })
  }

  previewImage = (e) => {
    var current = e.target.dataset.src
    console.log('this.state.imageList:', this.state.imageList)
    Taro.previewImage({
      urls: this.state.imageList
    })
  }

  render () {
    let {imageList, sourceType, sourceTypeIndex, count, countIndex, sizeType, sizeTypeIndex} = this.state;
    return (
      <View class="page-body">
      <Form>
        <View class="page-section">

          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">图片来源</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range={sourceType} onChange={this.sourceTypeChange} value={sourceTypeIndex} mode="selector">
                  <View class="weui-input">{sourceType[sourceTypeIndex]}</View>
                </Picker>
              </View>
            </View>

            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">图片质量</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range={sizeType} onChange={this.sizeTypeChange} value={sizeTypeIndex} mode="selector">
                  <View class="weui-input">{sizeType[sizeTypeIndex]}</View>
                </Picker>
              </View>
            </View>
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">数量限制</View>
              </View>
              <View class="weui-cell__bd">
                <Picker range={count} onChange={this.countChange} value={countIndex} mode="selector">
                  <View class="weui-input">{count[countIndex]}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View class="weui-cells">
            <View class="weui-cell">
              <View class="weui-cell__bd">
                <View class="weui-uploader">
                  <View class="weui-uploader__hd">
                    <View class="weui-uploader__title">点击可预览选好的图片</View>
                    <View class="weui-uploader__info">{imageList.length/count[countIndex]}</View>
                  </View>
                  <View class="weui-uploader__bd">
                    <View class="weui-uploader__files">
                    {imageList.map(image => (
                      <View class="weui-uploader__file">
                        <Image class="weui-uploader__img" src={image} data-src={image} onTap={this.previewImage}></Image>
                      </View>
                    ))}
                    </View>
                    <View class="weui-uploader__input-box">
                      <View class="weui-uploader__input" onTap={this.chooseImage}></View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>

        </View>
      </Form>
    </View>
    )
  }
}

