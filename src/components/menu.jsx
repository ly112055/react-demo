import { Menu } from 'antd';
import menuRoutes from '../router/index';
import Link from 'umi/link';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const menuList = menuRoutes.routes[0].routes[0].routes;
function MenuCom () {
    return (
      <div>
        <Menu mode='inline' theme="dark">
          {
            menuList.map((item)=>{
              return (
                <SubMenu
                  key={item.name}
                  title={item.name}
                  icon={<UserOutlined />}
                >
                  {item.routes.map((itemt) => {
                    return (
                      <Menu.Item key={itemt.name}>
                        <Link to={itemt.path}>{itemt.name}</Link>
                      </Menu.Item>
                    );
                  })}
                </SubMenu>
              )
            })
          }
        </Menu>
      </div>
    );
}

export default MenuCom;
