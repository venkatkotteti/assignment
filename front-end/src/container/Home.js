


import { Layout, Space } from 'antd';
import Location from '../component/Location';
import CONSTANTS from '../constants/common'
const { Header, Footer, Content } = Layout;

const headerStyle = {
  width:'100%',
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  color: '#fff',
  minHeight:'100%',
  backgroundColor: '#ffffff',
  padding:'0 12rem'
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


const Home = () => {
    return (
        <Layout>
          <Header style={headerStyle}><h2>{CONSTANTS.HEADER_TITLE}</h2></Header>
          <Content style={contentStyle}><Location/></Content>
          <Footer style={footerStyle}>{CONSTANTS.FOOTER_TITLE}</Footer>
        </Layout>
      );
}
export default Home;