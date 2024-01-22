import React from 'react'


export default function Sidebar() {

  return (
    <div className='flex flex-col bg-VividRed w-40 h-screen mt-3 pt-3 text-white font-bold px-3 text-lg md:h-[950px] md:w-full md:rounded-xl md:mt-5 md:text-xl'>
        <div className='mx-auto mt-6 mb-6'>
          <img src='./assets/logoBC.svg' alt='logo'/>
        </div>
        <div className='flex flex-col mx-auto space-y-3'>
          <div className='flex'>
            <img src='./assets/home.svg' alt='home' className='mr-2'/>
            Dashboard
          </div>
          <div className='flex'>
            <img src='./assets/offer.svg' alt='offer' className='mr-2'/>
            Offer
          </div>
          <div className='flex'>
            <img src='./assets/promo.svg' alt='promo' className='mr-2'/>
            Promo
          </div>
          <div className='flex'>
            <img src='./assets/news.svg' alt='news' className='mr-2'/>
            News
          </div>
          <div className='flex'>
            <img src='./assets/gallery.svg' alt='gallery' className='mr-2'/>
            Gallery
          </div>
          <div className='flex'>
            <img src='./assets/order.svg' alt='order' className='mr-2'/>
            Order
          </div>
          <div className='flex'>
            <img src='./assets/ticket.svg' alt='ticket' className='mr-2'/>
            Ticket
          </div>
          <div className='flex md:pt-96'>
            <img src='./assets/exit.svg' alt='exit' className='mr-2'/>
            Keluar
          </div>
        </div>
        
    </div>
  )
}
