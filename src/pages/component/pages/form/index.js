import Taro, { Component } from '@tarojs/taro'
import { View, Text, Icon, Form, Switch, Label,
   Radio, Checkbox, Slider, Input, Button } from '@tarojs/components'
import Foot from '../../../../common/foot'
import Header from '../../../../common/head'

import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'form'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  constructor(props) {
    super(props);
    this.state = {
      chosen: ''
    };
  }

  formSubmit = (e) => {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
  }
  formReset = (e) => {
    console.log('form发生了reset事件，携带数据为：', e)
    this.setState({
      chosen: ''
    })
  }

  render () {
    return (
    <View class="container">
      <Header title="form"></Header>
      <View class="page-body">
        <Form onSubmit={this.formSubmit} onReset={this.formReset}>
          <View class="page-section page-section-gap">
            <View class="page-section-title">switch</View>
            <Switch name="switch"/>
          </View>

          <View class="page-section page-section-gap">
            <View class="page-section-title">radio</View>
            <radio-group name="radio">
              <Label><Radio value="radio1"/>选项一</Label>
              <Label><Radio value="radio2"/>选项二</Label>
            </radio-group>
          </View>

          <View class="page-section page-section-gap">
            <View class="page-section-title">checkbox</View>
            <checkbox-group name="checkbox">
              <Label><Checkbox value="checkbox1"/>选项一</Label>
              <Label><Checkbox value="checkbox2"/>选项二</Label>
            </checkbox-group>
          </View>

          <View class="page-section page-section-gap">
            <View class="page-section-title">slider</View>
            <Slider value="50" name="slider" show-value ></Slider>
          </View>

          <View class="page-section">
            <View class="page-section-title">input</View>
            <View class="weui-cells weui-cells_after-title">
              <View class="weui-cell weui-cell_input">
                <View class="weui-cell__bd">
                  <Input class="weui-input" name="input" placeholder="这是一个输入框" />
                </View>
              </View>
            </View>
          </View>

          <View class="btn-area">
            <Button type="primary" formType="submit">Submit</Button>
            <Button formType="reset">Reset</Button>
          </View>
        </Form>
      </View>
      <Foot></Foot>
    </View>
    )
  }
}

