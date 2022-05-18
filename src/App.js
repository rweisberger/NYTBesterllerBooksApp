import './App.css';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import BookDisplayTable from './components/BookDisplayTable';
import Welcome from './components/Welcome';




function App() {
  const [hardcoverBooks, setHardcoverBooks] = React.useState([]);
  const [paperbackBooks, setPaperbackBooks] = React.useState([]);
  const [nonfictionBooks, setNonfictionBooks] = React.useState([]);


  React.useEffect(() => { getAPIDataHardcoverFiction(url1);
                          getAPIData2(url2)
                          getAPIData3(url3)}, []);
  


    const url1 = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
    async function getAPIDataHardcoverFiction(url) {
      const response = await fetch(url);
      let data = await response.json();
      let booksList = data.results.books;  
      console.log(booksList);

      const hardcoverFictionBooksArray= [];
      for(let i= 0; i < booksList.length; i++){
        let newBook= {title: booksList[i].title, author: booksList[i].author, description: booksList[i].description, image: booksList[i].book_image};
        hardcoverFictionBooksArray.push(newBook);
      };
        setHardcoverBooks(hardcoverFictionBooksArray);
      };

     const url2 = 'https://api.nytimes.com/svc/books/v3/lists/current/trade-fiction-paperback.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
      async function getAPIData2(url2) {
        const response = await fetch(url2);
        let data = await response.json();
        let booksList = data.results.books;  

      const paperbackFictionBooksArray= [];
        for(let i= 0; i < booksList.length; i++){
        let newBook= {title: booksList[i].title, author: booksList[i].author, description: booksList[i].description, image: booksList[i].book_image};
        paperbackFictionBooksArray.push(newBook);
      };
        setPaperbackBooks(paperbackFictionBooksArray);
      };

      const url3 = 'https://api.nytimes.com/svc/books/v3/lists/current/combined-print-and-e-book-nonfiction.json?api-key=uef2N6TRfxWquF97eod0L5pFXGKe4ACd';
        async function getAPIData3(url3) {
          const response = await fetch(url3);
          let data = await response.json();
          let booksList = data.results.books;  
          // console.log(booksList);

        const nonfictionBooksArray= [];
          for(let i= 0; i < booksList.length; i++){
          let newBook= {title: booksList[i].title, author: booksList[i].author, description: booksList[i].description, image: booksList[i].book_image};
          nonfictionBooksArray.push(newBook);
        };
        setNonfictionBooks(nonfictionBooksArray);
      };
      console.log(nonfictionBooks)

  return (
    <div className="App">
      <Navbar />

      <div className='container'>
        <Routes>
          <Route path="Welcome" element={<Welcome />} />
          <Route path="HardcoverFiction" element={<BookDisplayTable books={hardcoverBooks}/>} />
          <Route path="PaperbackFiction" element={<BookDisplayTable books={paperbackBooks}/>} />
          <Route path="Nonfiction" element={<BookDisplayTable books={nonfictionBooks}/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
