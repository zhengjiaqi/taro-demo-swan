import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Label, CheckboxGroup, Checkbox } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'checkbox'
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
        {value: 'FRA', name: '法国'}
      ]
    };
  }

  checkboxChange = (e) => {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)

    var items = [...this.state.items], values = e.detail.value;
    for (var i = 0, lenI = items.length; i < lenI; ++i) {
      items[i].checked = false;

      for (var j = 0, lenJ = values.length; j < lenJ; ++j) {
        if(items[i].value == values[j]){
          items[i].checked = true;
          break
        }
      }
    }

    this.setState({
      items: items
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="checkbox"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">默认样式</View>
          <Label class="checkbox">
            <Checkbox value="cb" checked="true"/>选中
          </Label>
          <Label class="checkbox">
            <Checkbox value="cb" />未选中
          </Label>
        </View>

        <View class="page-section">
          <View class="page-section-title">推荐展示样式</View>
          <View class="weui-cells weui-cells_after-title">
          <CheckboxGroup onChange={this.checkboxChange}>
            {this.state.items.map((item) => (
              <Label class="weui-cell weui-check__label"  key={item.value}>
                <View class="weui-cell__hd">
                  <Checkbox value={item.value} checked={item.checked}/>
                </View>
                <View class="weui-cell__bd">{item.name}</View>
              </Label>
            ))}
          </CheckboxGroup>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

