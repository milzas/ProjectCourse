import CardPage from "./Card";
import React, { useEffect, useState } from "react";
import newApi from "../api/data";

const Main = () => {
  const [count, setCount] = useState(0);
  const [news, setNews] = useState([]);
  const [word, setWord] = useState("");
  const [category, setCategory] = useState("publishedAt");
  const [categoryNews, setCategoryNews] = useState("general");
  const [drop, setDrop] = useState(false);

  const fetch = async () => {
    try {
      let result = "";
      if (word === "") {
        result = await newApi.get(
          `/v2/top-headlines?country=rs&category=${categoryNews}&pageSize=100&apiKey=5c1dc769e9ac4be1868efa140185cc4f`
        );
      } else {
        result = await newApi.get(
          `/v2/everything?q=${word}&sortBy=${category}&pageSize=100&apiKey=5c1dc769e9ac4be1868efa140185cc4f`
        );
      }

      const data = result.data;
      console.log(data);
      setNews(data.articles);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetch();
  }, [word, category, categoryNews]);

  const handleBtnMoreNews = async () => {
    setCount(count + 20);

    // let news2 = news;

    // try {
    //   let result = "";
    //   if (word === "") {
    //     result = await newApi.get(
    //       `/v2/top-headlines?country=rs&category=${categoryNews}&apiKey=5c1dc769e9ac4be1868efa140185cc4f`
    //     );
    //   } else {
    //     result = await newApi.get(
    //       `/v2/everything?q=${word}&sortBy=${category}&pageSize=20&apiKey=5c1dc769e9ac4be1868efa140185cc4f`
    //     );
    //   }
    //   result.data.articles.map((item) => {
    //     news2.push(item);
    //     setNews(news2);
    //   });
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <div className="main">
      <div className="top">
        <input
          type="text"
          placeholder="Search..."
          onKeyPress={(e) => {
            if (e.key === "Enter") setWord(e.target.value);
          }}
        />
        <div className="dropDown">
          {word !== "" ? (
            <p>Sorted By:{category}</p>
          ) : (
            <p>Sorted By:{categoryNews}</p>
          )}
          <img
            src="dropDown.png"
            alt="src"
            onClick={() => {
              setDrop(!drop);
            }}
          />
        </div>
      </div>
      {drop ? (
        <div className="top2">
          <input
            type="text"
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                setWord(e.target.value);
                setCount(-1);
              }
            }}
          />
          {word !== "" ? (
            <div className="dropCat">
              <div className="dropElements">
                <p
                  onClick={() => {
                    setCount(0);
                    setCategory("relevancy");
                  }}
                >
                  Relevancy
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategory("popularity");
                  }}
                >
                  Popularity
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategory("publishedAt");
                  }}
                >
                  publishedAt
                </p>
              </div>
            </div>
          ) : (
            <div className="dropCatNev">
              <div className="dropElements">
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("general");
                  }}
                >
                  General
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("business");
                  }}
                >
                  Business
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("entertainment");
                  }}
                >
                  Entertainment
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("health");
                  }}
                >
                  Health
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("technology");
                  }}
                >
                  Technology
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("sports");
                  }}
                >
                  Sports
                </p>
                <p
                  onClick={() => {
                    setCount(0);
                    setCategoryNews("science");
                  }}
                >
                  Science
                </p>
              </div>
            </div>
          )}
        </div>
      ) : null}

      <div className="cards">
        {news
          .filter((item, index) => {
            if (index < count + 20) {
              return true;
            } else {
              return false;
            }
          })
          .map((item, index) => {
            return (
              <CardPage
                key={index}
                img={item.urlToImage}
                title={item.title}
                desc={item.description}
              />
            );
          })}
      </div>
      {count + 20 < news.length ? (
        <button className="BtnMoreNews" onClick={handleBtnMoreNews}>
          More news
        </button>
      ) : null}
    </div>
  );
};

export default Main;
