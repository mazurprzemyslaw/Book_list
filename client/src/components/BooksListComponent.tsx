import React, { useState, useEffect } from "react";
import { Button } from "@material-ui/core";
import uuid from "uuid";

interface IBook {
  id: any;
  title: string;
  author: string;
  isbn: number;
  pages: number;
}

export const BooksListComponent = () => {
  const [books, setBooks] = useState<IBook[]>([
    { id: uuid(), title: "title1", author: "author1", isbn: 1234, pages: 100 },
    { id: uuid(), title: "title2", author: "author2", isbn: 1234, pages: 100 },
    { id: uuid(), title: "title3", author: "author3", isbn: 1234, pages: 100 },
    { id: uuid(), title: "title4", author: "author4", isbn: 1234, pages: 100 }
  ]);

  const [book, setBook] = useState();

  useEffect(() => {
    if (book !== undefined) {
      setBooks([...books, book]);
    }
  }, [book]);

  const handleAddBook = () => {
    const title = prompt("Enter title");
    const author = prompt("Enter author");
    const isbn = prompt("Enter isbn");
    const pages = prompt("Enter pages");

    setBook({ id: uuid(), title, author, isbn, pages });
  };

  const handleRemoveBook = (id: any) => {};

  return (
    <div>
      <Button onClick={handleAddBook}>Add Book</Button>
      {books.length &&
        books.map(({ id, title, author, isbn, pages }, key) => (
          <div key={key}>
            <div>{id}</div>
            <div>{title}</div>
            <div>{author}</div>
            <div>{isbn}</div>
            <div>{pages}</div>
            <Button onClick={() => handleRemoveBook(key)}>delete</Button>
          </div>
        ))}
    </div>
  );
};
