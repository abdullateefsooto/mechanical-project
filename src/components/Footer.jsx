// import { IconBrandWhatsapp, IconCarCrane, IconLocation, IconCheck, IconMail, IconPhone } from '@tabler/icons-react'
// const Footer = () => {
//   return (
//     <div className='mt-auto '>
//       <div className='bg-neutral-500 rounded-md px-8 py-20'>
//       <div className="grid grid-cols-3 flex-wrap gap-5 border-b-2 ">
//         <div>
//           <h3 className="font-serif capitalize text-xl">hotlines</h3>
//           <div className="flex">
//             <IconBrandWhatsapp stroke={1} className=" text-neutral-300 h-20 w-20 " />
//             <div className="mt-3">
//               <p className="capitalize text-white">mobile: <span>08066244696</span></p>
//               <p className="capitalize text-white">assistance: <span>07063470681</span></p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-serif capitalize">Ar-Rahman Sooto Autocare</h3>
//           <div className="flex">
//             <IconLocation stroke={1} className=" text-neutral-300  h-20 w-40 "/>
//             <div className="capitalize text-white ">
//               <p>
//                 klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos
//                 state. inside NNPC Petrol station
//               </p>
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="text-xl font-serif capitalize">24/7 assistance</h3>
//           <div className="flex gap-3">
//             <IconCarCrane stroke={1} className="h-20 w-60  text-neutral-300" />
//             <div className=" text-white  ">
//               <p>
//                 Each customer has an account managers that will respond to your vehicle needs during and outside office hours.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>


//       <div className='grid grid-cols-4 gap-32'>
//         <div >
//           <h2 className="uppercase font-serif">about us</h2>
//            <p className=' border-b-2 w-8 mt-2 mb-4 text-gray-900'></p>
//           <p className='capitalize text-white'>
//             klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos state. inside NNPC Petrol station
//           </p>
//           <div className=' mt-5 text-white'>
//             <p className='capitalize'>mobile: <span>08066244696</span></p>
//             <p className='capitalize'>assistance: <span>07063470681</span></p>
//           </div>

//           <div className='flex gap-2 mt-3'>
//             <a href="http://wa.me/+2348033445250" target="_blank" rel="noopener noreferrer"><IconBrandWhatsapp  className=' border-2 border-black rounded-md px-4 py-2 w-16 h-10 text-white hover:border-white '/></a>
//             <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arramansooto01@gmail.com" target="_blank" rel="noopener noreferrer"><IconMail className=' border-2 border-black rounded-md px-4 py-2 w-16 h-10 text-white hover:border-white ' /></a>
//             <a href="tel:+2348033445250"><IconPhone className=' border-2 border-black rounded-md px-4 py-2 w-16 h-10 text-white hover:border-white '/></a>
//           </div>

//         </div>
        
//         <div>
//           <h2  className="uppercase font-serif">our services</h2>
//            <p className=' border-b-2 w-8 mt-2  mb-4 text-gray-600'></p>
//             <div>
//               <ul  className="capitalize font-serif text-white ">
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   engine diagnosis</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   air conditioning</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   brake repair</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   lube, oil and filters</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   battery testing and replacement</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   transmission services</li></a>
//                 <a href="#"><li className='flex'><IconCheck stroke={1.5} />   other car services</li></a>
//               </ul>
//             </div>
//         </div>
//         <div>
//           <h2 className="uppercase font-serif">popular tags</h2>
//            <p className=' border-b-2 w-8 mt-2 mb-4 text-gray-900'></p>
//           <div>
//             <div className="flex gap-1">
//               <a href=""><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>diagnosis</p></a>
//               <a href=""><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>engine</p></a>
              
//             </div>
//             <div className="flex gap-1 mt-10">
//               <a href="#"><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>suspension</p></a>
//               <a href="#"><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>brake</p></a>
//             </div>
//             <div className="flex gap-1 mt-10">
//               <a href="#"><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>transmission</p></a>
//               <a href="#"><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>filter</p></a>
//               <a href="#"><p className='border-2 capitalize hover:border-gray-300 border-black rounded-md px-4 py-2'>oil</p></a>
//             </div>
//           </div>
//         </div>
//         <div>
//           <h2 className="uppercase font-serif">hours</h2>
//            <p className=' border-b-2 w-8 mt-2 mb-4 text-gray-900'></p>
//           <div className='capitalize font-serif text-white'>
//             <a href="#"><p>monday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>tuesday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>wednesday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>thursday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>friday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>saturday: <span>8:00am - 7:00pm</span></p></a>
//             <a href="#"><p>sunday: closed</p></a>
//           </div>
//         </div>
//       </div>
//     </div>
//       <div>
//         <p className='capitalize font-serif text-center text-xl px-2 py-6'>&copy; copyright 2025 ar-raman sooto autocare</p>
//       </div>
//     </div>
//   )
// }

