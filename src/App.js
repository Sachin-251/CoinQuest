import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Cryptocurrencies, Exchanges, Homepage, News, CryptoDetails } from './components';

function App() {
  return (
    <div className='app'>
      <div className='navbar'><Navbar /></div>

      <div className='main'>
        <Layout>
          <div className='routes'>
            <Routes>
              <Route exact path='/' element={<Homepage />} />
              <Route exact path='/cryptocurrencies' element={<Cryptocurrencies />} />
              <Route exact path='/crypto/:coinId' element={<CryptoDetails />} />
              <Route exact path='/exchanges' element={<Exchanges />} />
              <Route exact path='/news' element={<News />} />
            </Routes>
          </div>
        </Layout>

        <div className='footer'>
          <Typography.Title level={5} style={{color: "white", textAlign: "center"}}>
            <span style={{color: "#e6f7ff", fontSize: '22px'}}>CoinQuest</span> <br />
            All rights reserved &copy; Sachin Shrivastav
          </Typography.Title>
          <Space>
            <Link to="/">Home</Link>
            <Link to="/">Privacy Policy</Link>
            <Link to="/">About</Link>
            <Link to="/">Blog</Link>
          </Space>
        </div>
      </div>
    </div>
  );
}

export default App;
