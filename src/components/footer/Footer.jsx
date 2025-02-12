import React from 'react'
import "./Footer.css"
import { FaInstagram } from "react-icons/fa";
const Footer = () => {
  const footer = ["About us", "Team", "What we Do", "Contact"]
  const footer1 = ["Projects", "Events", "Donate", "Blog"]
  const footer2 = ["Business Marketing", "Business Marketing", "Live Chat", "Unlimited Support"]
  const footer3 = ["Facebook", "Instagram", "Twitter", "Linkdin "]
  return (
    <div className='footer bg-linear-to-bl from-emerald-500 to-green-200 pt-9 pb-9'>
      <div className='container flex   gap-4 justify-center  footer__box'>
        <div className="flex flex-col md:flex-row gap-5 text-white footer__wrapper">
          <ul className="footer__collection w-[full] md:w-1/4 leading-normal flex flex-col gap-7 footer__p">
            <p className='text-xl font-semibold'>Company Info</p>
            {
              footer1?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
            }
          </ul>
          <ul className="footer__collection w-[full] md:w-1/4 leading-normal flex flex-col gap-7 text-3">
            <p className='text-xl font-semibold'>Legal</p>
            {
              footer?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
            }
          </ul>
          <ul className="footer__collection w-[full] md:w-1/4 flex-end leading-normal flex flex-col gap-7 text-3">
            <p className='text-xl font-semibold'>Features</p>
            {
              footer2?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
            }
          </ul>
          <ul className="footer__collection w-[full] md:w-1/4 flex-end leading-normal flex flex-col gap-7 text-3">
            <p className='text-xl font-semibold'>Resources</p>
            {
              footer3?.map((el, index) => (<li key={index} className="footer__item text-sm"><a href="#">{el}</a></li>))
            }
          </ul>
        </div>
        <div className=" flex flex-col gap-3">
          <p className='footer__title text-[38px] font-medium text-white'>Get In Touch</p>
          <div className='w-[300px] h-[64px] flex text-slate-200 border border-indigo-200/50 rounded-md footer__input'>
            <input className='outline-none pl-1.5 text-white' type="text" placeholder='   Email...' />
            <button className='ml-[88px] w-[120px] h-full text-[16px] font-medium rounded-md text-slate-500 bg-slate-200 hover:bg-[#a8ceec] hover:text-blonde'>Send it</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Footer