// export default Footer


import "../assets/style/footer.css"
import { IconBrandWhatsapp, IconCarCrane, IconLocation, IconCheck, IconMail, IconPhone } from '@tabler/icons-react'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-hotlines">
            <h3 className="footer-heading">hotlines</h3>
            <div className="footer-flex">
              <IconBrandWhatsapp stroke={1} className="footer-icon" />
              <div className="footer-hotline-text">
                <p className="footer-text">mobile: <span>08066244696</span></p>
                <p className="footer-text">assistance: <span>07063470681</span></p>
              </div>
            </div>
          </div>

          <div className="footer-address">
            <h3 className="footer-heading">Ar-Rahman Sooto Autocare</h3>
            <div className="footer-flex">
              <IconLocation stroke={1} className="footer-icon-wide" />
              <div className="footer-text">
                <p>
                  klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos
                  state. inside NNPC Petrol station
                </p>
              </div>
            </div>
          </div>

          <div className="footer-assistance">
            <h3 className="footer-heading">24/7 assistance</h3>
            <div className="footer-flex gap">
              <IconCarCrane stroke={1} className="footer-icon-crane" />
              <div className="footer-text">
                <p>
                  Each customer has an account managers that will respond to your vehicle needs during and outside office hours.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Grid */}
        <div className="footer-middle">
          {/* About Us */}
          <div className="footer-about">
            <h2 className="footer-subheading">about us</h2>
            <p className="footer-divider"></p>
            <p className="footer-text">
              klm. 5 Lasu isheri road Alhaji Ede bus stop, Igando lagos state. inside NNPC Petrol station
            </p>
            <div className="footer-hotline-text">
              <p className="footer-text">mobile: <span>08066244696</span></p>
              <p className="footer-text">assistance: <span>07063470681</span></p>
            </div>

            <div className="footer-social">
              <a href="http://wa.me/+2348033445250" target="_blank" rel="noopener noreferrer">
                <IconBrandWhatsapp className="footer-social-icon" />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=arramansooto01@gmail.com" target="_blank" rel="noopener noreferrer">
                <IconMail className="footer-social-icon" />
              </a>
              <a href="tel:+2348033445250">
                <IconPhone className="footer-social-icon" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-services">
            <h2 className="footer-subheading">our services</h2>
            <p className="footer-divider"></p>
            <ul className="footer-list">
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> engine diagnosis</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> air conditioning</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> brake repair</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> lube, oil and filters</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> battery testing and replacement</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> transmission services</li></a>
              <a href="#"><li className="footer-list-item"><IconCheck stroke={1.5} /> other car services</li></a>
            </ul>
          </div>

          {/* Tags */}
          <div className="footer-tags">
            <h2 className="footer-subheading">popular tags</h2>
            <p className="footer-divider"></p>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">diagnosis</p></a>
              <a href="#"><p className="footer-tag">engine</p></a>
            </div>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">suspension</p></a>
              <a href="#"><p className="footer-tag">brake</p></a>
            </div>
            <div className="footer-tags-container">
              <a href="#"><p className="footer-tag">transmission</p></a>
              <a href="#"><p className="footer-tag">filter</p></a>
              <a href="#"><p className="footer-tag">oil</p></a>
            </div>
          </div>

          {/* Hours */}
          <div className="footer-hours">
            <h2 className="footer-subheading">hours</h2>
            <p className="footer-divider"></p>
            <div className="footer-hours">
              <a href="#"><p className="footer-hours-list">monday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">tuesday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">wednesday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">thursday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">friday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">saturday: <span>8:00am - 7:00pm</span></p></a>
              <a href="#"><p className="footer-hours-list">sunday: closed</p></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>&copy; copyright 2025 ar-raman sooto autocare</p>
      </div>
    </div>
  )
}

export default Footer
