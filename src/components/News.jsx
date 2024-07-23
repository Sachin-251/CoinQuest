import React, { useState } from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Loader from './Loader';
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News';

const { Text, Title } = Typography;
const { Option } = Select;

const News = ({simplified}) => {

  const [newsCategory, setNewsCategory] = useState('Cryptocurrency');
  const { data } = useGetCryptosQuery(100);
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory, count:  simplified ? 6 : 12});
  console.log(cryptoNews?.data);

  if (!cryptoNews?.data) return <Loader />;

  return (
    <Row gutter={[24, 24]}>
      <Col span={24}>
          <Select
            showSearch
            className="select-news"
            placeholder="Select a Crypto"
            optionFilterProp="children"
            onChange={(value) => setNewsCategory(value)}
            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          >
            <Option value="Cryptocurency">Cryptocurrency</Option>
            {data?.data?.coins?.map((currency) => <Option value={currency.name}>{currency.name}</Option>)}
          </Select>
        </Col>
      {cryptoNews?.data?.map((news, i) => (
        <Col xs={24} sm={12} lg={8} key={i}>
          <Card hoverable className="news-card">
            <a href={news.url} target="_blank" rel="noreferrer">
              <div className="news-image-container">
                <Title className="news-title" level={4}>{news.title}</Title>
                <img src={news?.thumbnail || demoImage} alt="" width={100} height={80} />
              </div>
              <p>{news?.excerpt?.length > 100 ? `${news.excerpt.substring(0, 100)}...` : news.excerpt}</p>
              <div className="provider-container">
                <div>
                  <Avatar src={news.publisher?.image?.favicon || demoImage} alt="" />
                  <Text className="provider-name">{news.publisher?.name}</Text>
                </div>
                <Text>{moment(news?.date).startOf('ss').fromNow()}</Text>
              </div>
            </a>
          </Card>
        </Col>
      ))}
    </Row>
  )
}

export default News