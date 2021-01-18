import React from 'react'
import {
  Pagination as BootstrapPagination,
  FormControl
} from 'react-bootstrap'

export const Pagination = (props) => {
  const {
    itemPerPage,
    setLimitPage,
    page,
    setPage,
    count } = props

  return (
    <div className='container__bottom-action'>
      <div className='bottom-action__limit-dropdown'>
        <FormControl
          as="select"
          size="sm"
          custom
          className='limit-dropdown__dropdown'
          value={itemPerPage}
          onChange={(e) => setLimitPage(parseInt(e.target.value))}>
          <option value={10}>10</option>
          <option value={20}>20</option>
          <option value={50}>50</option>
          <option value={100}>100</option>
        </FormControl>
        <div className='limit-dropdown__text'>
          entries per page
        </div>
      </div>
      <BootstrapPagination>
        <BootstrapPagination.Prev onClick={() => 1 !== page ? setPage(page - 1) : ''} />
        {page !== 1 && 
				<BootstrapPagination.Item onClick={() => setPage(page - 1)}>{page - 1}</BootstrapPagination.Item>}
        <BootstrapPagination.Item active>{page}</BootstrapPagination.Item>
        {Math.ceil(count / itemPerPage) !== page && 
				<BootstrapPagination.Item onClick={() => setPage(page + 1)}>{page + 1}</BootstrapPagination.Item>}
        <BootstrapPagination.Next onClick={() => Math.ceil(count / itemPerPage) !== page ? setPage(page + 1) : ''} />
      </BootstrapPagination>
    </div>
  )
}

