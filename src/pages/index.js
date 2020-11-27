import React from 'react';
import { Layout } from 'antd';
import styles from './index.css';
import MenuCom from '../components/menu.jsx';
// import Crumb from '../components/crumb.jsx';
import router from 'umi/router';
import { MenuUnfoldOutlined, MenuFoldOutlined, LoginOutlined } from '@ant-design/icons';

const { Header, Sider, Content } = Layout;
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    };
  }

  componentWillMount() {
    // TODO:重定向到登录页面
    if (!sessionStorage.getItem('tokenTest')) {
      router.push('/login');
    } else {
      router.push('/goods/goodsManagement');
    }
  }
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  logoutHandler = () => {
    sessionStorage.removeItem('tokenTest');
    router.push('/login');
  };
  render() {
    return (
      <Layout className={styles.index}>
        <Sider width="200" trigger={null} collapsible collapsed={this.state.collapsed}>
          <div className={styles.titleBox}>
            <div className={styles.title}>XXXX管理系统</div>
          </div>
          <MenuCom></MenuCom>
        </Sider>
        <Layout>
          <Header className={styles.head}>
            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: this.toggle,
            })}
            <LoginOutlined style={{ fontSize: '24px' }} onClick={this.logoutHandler} />
          </Header>
          <Content className={styles.content}>{this.props.children}</Content>
        </Layout>
      </Layout>
    );
  }
}

export default Index;
