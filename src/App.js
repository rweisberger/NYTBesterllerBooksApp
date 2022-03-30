import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import BookRow from './components/BookRow';
import Welcome from './components/Welcome';




function App() {
  const [books, setBooks] = React.useState([]);
  React.useEffect(() => { getAPIData(url) }, []);


    const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
    async function getAPIData(url) {
      const response = await fetch(url);
      let data = await response.json();
      let booksList = data.results.books;  
      console.log(booksList);

      const booksArray= [];
      for(let i= 0; i < booksList.length; i++){
        let newBook=[booksList[i].title, booksList[i].author, booksList[i].description, booksList[i].book_image];
        // console.log(booksList[i].title, booksList[i].author, booksList[i].description);
        booksArray.push(newBook);
      };

      const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
      async function getAPIData2(url2) {
        const response = await fetch(url2);
        let data = await response.json();
        let booksList2 = data.results.books;  
        console.log(booksList2);
      };
      getAPIData2(url2);

      setBooks(booksArray);
      // booksList.forEach((book) => {
      //   let newBook= {};
      //   newBook= book.title, book.author, book.description};
      //   console.log(newBook)

      // }
      // )
      // setBooks(books, ...newBook);

      };
    
  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="about" element={<BookRow />} />
        </Routes>
        <table className="table">
          <thead>
          <tr>
              <th scope="col">Rank</th>
              <th scope="col">Title</th>
              <th scope="col">Author</th>
              <th scope="col">Description</th>
              <th scope="col">Image</th>

            </tr>
          </thead>
          <tbody>
            {books.map((book, i) => (
              <BookRow book={ book } index = { i } />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
