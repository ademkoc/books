import './BookList.css'
import React from 'react'
import Book from './Book'
import { BookContext } from '../contexts/BookContext'
import { ThemeContext } from '../contexts/ThemeContext'

class BookList extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {(themeContext) => (
          <BookContext.Consumer>
            {(bookContext) => {
              const { books } = bookContext
              const { isDarkTheme, dark, light, changeTheme } = themeContext
              const theme = isDarkTheme ? dark : light
              return (
                <section
                  className="page-section"
                  style={{ background: theme.bg, color: theme.txt }}
                  id="portfolio"
                >
                  <div className="container">
                    <div className="text-center">
                      <h2 className="section-heading text-uppercase">
                        Portfolio
                      </h2>
                      <h3 className="section-subheading text-muted">
                        Lorem ipsum dolor sit amet consectetur.
                      </h3>
                      <button
                        type="button"
                        className="btn btn-sm btn-info"
                        style={{ marginTop: "-70px" }}
                        onClick={changeTheme}
                      >
                        Dark Mode
                      </button>
                    </div>
                    <div className="row">
                      {books.map((book, i) => (
                        <Book book={book} key={i} />
                      ))}
                    </div>
                  </div>
                </section>
              )
            }}
          </BookContext.Consumer>
        )}
      </ThemeContext.Consumer>
    )
  }
}

export default BookList
