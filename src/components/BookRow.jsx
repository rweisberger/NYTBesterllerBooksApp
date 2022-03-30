import React from 'react';

const BookRow = ({ book, index }) => {

    return(
      
      <tr key={index}>
        <th key={index+1} scope="row">{index + 1} </th>
        <td key={"T"+index+1}>{book[0]}</td>
        <td key={"A"+index+1}>{book[1]}</td>
        <td key={"V"+index+1}>{book[2]}</td>
        <td><img src={book[3]} alt=""  height="135" width="85"></img></td>
      </tr>
  )}

  export default BookRow;