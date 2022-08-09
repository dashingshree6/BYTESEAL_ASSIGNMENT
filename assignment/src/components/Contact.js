import React from 'react';

const Contact = () => {
    return (
        <div className='flex justify-center'>
            <div className="flex flex-col justify-around p-4 border-2 border-gray-600 dark:border-gray-400 md:w-6/12 mt-10 rounded-xl">
              <h2 className='text-center bg-gray-600 dark:bg-gray-200 text-white dark:text-gray-600 mb-1'>Contact Us</h2>
              <input type='text' placeholder='Name' className='border-2 p-1 mb-1'/>
              <input type='text' placeholder='Email' className='border-2 p-1 mb-1'/>
              <input type='text' placeholder='Phone' className='border-2 p-1 mb-1'/>
              <input type='text' placeholder='Message' className='border-2 p-1 mb-1'/>
              <button className='bg-gray-600 dark:bg-gray-200 text-white dark:text-gray-600 rounded-xl'>Send</button>
            </div>
        </div>
    )
}
export default Contact;