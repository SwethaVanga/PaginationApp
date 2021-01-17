import config from '../utils/config'
import axios from 'axios'

/**
	 * Find books based on the search filter and display per page 
	*/
export const findBooks = async (page = 1, itemsPerPage = 20, searchFilter = '') => {
  try {
    const payload = {
      page,
      itemsPerPage,
    }
    if (searchFilter) {
      payload.filters = [
        {
          type: 'all',
          values: [searchFilter]
        }
      ]
    }
    let data = await axios.post(`${config.API_ENDPOINT}/books`, payload)
    return data
  } catch (error) {
    return { error }
  }
}