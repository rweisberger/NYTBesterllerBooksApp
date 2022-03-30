import './App.css';
import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar';
import HardcoverFiction from './components/HardcoverFiction';
import Welcome from './components/Welcome';




function App() {
  const [hardcoverBooks, setHardcoverBooks] = React.useState([]);
  const [paperbackBooks, setPaperbackBooks] = React.useState([]);

  React.useEffect(() => { getAPIDataHardcoverFiction(url1);
                          getAPIData2(url2)}, []);
  


    const url1 = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
    async function getAPIDataHardcoverFiction(url) {
      const response = await fetch(url);
      let data = await response.json();
      let booksList = data.results.books;  
      console.log(booksList);

      const hardcoverFictionBooksArray= [];
      for(let i= 0; i < booksList.length; i++){
        let newBook=[booksList[i].title, booksList[i].author, booksList[i].description, booksList[i].book_image];
        // console.log(booksList[i].title, booksList[i].author, booksList[i].description);
        hardcoverFictionBooksArray.push(newBook);
      };
        setHardcoverBooks(hardcoverFictionBooksArray);

      // const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
      // async function getAPIData2(url2) {
      //   const response = await fetch(url2);
      //   let data = await response.json();
      //   let booksList2 = data.results.books;  
      //   console.log(booksList2);
      // };
      // getAPIData2(url2);

      };
     const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
      async function getAPIData2(url2) {
        const response = await fetch(url2);
        let data = await response.json();
        let booksList = data.results.books;  
        console.log(booksList);

      const paperbackFictionBooksArray= [];
        for(let i= 0; i < booksList.length; i++){
        let newBook=[booksList[i].title, booksList[i].author, booksList[i].description, booksList[i].book_image];
        // console.log(booksList[i].title, booksList[i].author, booksList[i].description);
        paperbackFictionBooksArray.push(newBook);
      };
        setPaperbackBooks(paperbackFictionBooksArray);
      };



  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path="Welcome" element={<Welcome />} />
          <Route path="HardcoverFiction" element={<HardcoverFiction books={hardcoverBooks}/>} />
          {/* <Route path="PaperbackFiction" element={<HardcoverFiction books={paperbackBooks}/>} /> */}

        </Routes>
      </div>
    </div>
  );
}

export default App;
