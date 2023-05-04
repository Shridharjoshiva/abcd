import {  
    IdcardOutlined,
    LayoutOutlined,
    SettingOutlined, 
  } from '@ant-design/icons';
  import { Layout, Menu, theme } from 'antd';
  import { Breadcrumb } from 'antd';
  import { useState } from 'react';
  import {useNavigate} from 'react-router-dom';
  import Layouts from './Layouts'
  const { Header, Sider, Content } = Layout;
  const Contetnt = () => {


    const navigate=useNavigate();
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div style={{
            display: "flex", flexDirection: "row", height: 32, margin: 16, background: 'rgba(255,255,255,0.2)',
          }} />
          <Menu
          onClick={({key})=>{
            if(key=="signout"){

            }else{
              navigate(key) 
            }
           
 
          }}
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['1']}

            items={[
              {
                key: '/',
                label: 'Dashboard',
              },
              {
                key: "/CostAnlysis",
                icon: <SettingOutlined />,
                label: 'CostAnlysis',
              },
              {
                key: '/',
                label: 'Resources',
              },
              {
                key: "/Resources",
                icon: <LayoutOutlined />,
                label: 'Resources',
              },
              {
                key: '/',
                label: 'Application',
              },
              {
                key: "/Application",
                icon: <IdcardOutlined />,
                label: 'Application',
              },
            ]}

          />
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          >
            <div style={{
              height: 35,
              backgroundColor: "lightblue",
              color: "red",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontWeight: "bold",
              fontSize: "100",
            }}
            
            ></div>
            <Breadcrumb
              style={{
                margin: '16px 0',
                color:"black",
              }}
            >
              <Breadcrumb
                routes={[
                  {
                    path: '/Charts',
                    breadcrumbName: 'Charts/',
                  },
                  {
                    path: '/List',
                    breadcrumbName: 'List',
                  
                  },
                ]}
              />

            </Breadcrumb>
          </Header>
          <Content
          
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 600,
              background: colorBgContainer,
              padding: '0 50px',
            }}
              
          >    
        
         
        <Layouts/>  
          </Content>
        </Layout>
      </Layout>
    );
  };
  export default Contetnt;