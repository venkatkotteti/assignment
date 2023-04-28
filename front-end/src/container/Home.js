


import { Layout, Space } from 'antd';
import Location from '../component/Location';
import CONSTANTS from '../constants/common'
const { Header, Footer, Content } = Layout;

const headerStyle = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
  padding:'0 5rem'
};

const footerStyle = {
  textAlign: 'center',
  color: '#fff',
  backgroundColor: '#7dbcea',
};


const Home = () => {
    return (
        <Space
        direction="vertical"
        style={{
          width: '100rem',
          margin: '0 5rem'
        }}
      >
        <Layout>
          <Header style={headerStyle}><h2>{CONSTANTS.HEADER_TITLE}</h2></Header>
          <Content style={contentStyle}><Location/></Content>
          <Footer style={footerStyle}>{CONSTANTS.FOOTER_TITLE}</Footer>
        </Layout>
        
      </Space>
       
      );
}
export default Home;