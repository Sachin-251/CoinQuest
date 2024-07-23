# CoinQuest

CoinQuest is a comprehensive cryptocurrency information platform built with modern web development technologies. The platform provides in-depth data on all major cryptocurrencies, crypto markets, and exchanges, along with the latest cryptocurrency news.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Links](#links)

## Features

- **Cryptocurrency Data**: Detailed information on all major cryptocurrencies, including prices, market caps, trading volumes, and historical data.
- **Market and Exchange Insights**: Comprehensive data on cryptocurrency markets and exchanges, enabling users to compare and analyze different trading platforms.
- **Interactive Charts**: Visualization of cryptocurrency trends and data using Chart.js.
- **Latest News**: Integration with Bing News API to display the latest news articles and updates on cryptocurrencies.
- **User-Friendly Interface**: Clean and modern UI design using Ant Design.
- **Responsive Design**: Optimized for accessibility and performance across various devices, including desktops, tablets, and mobile phones.

## Technologies Used

- **React.js**: For building the user interface.
- **Redux Toolkit**: For state management.
- **RTK Query**: For data fetching and caching.
- **Ant Design**: For the UI components and styling.
- **Chart.js**: For data visualization.
- **Rapid API**: For integrating third-party APIs.
- **Coinranking API**: For real-time cryptocurrency data.
- **Bing News API**: For the latest cryptocurrency news.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Sachin-251/CoinQuest.git
   cd CoinQuest
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env` file in the root directory and add your API keys:
   ```env
    REACT_APP_RAPIDAPI_KEY =  [YOUR RAPID API KEY]
    REACT_APP_CRYPTO_API_URL = 'https://coinranking1.p.rapidapi.com'
    REACT_APP_NEWS_API_URL = 'https://news-api14.p.rapidapi.com/v2'
    REACT_APP_EXCHANGE_API_URL = 'https://coingecko.p.rapidapi.com'
    REACT_APP_NEWS_RAPIDAPI_HOST = 'news-api14.p.rapidapi.com'
    REACT_APP_CRYPTO_RAPIDAPI_HOST ='coinranking1.p.rapidapi.com'
    REACT_APP_EXCHANGE_RAPIDAPI_HOST = 'coingecko.p.rapidapi.com'
   ```

4. Start the development server:
   ```bash
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the app.

## Usage

- Browse detailed information on major cryptocurrencies.
- View and analyze data on different crypto markets and exchanges.
- Stay updated with the latest news articles on cryptocurrencies.
- Explore interactive charts to visualize market trends.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m 'Add some feature'
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## Links

- [Rapid API](https://rapidapi.com)
- [CoinRanking API](https://rapidapi.com/Coinranking/api/coinranking1?utm_source=youtube.com%2FJavaScriptMastery&utm_medium=DevRel&utm_campaign=DevRel) 
- [News API](https://rapidapi.com/bonaipowered/api/news-api14)
- [CoinGecko API](https://rapidapi.com/coingecko/api/coingecko)

---

Feel free to reach out with any questions or feedback. Enjoy exploring CoinQuest!