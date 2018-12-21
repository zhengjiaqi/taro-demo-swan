import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Label, Radio, RadioGroup } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'radio'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      items: [
        {value: 'USA', name: '美国'},
        {value: 'CHN', name: '中国', checked: 'true'},
        {value: 'BRA', name: '巴西'},
        {value: 'JPN', name: '日本'},
        {value: 'ENG', name: '英国'},
        {value: 'FRA', name: '法国'},
      ]
    };
  }

  radioChange = (e) => {
    console.log('radio发生change事件，携带value值为：', e.detail.value)

    var items = [...this.state.items];
    for (var i = 0, len = items.length; i < len; ++i) {
      items[i].checked = items[i].value == e.detail.value
    }

    this.setState({
      items: items
    });
  }

  render () {
    return (
    <View class="container">
      <Header title="radio"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">默认样式</View>
          <Label class="radio">
            <Radio value="r1" checked="true"/>选中
          </Label>
          <Label class="radio">
            <Radio value="r2" />未选中
          </Label>
        </View>


        <View class="page-section">
          <View class="page-section-title">推荐展示样式</View>
          <View class="weui-cells weui-cells_after-title">
            <RadioGroup onChange={this.radioChange}>
            {this.state.items.map(item => (
              <Label class="weui-cell weui-check__label" key={item.value}>
                <View class="weui-cell__hd">
                  <Radio value={item.value} checked={item.checked}/>
                </View>
                <View class="weui-cell__bd">{item.name}</View>
              </Label>
            ))}
            </RadioGroup>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

