import { useState } from 'react';
import Card from '../shared/Card/Card.jsx';
import Loading from '../shared/Loading/Loading.jsx';
import { requestArticles } from '../../reducers/hackerNewsReducer.js';
import { useSelector } from 'react-redux/es/hooks/useSelector.js';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

export default function HackerNews() {

  //? Use useSelector to get loading and articles from the redux store instead of local state.
  // const [articles, setArticles] = useState([]);
  const articles = useSelector((state) => state.hackerNews.articles)
  // const [loading, setLoading] = useState(true);
  const loading = useSelector((state) => state.hackerNews.loading)

  //? Invoke useDispatch to get the dispatch function.
  const dispatch = useDispatch()

  //? Add a useEffect hook, and dispatch requestArticles inside it. Add an empty array as the second argument to the useEffect.
  useEffect(()=> {
    dispatch(requestArticles)
  }, [])

  const articleCards = articles.map((article) => <Card key={article.id} article={article} />);
  return (
    <div className="news-container">
      <img className='logo' src="../../assets/hackerNews.jpeg" alt="" />
      {loading ? <Loading /> : <div>{articleCards}</div>}
    </div>
  );
}
