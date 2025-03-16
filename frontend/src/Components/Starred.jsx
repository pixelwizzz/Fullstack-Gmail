import React from 'react'

const Starred = () => {
  return (
    <div className='flex-1 bg-white rounded-xl mr-5 p-4'>
      <h2 className='text-lg font-medium text-gray-800 mb-4'>Starred</h2>
      <div className='text-gray-600'>
        {/* Add your starred emails list here */}
        <p>Emails you've starred will appear here</p>
      </div>
    </div>
  )
}

export default Starred 