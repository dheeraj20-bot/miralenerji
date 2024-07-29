import React from 'react'

const Hero = () => {
  return (
    <main className='relative h-screen'>
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover">
            <source src={"/slayt.mp4"} type="video/mp4" />
          </video>

          <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
            <h1 className="text-5xl shadow-2xl font-bold">Miral Enerji</h1>
            <p className="text-lg mt-4">Yenilikçi ve Çevre Dostu Enerji Çözümleri</p>
          </div>
    </main>
  )
}

export default Hero