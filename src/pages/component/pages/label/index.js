import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Label, Checkbox, CheckboxGroup, Radio, RadioGroup } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'label'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      checkboxItems: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'}
      ],
      radioItems: [
        {name: 'USA', value: '美国'},
        {name: 'CHN', value: '中国', checked: 'true'}
      ],
      hidden: false
    };
  }
  checkboxChange = (e) => {
    var checked = e.detail.value
    console.log('checkboxChange-checked:', checked)
    let checkboxItems = [...this.state.checkboxItems]
    for (var i = 0; i < this.state.checkboxItems.length; i++) {
      if (checked.indexOf(this.state.checkboxItems[i].name) !== -1) {
        checkboxItems[i].checked = true
      } else {
        checkboxItems[i].checked = false
      }
    }
    this.setState({
      checkboxItems
    })
  }

  radioChange = (e) => {
    var checked = e.detail.value
    console.log('radioChange-checked:', checked)
    let radioItems = [...this.state.radioItems]
    for (var i = 0; i < this.state.radioItems.length; i ++) {
      if (checked.indexOf(this.state.radioItems[i].name) !== -1) {
        radioItems[i].checked = true
      } else {
        radioItems[i].checked = false
      }
    }
    console.log('radioItems:', radioItems)
    this.setState({
      radioItems
    })
  }

  tapEvent = (e) => {
    console.log('按钮被点击')
  }

  render () {
    return (
    <View class="container">
      <Header title="label"></Header>
      <View class="page-body">
        <View class="page-section page-section-gap">
          <View class="page-section-title">表单组件在label内</View>
          <CheckboxGroup class="group" onChange={this.checkboxChange}>
          {checkboxItems.map(item => (
            <View class="label-1">
              <Label>
                <Checkbox value={item.name} checked={item.checked}></Checkbox>
                <Text class="label-1-text">{item.value}</Text>
              </Label>
            </View>
          ))}
          </CheckboxGroup>
        </View>

        <View class="page-section page-section-gap">
          <View class="page-section-title">label用for标识表单组件</View>
          <RadioGroup class="group" onChange={this.radioChange}>
          {radioItems.map(item => (
            <View class="label-2">
              <Radio id={item.name} value={item.name} checked={item.checked}></Radio>
              <Label class="label-2-text" for={item.name}><Text>{item.name}</Text></Label>
            </View>
          ))}
          </RadioGroup>
        </View>

        <View class="page-section page-section-gap">
          <View class="page-section-title">label内有多个时选中第一个</View>
          <Label class="label-3">
            <Checkbox class="checkbox-3">选项一</Checkbox>
            <Checkbox class="checkbox-3">选项二</Checkbox>
            <View class="label-3-text">点击该label下的文字默认选中第一个checkbox</View>
          </Label>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

