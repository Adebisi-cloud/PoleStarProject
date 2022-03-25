import React, { useState } from "react";
import { InputGroup, Input, Button, form, Spinner } from "reactstrap";
import "./App.css";
import axios from "axios";
import BookCard from "./BookCard";

function App() {
  //Declaring the variables and setter using States
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);

  //Handle Search
  const handleSubmit = () => {
    setLoading(true);
    axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=${query}`)

      .then((res) => {
        console.log("success");
        if (res.data.items.length > 0) {
          setCards(res.data.items);
          setLoading(false);
          console.log(cards);
        }
        console.log(res.data);
      })

      .catch((error) => {
        console.log("error");
        setLoading(true);
      });
  };
  const onSubmit = (e) => {
    console.clear();
    console.log("I am here");

    e.preventDefault();
    handleSubmit();
  };
  //Main Show Case by calling the eventhandlers
  const mainHeader = () => {
    return (
      <div className="main-image d-flex justify-content-center align-items-center flex-column">
        {/*Overlay */}
        <div className="filter"></div>
        <h1 className="display-2 text-center-white mb-3" style={{ zindex: 2 }}>
          Search for a Book
        </h1>
        <div style={{ width: "60%", zindex: 2 }}>
          <form onSubmit={onSubmit}>
            <InputGroup size="1g" className="mb-3">
              <Input
                type="text"
                placeholder="Book Search "
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button type="submit" value="Search" color="info">
                OK
              </Button>{" "}
            </InputGroup>
          </form>
        </div>
      </div>
    );
  };

  const handleCards = () => {
    //console.log(cards);
    const item = cards.map((item, i) => {
      let thumbnail = "";
      if (item?.volumeInfo?.imageLinks?.thumbnail) {
        thumbnail = item.volumeInfo.imageLinks.thumbnail;
      }
      console.log(item);
      return (
        <div className="col-1g-4" key={item.id}>
          <BookCard
            thumbnail={thumbnail}
            title={item.volumeInfo.title}
            authors={item.volumeInfo.authors}
            published={item.volumeInfo.publishedDate}
            infoLink={item.volumeInfo.infoLink}
            publisher={item.volumeInfo.publisher}
            previewLink={item.volumeInfo.previewLink}
            description={item.volumeInfo.description}
            pageCount={item.volumeInfo.pageCount}
            language={item.volumeInfo.language}
            categories={item.volumeInfo.categories}
           
        
          />
        </div>
      );
    });
    /* Loading of Items*/
    if (loading) {
      return (
        <div className="d-flex justify-content-center mb-3">
          <Spinner style={{ width: "3rem", height: "3rem", color: "blue" }} />
        </div>
      );
    } else {
      return (
        <div className="container my-5">
          <div className="row"> {item}</div>
        </div>
      );
    }
  };
  return (
    <div className="w-100 h-100">
      {mainHeader()}
      {handleCards()}
    </div>
  );
}

export default App;
