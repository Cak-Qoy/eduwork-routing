import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { API_KEY, BASE_URL } from "../../config/API";

const URL = `${BASE_URL}&category=general&apiKey=${API_KEY}`

const Home = () => {
  const [articles, setArticles] = useState();
  // const [loading, setLoading] = useState();

  useEffect(() => {
    retrieveArticles();
  }, []);

  const retrieveArticles = async () => {
    try {
      const { data } = await axios.get(URL);
      setArticles(data.articles);
    } catch (error) {
      console.log(error, "<== error retrieveArticles");
    }
  };

  return (
    <div className="container justify-content-center items-align-center pt-5">
      <div className="row me-2 ms-2 pt-5">
        {articles &&
          articles.map((article, index) => (
            <div className="col col-sm-12 col-md-4 col-lg-3 p-2">
              <div className="card">
                <img
                  src={article.urlToImage}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">{article.title}</h5>
                  <p className="card-text">{article.description}</p>
                  <a href={article.url} className="btn btn-primary">
                    Detail
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Home;
