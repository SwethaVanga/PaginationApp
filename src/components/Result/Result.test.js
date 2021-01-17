import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Result } from './Result'

configure({ adapter: new Adapter() })

describe('Result', () => {
  it('Expected Result renders correctly, expected a table to be rendered ', () => {
    const wrapper = shallow(<Result />)
    const elem = wrapper.find('.container__table')
    expect(elem.length).toBe(1)
  })
})