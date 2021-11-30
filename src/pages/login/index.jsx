import React, { Component } from 'react'
import { Redirect } from 'react-router'
import { Form, Icon, Input, Button, Checkbox , message} from 'antd'

import './index.css'
import logo from '../../assets/images/logo.png'
import { reqLogin } from '../../api'
import memoryUtil from '../../utils/memoryUtil'
import { saveUser } from '../../utils/storageUtil'

class Login extends Component {
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.form.validateFields(async (err, values) => {
            if (!err) {
                const {username, password} = values
                const {data} = await reqLogin(username, password)
                if (data.status === 0) {
                    saveUser(data.data)
                    this.props.history.replace('/')
                } else {
                    message.error('登陆失败')
                }
            } else {
                console.error(err)
            }
    });
    }
    render() {
        const user = memoryUtil.user
        console.log(user)
        if (user && user._id) {
            return <Redirect to="/"/>
        }
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