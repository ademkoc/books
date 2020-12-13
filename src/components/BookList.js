import './BookList.css'
import React from 'react'
import Book from './Book'
import { BookContext } from '../contexts/BookContext'

class BookList extends React.Component {
  render() {
    return (
      <BookContext.Consumer>
        {(context) => (
          <section className="page-section bg-light" id="portfolio">
            <div className="container">
              <div className="text-center">
                <h2 className="section-heading text-uppercase">Portfolio</h2>
                <h3 className="section-subheading text-muted">
                  Lorem ipsum dolor sit amet consectetur.
                </h3>
              </div>
              <div className="row">
                {context.books.map((book, i) => (
                  <Book book={book} key={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </BookContext.Consumer>
    )
  }
}

export default BookList
