import axios from 'axios';
import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';

const NewsList = () => {
    // []
    const [news, setNews] = useState([]);

    // async와 await를 이용
    const onClick = async() => {
        const response = await axios.get(
            'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a'
            );
        console.log(response.data.articles);
        setNews(response.data.articles);
    };

    // useEffect 자체에 비동기 처리할 수 없음 (비동기 처리를 함수로 따로 빼내야 한다)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                'https://newsapi.org/v2/top-headlines?country=kr&category=business&apiKey=c4c09dd0ba45435cb60e93cd10259c2a'
                );
                setNews(response.data.articles);
            } catch(e) {
                console.log(e);
            };
        };
        fetchData();
    }, []);

    return (
        <div>
            {news.map((n) => (
                <NewsItem key={n.url} news={n} />
            ))}
        </div>
    );
};

export default NewsList;