import React, { useEffect, useState } from 'react';
import './App.css';
import NavigationAznews from './components/NavigationAznews'
import NewsContent from './components/newsContent/NewsContent';
import axios from 'axios';
import apiKey from './data/config';
import Footer from './components/Footer';


function App() {
  const [category, setCategory] = useState("top");
  const [newsArray, setNewsArray] = useState([]);
  const [newsResults, setNewsResults] = useState();
  const [loadmore, setLoadmore] = useState(null);


  const newsApi = async () => {
    try {
      // const proxyUrl = "https://cors.anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=region=india&category=${category}`
      );
        // console.log(news);
      setLoadmore(news.data.nextPage);
      setNewsArray(news.data.results);
      setNewsResults(news.data.totalResults);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    newsApi(); // eslint-disable-next-line
  }, [newsResults, category, loadmore]);


  return (
    <div className="App">
      <NavigationAznews setCategory={setCategory}/>
      <NewsContent 
        loadmore={loadmore}
        newsArray={newsArray} 
        newsResults={newsResults}
      />
     <Footer/>
    </div>
  );
}

export default App;
