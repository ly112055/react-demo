import React from 'react';
import styles from './login.less';
import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import router from 'umi/router';

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  finishHandler = values => {
    sessionStorage.setItem('tokenTest', 'tokenTets11101011010');
    router.push('/goods/goodsManagement');
  };
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>XXXX后台管理系统</div>
        <Form ref={this.loginForm} onFinish={this.finishHandler} className={styles.loginForm}>
          <Form.Item
            {...formItemLayout}
            label="用户名："
            name="username"
            rules={[
              {
                required: true,
                message: '请输入用户名',
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            {...formItemLayout}
            label="密码："
            name="password"
            rules={[
              {
                required: true,
                message: '请输入密码',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <div className={styles.item}>
            <span>忘记密码？</span>
          </div>
          <Form.Item>
            <Button className={styles.btn} type="primary" htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
