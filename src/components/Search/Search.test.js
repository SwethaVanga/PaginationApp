import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Search } from './Search'

configure({ adapter: new Adapter() })

describe('Search', () => {
  it('Expected Search renders correctly, expected a form to be rendered', () => {
    const wrapper = shallow(<Search />)
    const elem = wrapper.find('Form')
    expect(elem.length).toBe(1)
  })
})