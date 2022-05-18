import React from 'react';

const BookRow = ({ book, index }) => {

    return(
      
       <tr onClick={()=> alert(`add ${book[0]} to reading list`)}>
        <th scope="row">{index + 1}</th>
        <td >{book.title}</td>
        <td>{book.author}</td>
        <td>{book.description}</td>
        <td><img src={book.image} alt=""  height="135" width="85"></img></td>
      </tr>
  )};

const BookDisplayTable = ({books}) => {

    return (
      <div className="container">
        <h1>Top 15 Bestsellers</h1>
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
            <BookRow key={i} book={ book } index = { i } />
          ))}
        </tbody>
      </table>
      </div>
    )
};

export default BookDisplayTable;
