import React, { Component } from 'react'
import { Layout,Menu ,Icon} from 'antd'
import './index.css'
import logo from '../../assets/images/logo.png'

import Home from '../home'
import Category from '../category'
import Production from '../production'
import User from '../user'
import Role from '../role'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'

const { Header, Footer, Sider, Content } = Layout
const { SubMenu } = Menu

export default class Admin extends Component {
    render() {
        return (
            <Layout className="admin">
                <Sider className="left-nav">
                <div className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h2>硅谷后台</h2>
                </div>
                <Menu mode="inline" theme="dark">
                    <Menu.Item key="1">
                        <Icon type="pie-chart" />
                        <span>首页</span>
                    </Menu.Item>
                    <SubMenu key="sub1"
                        title={
                        <span>
                            <Icon type="mail" />
                            <span>商品</span>
                        </span>
                        }
                    >
                        <Menu.Item key="7">
                            <Icon type="mail" />
                            <span>品类管理</span>
                        </Menu.Item>
                        <Menu.Item key="8">
                            <Icon type="mail" />
                            <span>商品管理</span>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
                </Sider>
                <Layout className="main">
                    <Header>Header</Header>
                    <Content style={{backgroundColor: 'white'}}>Content</Content>
                    <Footer className="footer">
                        <h2>推荐使用谷歌浏览器，可以获得更佳页面操作体验</h2>
                    </Footer>
                </Layout>
            </Layout>
        )
    }
}
