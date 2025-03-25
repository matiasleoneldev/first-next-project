"use client"

import React from 'react'

const SearchFormReset = () => {
    const reset = () => {
        const form = document.querySelector('.search-form') as HTMLFormElement
        if (form) {
          form.reset()
        }
      }
  return (
    <button
              type='reset'
              className='btn btn-primary'
              onClick={reset}
            >
              Clear
            </button>
  )
}

export default SearchFormReset