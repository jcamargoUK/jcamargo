import React, {useState, useEffect} from 'react';
import '../styles/main.css'

const apikey = '87bfb93ef955f5ca52a2ae8707529af3';
const url = 'https://gnews.io/api/v4/search?q=example&apikey=' + apikey + '&lang=en&country=us&max=10';

function Main(){
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => {
            setArticles(data.articles);
            setLoading(false);
        })
    }, []);

    return(
        <div>
            {loading ? <p>Loading...</p> : <p>Loaded</p>}
            {articles.map(article => (
                <div key={article.id}>
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                    <img className='article_img' src={article.image} alt={article.title}/>
                </div>
            ))}
        </div>
    );
 
}
export default Main;