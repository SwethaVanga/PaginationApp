import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Pagination } from './Pagination'

configure({ adapter: new Adapter() })

describe('Pagination', () => {
  it('Expected Pagination renders correctly', () => {
    shallow(<Pagination />)
  })
})