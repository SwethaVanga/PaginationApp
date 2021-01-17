import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import {
  Container as BootstrapContainer
} from 'react-bootstrap'
import { Result } from '../Result/Result'
import { Search } from '../Search/Search'
import { Pagination } from '../Pagination/Pagination'
import { findBooks } from '../../services'


export const BookContainer = () => {
  const location = useLocation()
  const history = useHistory()
  const urlParams = new URLSearchParams(location?.search || '')
  const defaultPage = parseInt(urlParams.get('page')) || 1
  const defaultItemPerPage = parseInt(urlParams.get('item_per_page')) || 20
  const defaultSearchFilter = urlParams.get('search') || ''

  const [items, setItems] = useState([])
  const [page, setPage] = useState(defaultPage)
  const [search, setSearch] = useState('')
  const [searchFilter, setSearchFilter] = useState(defaultSearchFilter)
  const [itemPerPage, setItemPerPage] = useState(defaultItemPerPage)
  const [count, setCount] = useState(20)
  const [isLoading, setIsLoading] = useState(false)

  /**
	 * Handle updating the URL params 
	*/
  const handleQueryChange = async (isNewSearch = false) => {
    let params = new URLSearchParams(location?.search || '')
    if (isNewSearch) {
      params.delete('page')
      params.delete('item_per_page')
      searchFilter ? params.set('search', searchFilter) : params.delete('search')
      setItemPerPage(20)
      setPage(1)
    } else {
      page ? params.set('page', page) : params.delete('page')
      itemPerPage ? params.set('item_per_page', itemPerPage) : params.delete('item_per_page')
      searchFilter ? params.set('search', searchFilter) : params.delete('search')
    }

    if (history) {
      history.replace({
        pathname: '/',
        search: `?${params.toString()}`,
      })
    }

    setSearch(searchFilter)
  }

  /**
	 * Handle get books api call
	*/
  const getBooks = async () => {
    setIsLoading(true)

    const { data, error } = await findBooks(page, itemPerPage, searchFilter)

    if (data) {
      setItems(data.books)
      setCount(data.count)
    }
    if (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  /**
	 * Call getbooks, handleQueryChange when page, itemPerPage, search change
	*/
  useEffect(() => {
    getBooks()
    handleQueryChange()
  }, [page, itemPerPage, search])

  /**
	 * setItemPerPage, roll back to page 1 
	*/
  const setLimitPage = (limit) => {
    setItemPerPage(limit)
    setPage(1)
  }

  return (
    <BootstrapContainer>
      <h1 className='container__heading'>
        Books app
      </h1>
      <Search
        searchFilter={searchFilter}
        handleQueryChange={handleQueryChange}
        setSearchFilter={setSearchFilter}
      />
      <Result
        items={items}
        page={page}
        isLoading={isLoading}
      />
      <Pagination
        page={page}
        setPage={setPage}
        count={count}
        setCount={setCount}
        itemPerPage={itemPerPage}
        setLimitPage={setLimitPage}
      />
    </BootstrapContainer>
  )
}