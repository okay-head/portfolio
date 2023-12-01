import React from 'react'

export default function Popup() {
  return (
    <article
      id='form-popup'
      className='absolute right-2 translate-y-4 opacity-0 -top-16 lg:-top-20 transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:max-w-lg'
    >
      <div className='bg-white py-2 md:py-3 px-4'>
        <div className='sm:flex mx-auto w-max items-center'>
          <div className='mx-auto flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#1bc95b] p-1'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth='3'
              stroke='currentColor'
              aria-hidden='true'
              className='oc se axy'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M4.5 12.75l6 6 9-13.5'
              ></path>
            </svg>
          </div>
          <div className='text-center ml-2'>
            <h3
              className='text-sm md:text-base font-semibold leading-6 text-gray-900'
              id='modal-title'
            >
              Form submitted!
            </h3>
            <div className='mt-2'>
              <p className='text-sm text-gray-500 hidden'>
                Are you sure you want to deactivate your account? All of your
                data will be permanently removed. This action cannot be undone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
