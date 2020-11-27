import Login from '../pages/login';
import styles from './index.less';

function BasicLayout(props) {
  if (props.location.pathname === '/login') {
    return <Login>{props.children}</Login>;
  }
  return <div className={styles.container}>{props.children}</div>;
}

export default BasicLayout;
