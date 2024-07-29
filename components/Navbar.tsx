import Image from 'next/image'
import React from 'react'

const Navbar = () => {
  return (
    <header>
        <div className='flex h-14 px-2 sm:px-10 fixed  z-20 w-full bg-white border border-b justify-between items-center'>
             <Image
              src={"/logo.png"}
              width={300}
              height={100}
              alt='logo'
              className='  w-24 h-14'
             />
           <div className=' hidden sm:flex gap-4'>
            <p>Anasayfa</p>
            <p>Kurumsal</p>
            <p>Ürünler</p>
            <p>Hizmetler</p>
            <p>Galeri</p>
           </div>
        </div>
    </header>
  )
}

export default Navbar