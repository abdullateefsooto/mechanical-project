import { IconBattery1, IconCar, IconCarCrane, IconCheckbox, IconChevronRight, IconDroplet, IconEngine, IconGasStation, IconTool  } from '@tabler/icons-react'
import auto from '../assets/image/car-engine-new1.jpg'


const home = () => {
  return (
    <div>
        <div>

            {/* hero banner */}
            <div className='bg-[url(./assets/image/car-engine-new1.jpg)]  bg-no-repeat bg-center flex h-dvh rounded-xl'>
              <div>
                <div>
                  <p className='text-2xl uppercase text-white font-serif boder'>Welcome to Ar-Rahman Sooto Autocare</p>
                  <p className=' capitalize text-xl ml-28 text-white font-serif boder'>we give you top-notch</p>
                </div>
              </div>
              <div className=' flex justify-end items-end'>
                <div>
                <p  className='text-2xl ml-32 uppercase text-white font-serif boder'>we make your car last longer</p>
                <p className='text-xl capitalize text-white font-serif boder'>using premium lubricants, geniue part and our expert mechanics.</p>
                </div>
              </div>
            </div>



              <div className='flex justify-center items-center gap-8 bg-blue-300 mt-10 px-16 py-8' >
                <p className='text-4xl font-serif'>Schedule a Diagnostics Appointment for your Vehicle</p>
                <a href='#' className='bg-blue-700 px-4 py-2 text-2xl hover: rounded-md font-serif capitalize'>book appointment</a>
              </div>
              {/* what we do */}
              <div>
                <h1 className='uppercase text-center text-3xl mt-10  font-serif boder'>what we do</h1>
                <p className='text-center font-serif mt-6'>We offer a full range of garage services to vehicle owners located in Nigeria.Our professinals know how to handle a wide range of car services.</p>
              </div>

              <div className="flex m-8 gap-10">
                  <div className="">
                  <div className='ml-64'><IconTool stroke={1.75} className='w-24 h-24'/></div>
                    <h1 className='text-center text-blue-700 font-semibold'>
                    VEHICLE MAINTENANCE & REPAIR</h1>
                    <p className=' text-center ml-3.5'></p>
                    <p className='mt-5'>
                    Ensuring your vehicle runs smoothly and efficiently is our top priority. Experience dealership-grade service with the warmth and attention of a trusted local mechanic. The best performance of your car is just a visit away
                    </p>
                  </div>
                  <div className="">
                    <div className='ml-64'><IconCarCrane stroke={1.75} className='w-24 h-24 '/></div>
                    <h1 className="text-center text-blue-700 font-semibold">
                    COLLISSION REPAIR
                    </h1>
                    <p className='mt-5'>
                    Utilizing the latest techniques and state-of-the-art equipment, we meticulously restore your vehicle to its original condition, ensuring safety and preserving its value. Trust us to make your vehicle look and drive like the accident never happened.
                    </p>
                  </div>
              </div>

                  {/* vehicle serviced */}
              <div className='flex flex-col-2'>
                <div><img className=' w-10/12 rounded-3xl mt-10' src={auto} alt="" /></div>
                <div className=' mr-24'>
                  <h2 className='text-center capitalize text-blue-900 font-bold text-2xl'>vehicles serviced</h2>
                  <h4 className='text-center text-xl'>
                    We provide top notch maintenance service for all types of vehicles.
                  </h4>
                  <h4 className='text-center '>
                    We are experienced in serviving and repair of the following makes:
                  </h4>
                 <div className='grid grid-cols-3 gap-5 mt-5 text-2xl capitalize'>
                  <div className='mr-5'>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' />toyota</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> ford</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> honda</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> bmw</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mercedes benz</li>
                    </ul>
                  </div>
                  <div className='mr-5'>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> lexus</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> range rover</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> chevrolet</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> hyundai</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mazda</li>
                    </ul>
                  </div>
                  <div>
                    <ul>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> mini cooper</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> volkswagen</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> bentley</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> kia</li>
                      <li><IconCheckbox stroke={2} className='text-blue-900 icon' /> nissan</li>
                    </ul>
                  </div>
                 </div>

                </div>
              </div>

                  {/*rendered service*/}
              <div>
                  <h1 className='capitalize text-blue-700 text-2xl font-bold text-center'>rendered services</h1>
                  <div>
                    <p className='text-xl text-center'>We can help you with everything from an engine change to an oil change.</p>
                    <p className=' text-lg text-center'>We can handle any problem on both foreign and domestic vehicles.</p>
                  </div>
                <div className='flex flex-col mt-10'>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>engine diagnostics</h1>
                    <div className='flex '>
                      {/* <IconEngine className='h-24 w-64' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 24 24"><g fill="none" stroke="#140c45" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"><path stroke-dasharray="48" stroke-dashoffset="48" d="M11 9h6v10h-6.5l-2 -2h-2.5v-6.5l1.5 -1.5Z"><animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"/></path><path fill="#140c45" fill-opacity="0" d="M17 13h0v-3h0v8h0v-3h0z" opacity="0"><animate fill="freeze" attributeName="d" begin="0.6s" dur="0.2s" values="M17 13h0v-3h0v8h0v-3h0z;M17 13h4v-3h1v8h-1v-3h-4z"/><set fill="freeze" attributeName="fill-opacity" begin="0.8s" to="1"/><set fill="freeze" attributeName="opacity" begin="0.6s" to="1"/></path><path d="M6 14h0M6 11v6" opacity="0"><animate fill="freeze" attributeName="d" begin="0.8s" dur="0.2s" values="M6 14h0M6 11v6;M6 14h-4M2 11v6"/><set fill="freeze" attributeName="opacity" begin="0.8s" to="1"/></path><path d="M11 9v0M8 9h6" opacity="0"><animate fill="freeze" attributeName="d" begin="1s" dur="0.2s" values="M11 9v0M8 9h6;M11 9v-4M8 5h6"/><set fill="freeze" attributeName="opacity" begin="1s" to="1"/></path></g></svg>
                      <p className='mt-8 ml-5'>Our team of professionals are trained to pinpoint and address any engine-related issues, ensuring your vehicle is always road-ready</p>
                    </div> 
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>oil and filter</h1>
                    <div className='flex'>
                      {/* <IconDroplet className='h-24 w-64' /> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#140c45" d="M22 12.5s2 2.17 2 3.5a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.33 2-3.5 2-3.5M6 6h4a1 1 0 0 1 1 1a1 1 0 0 1-1 1H9v2h2c.74 0 1.39.4 1.73 1l6.51-3.76l3.26 1.89c.5.27.64.87.37 1.37c-.28.47-.87.64-1.37.36l-2.1-1.21l-3.65 6.32c-.34.61-1 1.03-1.75 1.03H5a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h2V8H6a1 1 0 0 1-1-1a1 1 0 0 1 1-1m-1 6v3h9l2.06-3.57l-3.46 2l-.91-1.43zM.38 9.21L2.09 7.5c.41-.39 1.02-.39 1.41 0s.39 1 0 1.41l-1.71 1.71c-.39.38-1.02.38-1.41 0C0 10.23 0 9.6.38 9.21"/></svg>
                      <p className='mt-5'>At Ar-Rahman Sooto Autocare, we provide high-quality oil and filter changes that not only protect your engine from wear and tear but also enhance its efficiency, ensuring your car operates at its optimal potential.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>transmission service</h1>
                    <div className="flex">
                      <IconTool className='h-24 w-64'/>
                      <p className='mt-5'>Whether manual or automatic, the transmission is the heart of vehicle performance. Our transmission services are tailored to maintain smooth gear shifts and longevity, making sure you enjoy a seamless driving experience</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>air conditional</h1>
                    <div className='flex'>
                      {/* <IconGasStation className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#140c45" d="M6.59.66c2.34-1.81 4.88.4 5.45 3.84c.43 0 .85.12 1.23.34c.52-.6.98-1.42.8-2.34c-.42-2.15 1.99-3.89 4.28-.92c1.81 2.34-.4 4.88-3.85 5.45c0 .43-.11.86-.34 1.24c.6.51 1.42.97 2.34.79c2.13-.42 3.88 1.98.91 4.28c-2.34 1.81-4.88-.4-5.45-3.84c-.43 0-.85-.13-1.22-.35c-.52.6-.99 1.43-.81 2.35c.42 2.14-1.99 3.89-4.28.92c-1.82-2.35.4-4.89 3.85-5.45c0-.43.13-.85.35-1.23c-.6-.51-1.42-.98-2.35-.8c-2.13.42-3.88-1.98-.91-4.28M5 16h2a2 2 0 0 1 2 2v6H7v-2H5v2H3v-6a2 2 0 0 1 2-2m0 2v2h2v-2zm7.93-2H15l-2.93 8H10zM18 16h3v2h-3v4h3v2h-3a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2"/></svg>
                      <p className='mt-5'>No matter the season, Ar-Rahman Sooto Automobile ensures a comfortable drive. Our experts specialize in AC system repairs, making sure your vehicle interiror remains cool</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>battery testing and replacement</h1>
                    <div className="flex">
                      {/* <IconBattery1 className='h-24 w-64'/> */}
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#140c45" d="M4 3v3H1v14h22V6h-3V3h-6v3h-4V3zM3 8h18v10H3zm12 2v2h-2v2h2v2h2v-2h2v-2h-2v-2zM5 12v2h6v-2z"/></svg>
                      <p className='mt-5'>Do not get caught off-guard. At Ar-Rahman Sooto Automobile, our reliable battery diagnostics and replacement services guarantee you are always powered up, ready for any journey ahead.</p>
                    </div>
                  </div>
                  <div className="">
                    <h1 className='capitalize text-blue-500 text-center text-xl'>comprehensive vehicle inspection</h1>
                    <div className='flex'>
                      <IconCar className='h-24 w-64'/>
                      <p className='mt-5'>With meticulous attention to detail, we assess every aspect of your vehicle to ensure it runs smoothly and safely, giving you peace of mind on the road.</p>
                    </div>
                  </div>
                </div>
              </div>
              
                  {/*why choose us */}
              <div>
                <div>
                  <h1 className='capitalize font-bold text-2xl text-blue-800 text-center'>why choose us</h1>
                </div>
                <div>
                    <div className='flex'>
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        At Ar-Rahman Sooto Automobile, we are passionate about revolutionizing
                        the automotive industry by delivering top-notch solutions tailored to
                        your needs. Here's what sets us apart:
                      </p>
                    </div>
                    <div className='flex'>
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        With years of experience in the automotive field, our team of
                        certified professionals is dedicated to providing exceptional quality
                        and innovative solutions. Whether it's maintenance, repairs, or custom
                        builds, we have the skills and knowledge to exceed your expectations.
                      </p>
                    </div>
                    <div className='flex'>
                      {/* <IconCheckbox  className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <IconChevronRight className='text-blue-900 h-10 w-10 mt-5 mr-2' />
                      <p className='mt-5'>
                        Your satisfaction is our priority. We pride ourselves on delivering
                        personalized service, clear communication, and timely solutions. From
                        the moment you step through our doors, you'll experience a seamless
                        and hassle-free process.
                      </p>
                    </div>
                    <div className='flex'>
                    <i className=" fa-whatsapp "></i>
                      <IconChevronRight className='text-blue-900 h-12 w-12 mt-5 mr-2' />
                      {/* <IconCheckbox stroke={2} className='text-blue-900 mt-5 mr-2 icon' /> */}
                      <p className='mt-5'>
                        Choose Ar-Rahman Sooto Automobile, Your Partner in Automotive
                        Excellence. Let us keep you on the road with confidence. Contact us
                        today to experience automotive solutions designed with you in mind!!!
                      </p>
                    </div>
                </div>
              </div>
              
              


        </div>
    </div>
  )
}

export default home