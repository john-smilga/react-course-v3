import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  )
}

const Image = () => (
  <img src='./images/book-1.jpg' alt='Interesting Facts For Curious Minds' />
)
const Title = () => {
  return <h2>Interesting Facts For Curious Minds</h2>
}
const Author = () => {
  const inlineHeadingStyles = {
    color: '#617d98',
    fontSize: '1.25rem',
    marginTop: '0.75rem',
  }
  return <h4 style={inlineHeadingStyles}>Jordan Moore </h4>
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
