import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Picker, PickerViewColumn, PickerView } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

const date = new Date()
const years = []
const months = []
const days = []

for (let i = 1990; i <= date.getFullYear(); i++) {
  years.push(i)
}

for (let i = 1 ; i <= 12; i++) {
  months.push(i)
}

for (let i = 1 ; i <= 31; i++) {
  days.push(i)
}

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'picker'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      array: ['中国', '美国', '巴西', '日本'],
      index: 0,
      date: '2016-09-01',
      time: '12:01',

      years: years,
      year: date.getFullYear(),
      months: months,
      month: 2,
      days: days,
      day: 2,
      value: [9999, 1, 1],
    };
  }

  bindChange = (e) => {
    console.log('bindChange:', e)
    const val = e.detail.value
    console.log('val:', val)
    this.setState(prevState => {
      return {
        year: prevState.years[val[0]],
        month: prevState.months[val[1]],
        day: prevState.days[val[2]]
      }
    })
  }

  bindPickerChange = (e) => {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setState({
      index: e.detail.value
    })
  }

  bindDateChange = (e) => {
    this.setState({
      date: e.detail.value
    })
  }

  bindTimeChange = (e) => {
    this.setState({
      time: e.detail.value
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="picker"></Header>
      <View class="page-body">
        <View class="page-section">
          <View class="weui-cells__title">地区选择器</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">当前选择</View>
              </View>
              <View class="weui-cell__bd">
                <Picker onChange={this.bindPickerChange} value={this.state.index} range={this.state.array}>
                  <View class="weui-input">{array[index]}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View class="weui-cells__title">地区选择器2</View>
          <View>
            <View>{this.state.year}年{this.state.month}月{this.state.day}日</View>
            <PickerView indicator-style="height: 50px;" style="width: 100%; height: 300px;"
            value={this.state.value} onChange={this.bindChange}>
              <PickerViewColumn>
                {this.state.years.map(item => (
                  <View style="line-height: 50px">{item}年</View>
                ))}
              </PickerViewColumn>
              <PickerViewColumn>
                {this.state.months.map(item => (
                  <View style="line-height: 50px">{item}月</View>
                ))}
              </PickerViewColumn>
              <PickerViewColumn>
                {this.state.days.map(item => (
                  <View style="line-height: 50px">{item}日</View>
                ))}
              </PickerViewColumn>
            </PickerView>
          </View>

          <View class="weui-cells__title">时间选择器</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">当前选择</View>
              </View>
              <View class="weui-cell__bd">
                <Picker mode="time" value={this.state.time} start="09:01" end="21:01" onChange={this.bindTimeChange}>
                  <View class="weui-input">{this.state.time}</View>
                </Picker>
              </View>
            </View>
          </View>

          <View class="weui-cells__title">日期选择器</View>
          <View class="weui-cells weui-cells_after-title">
            <View class="weui-cell weui-cell_input">
              <View class="weui-cell__hd">
                <View class="weui-label">当前选择</View>
              </View>
              <View class="weui-cell__bd">
                <Picker mode="date" value={this.state.date} start="2015-09-01" end="2017-09-01" onChange={this.bindDateChange}>
                  <View class="weui-input">{this.state.date}</View>
                </Picker>
              </View>
            </View>
          </View>
        </View>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

