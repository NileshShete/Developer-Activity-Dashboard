import React, { useEffect, useState } from 'react';
import { fetchData } from './services/api';
import Chart from './components/Chart';
import Table from './components/Table';
import Filters from './components/Filters';
import GlobalStyles from './styles/GlobalStyles';
import { Layout, Menu, Typography } from 'antd';
import { AppContainer, Logo } from './styled';
import Sider from 'antd/es/layout/Sider';

const { Header, Content } = Layout;
const { Title } = Typography;

const App = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getData = async () => {
      const result = await fetchData();
      setData(result.rows);
      setFilteredData(result.rows);
    };

    getData();
  }, []);

  useEffect(() => {
    if (filter === 'all') {
      setFilteredData(data);
    } else {
      setFilteredData(data.map(row => ({
        ...row,
        totalActivity: row.totalActivity.filter(activity => activity.name === filter),
        dayWiseActivity: row.dayWiseActivity.map(day => ({
          ...day,
          items: {
            children: day.items.children.filter(item => item.label === filter)
          }
        }))
      })));
    }
  }, [filter, data]);

  return (
    <AppContainer>
      <GlobalStyles />
      <Layout className="App site-layout">
        <Sider>
          <Logo>DevDynamics Inc</Logo>
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['2']}
          >
            <Menu.Item key="1">Dashboard</Menu.Item>
            <Menu.Item key="2">Activities</Menu.Item>
            <Menu.Item key="3">Reports</Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header className="App-header">
            <Title level={2} style={{ color: 'white', margin: 0 }}>Developer Activity Dashboard</Title>
          </Header>
          <Content style={{ margin: '24px 16px 0' }} className="site-layout-background">
            <Filters onFilterChange={setFilter} />
            <Chart data={filteredData} />
            <Table data={filteredData} />
          </Content>
        </Layout>
      </Layout>
    </AppContainer>
  );
};

export default App;
