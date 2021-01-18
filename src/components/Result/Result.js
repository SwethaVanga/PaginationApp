import React from 'react'
import {
  Table
} from 'react-bootstrap'

export const Result = (props) => {
  const {
    isLoading,
    items } = props

  return (
    <Table
      striped
      bordered
      responsive
      hover
      className='container__table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Author</th>
          <th>Year</th>
          <th>Pages</th>
          <th>Country</th>
          <th>City</th>
        </tr>
      </thead>
      {isLoading ?
        <tbody>
          <tr>
            <td colSpan={7}>
              Loading...
            </td>
          </tr>
        </tbody>
        : <tbody>
          {items && items.map(item => (
            <tr key={item.id} className='item'>
              <td>{item.id}</td>
              <td>{item.book_title}</td>
              <td>{item.book_author}</td>
              <td>{item.book_publication_year}</td>
              <td>{item.book_pages}</td>
              <td>{item.book_publication_country}</td>
              <td>{item.book_publication_city}</td>
            </tr>
          ))}
        </tbody>
      }
    </Table>

  )
}

