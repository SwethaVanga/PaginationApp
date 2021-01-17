import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { BookContainer } from './BookContainer'
import axios from 'axios'
import { findBooks } from '../../services'
import config from '../../utils/config'

configure({ adapter: new Adapter() })

jest.mock('axios')

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn().mockReturnValue({
    pathname: '/',
    search: '',
    hash: '',
    state: null,
  }),
  useHistory: () => ({
    push: jest.fn(),
  }),
}))

describe('Container', () => {
  it('Expected Container renders correctly', () => {
    shallow(<BookContainer />)
  })
  describe('The Container rendered successfully', () => {
    it('Expected findBooks to be called correctly', async () => {
      await expect(findBooks())
      expect(axios.post).toHaveBeenCalledWith(
        `${config.API_ENDPOINT}/books`, { 'itemsPerPage': 20, 'page': 1 }
      )
    })
  })
})