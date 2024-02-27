import React from 'react'
import Image from 'next/image'
const Footer = () => {
  return (
    <footer className='footer border border-top-[#33353F] border-l-transparent border-r-transparent text-white'>
        <div className='container p-12 flex justify-between items-center'>
            <span>
            <Image 
                    alt='cat'
                    src="/img/cattt.gif" 
                    className="rounded-lg"
                    width={50}
                    height={15}>
                </Image>
            </span>
            <p className='text-slate-700 pl-5'>Copyright 2024 Thanachote Hemchayart.All Rights Reserved</p>
        </div>
    </footer>
  )
}

export default Footer