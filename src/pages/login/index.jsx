import React, { Component } from 'react'
import { Form, Icon, Input, Button, Checkbox } from 'antd'
import './index.css'
import logo from '../../assets/images/logo.png'
class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields((err, values) => {
            if (!err) {
                const {username, password} = values
                console.log(username, password)
            } else {
                console.error(err)
            }
    });
    }
    render() {
        const { getFieldDecorator } = this.props.form
        return (
            <div className="login">
                <div className="login-head">
                    <img src={logo} alt="logo" />
                    <h2>React项目: 后台管理系统</h2>
                </div>
                <div className="login-content">
                    <h2>用户登录</h2>
                    <div className="login-form">
                        <Form onSubmit={this.handleSubmit} className="login-form">
                            <Form.Item>
                                {getFieldDecorator('username', {
                                    rules: [
                                        { required: true, whiteSpace: true, message: 'Please input your username!' },
                                        { max: 12, message: 'longest length is 12' },
                                        { min: 4, message: 'tinyest length is' },
                                        {pattern: /^[a-zA-Z_0-9]+$/, message: 'number _ and char'}
                                    ],
                                    initialValue: 'admin'
                                })(
                                    <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="Username"
                                    />,
                                )}
                            </Form.Item>
                            <Form.Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    { required: true, message: 'Please input your Password!' },
                                    { max: 12, message: 'longest length is 12' },
                                    { min: 4, message: 'tinyest length is' },
                                    {pattern: /^[a-zA-Z_0-9]+$/, message: 'number _ and char'}
                                ],
                            })(
                                <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                />,
                            )}
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" className="login-form-button">
                                    Log in
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(Login);
export default WrappedNormalLoginForm