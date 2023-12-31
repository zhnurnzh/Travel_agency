import React from 'react';
import Navbar from './/components/Navbar'
import Landing from './/sources/landing-image.png'
import Pointer from './/sources/Mask group.png'
import Visa from './/sources/Visa.png'
import Ticket from './/sources/ticket.png'
import Hotel from './/sources/hotel.png'
import Active from './/sources/active-last.png'
import Stationary from './/sources/stationary.png'
import Transportation from './/sources/transportation.png'
import Station from './/sources/station.png'
import Overlay from './/sources/overlay.png'
import Bg from './/sources/bg.png'
import OBg from './/sources/over-bg.png'
import Line from './/sources/Line.png'
import PLanning from './/sources/planning.png'
import Experience from './/sources/star.png'
import Blue from './/sources/blue-bg.png'
import Yellow from './/sources/yellow-obg.png'
import World from './/sources/world.png'
import Turkmenistan from './/sources/Turkmenistan.png'
import TurkmenistanBg from './/sources/Turkmenistan_bg.png'
import Vienna from './/sources/vienna.png'
import Footer from './components/Footer'

function App() {
  return (

    <div className='Main-Wrapper '>
      <Navbar />
      <div className='Landing-Image-container relative w-screen '>
        <img className='w-full' src={Landing} alt="landing-image " />
        <div className='Landing-Image-text absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2  ' style={{ top: '40%', width: '650px' }} >
          <h1 className='text-white md:text-3xl sm:text-2xl  lg:tetx-2xl text-xl font-semibold lg:font-black grid justify-center ' > LET US TAKE  TO YOUR  </h1>
          <h1 className=' text-white md:text-6xl sm:text-4xl lg:text-6xl  text-2xl font-bold mr-2 lg:font-black grid justify-center '>DREAM DESTINATION</h1>
        </div>
        <button className='Landing-button mt-3 flex md:h-[35px] md:w-36 w-24 h-[22px] items-center justify-center overflow-hidden bg-[#FFC61A] font-semibold rounded-lg  text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#FFC61A] hover:shadow-[#FFC61A]  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' style={{ top: '55%' }} >
          Tours
        </button>
        <div className='Landing-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-fit w-[30px]' style={{ top: '87%' }}>
          <img className='w-full' src={Pointer} alt="pointer" />
        </div>
      </div>
      {/* service section  */}
      <div className='Services-Section w-fit mx-auto flex justify-center flex-col mt-24'>
        <div className='Service-text '>
          <h1 className='text-[#FFC61A] text-5xl  font-semibold grid justify-center'>
            Services
          </h1>
          <p className='text-[#0D1680] mt-4 lg:text-2xl  md:text-xl sm:text-lg grid justify-center '>
            Your destination dreams, our expert schemes.
          </p>
        </div>

        {/* service images */}
        <div className='Service-Images-Container grid  w-fit lg:grid-rows-2 lg:grid-cols-2 mt-10 mx-auto  gap-5 py-5 sm:gird-cols-1 min-w-[350px] ' >
          <div className='relative group w-fit '>
            <img className='wrapper ' src={Visa} alt="Visa" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 '> Visa </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group w-fit'>
            <img className='' src={Ticket} alt="Ticket" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 '> Ticket </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group w-fit'>
            <img className='' src={Hotel} alt="Hotel" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10'> Hotel </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group w-fit '>
            <img className='' src={Transportation} alt="Transportation" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 '> Transport </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
        </div>
      </div>
      {/* why choose us */}

      <div className='Explanation-wrapper'>
        <div className='text-wrapper mt-32 '>
          <h1 className='text-[#FFC61A] md:text-5xl text-3xl font-semibold grid justify-center '>
            Why choose us?
          </h1>
          <h2 className='text-[#0D1680] md:text-xl text-xl grid justify-center mt-3 '>
            Your Journey, Our experience
          </h2>
        </div>

        <div className='img-wrapper relative mt-24 md:block flex justify-center' >
          <img className='w-[600px] h-[1000px] md:w-full md:h-auto object-fill' src={Station} alt="" />
          <img className='absolute md:top-0 md:left-0  md:w-full md:h-auto w-[600px] h-[1000px] object-fill' src={Overlay} alt="" />
          {/* cards  */}
          <div className='cards-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2   grid justify-between  md:gap-64 lg:gap-96 md:grid-cols-3 lg:px-5  grid-cols-1 '>
            <div className='card  flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className='absolute md:w-[20px] min-w-[40px]  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={OBg} alt="icon" />
                <img className='md:w-[35px] min-w-[70px]  ' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white md:text-xl font-semibold grid justify-center md:mt-2'> Expert Guidance </h1>
                <img className='mt-2' src={Line} alt="" />
                <p className='text-white  md:w-56 mt-2'> From hidden gems to must-visit landmarks, we guide you with insider insights, ensuring each journey is unique and unforgettable</p>
              </div>

            </div>
            <div className='card  flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className=' md:w-[20px] min-w-[40px] absolute  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={PLanning} alt="icon" />
                <img className=' md:w-[35px] min-w-[70px]' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white   md:text-xl font-semibold grid justify-center mt-2'> Seemles Planning </h1>
                <img className='mt-2' src={Line} alt="" />
                <p className='text-white md:w-56 mt-2 '> We take care of every detail, from flights and accommodations to activities and transfers. Your only task is to savor the adventure while we handle the logistics.</p>
              </div>

            </div>
            <div className='card   flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className='md:w-[20px] min-w-[40px] absolute  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Experience} alt="icon" />
                <img className='  md:w-[35px] min-w-[70px] ' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white md:text-xl   font-semibold grid justify-center mt-2'> Tailored Experience </h1>
                <img className='mt-2 ' src={Line} alt="" />
                <p className='text-white  md:w-56 mt-2'>We create personalized travel experiences, whether you crave relaxation or adventure, cultural immersion. Your journey, your way.</p>
              </div>

            </div>
          </div>


        </div>
      </div>
      {/* About us section  */}
      <div className='Information-wrapper grid md:grid-cols-2 xl:pl-60  lg:pl-32 md:pl-20 lg:gap-0 w-screen mt-20 xl:px-36'>
        <div className='Information-text-wrapper  md:w-[350px] lg:w-[400px] xl:w-[500px] pl-24 w-[300px] md:pl-0 '>
          <h1 className='text-[#FFC61A] text-4xl font-bold'>
            About Us
          </h1>
          <h1 className='text-[#0D1680] text-xl font-medium'> Your Journey, Our Expertise  </h1>
          <p className='mt-2 '> As a premier travel agency, we pride ourselves on crafting extraordinary experiences that transcend the ordinary. At Lebap Travel, we believe in the transformative power of travel and its ability to enrich lives. <br /><br />
            Our seasoned team of travel enthusiasts is dedicated to curating seamless, tailor-made adventures that cater to the unique preferences of each traveler. From the moment you entrust us with your travel aspirations, we embark on a mission to turn your dreams into reality. <br /> <br />
            With a commitment to excellence, Lebap Travel ensures that every detail of your journey is thoughtfully considered and expertly executed. From discovering off-the-beaten-path gems to indulging in luxurious accommodations, we guarantee an unparalleled travel experience that goes beyond expectations.</p>
          <div className='button-wrapper mt-10 ' >
            <button className=' flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#FFC61A] font-semibold rounded-lg  text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#FFC61A] hover:shadow-[#FFC61A]'>
              <span className=''>Read More</span>
            </button>
          </div>
        </div>
        <div className='Information-picture-wrapper relative md:w-[350px] lg:w-[400px]  xl:w-[450px] lg:h-auto lg:ml-2 lg:mt-20 md:block hidden '>
          <img className=' absolute right-0 w-full' src={World} alt="" />
          <div className='bookmark-wrapper absolute z-20  ' style={{ top: '-50px', right: '-40px' }}>
            <div className='bookmark  w-fit relative md:hidden  '>
              <img className='' src={Blue} alt="" />
              <img className='absolute  z-10  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/ md:w-1/2' src={Yellow} alt="" />
            </div>
          </div>


        </div>

      </div>
      {/*Turkmenistan  */}
      <div className='Turkmenistan-wrapper mt-28 relative md:block   '>
        <div className='Turkmenistan-image-wrapper relative'>
          <img className="w-[600px] h-[1000px] md:h-auto md:w-full object-fill " src={Turkmenistan} alt="Turkmenistan" />
          <img src={TurkmenistanBg} alt="Turkmenistan Background" className="absolute inset-0 w-[600px] h-[1000px] md:w-full md:h-auto object-fill " />
        </div>
        <div className='Turkeminstan-information-wrapper absolute z-10 md:mt-10 mt-16  top-[40%]  left-1/2 transform -translate-x-1/2 -translate-y-1/2   '>
          <h1 className='md:text-4xl text-2xl font-semibold text-white mt-2 grid justify-center'> Turkmenistan </h1>
          <h2 className=' grid justify-center mt-2 mb-5 text-white'>Spirit. Heritage. Horizon. </h2>
          <div className=' w-[200px] md:w-auto'>
            <p className='text-white '>
              The Oguzabat company has been working directly in the field of tourism since 2017. Despite a rather short period of work in this area, we have already
              managed to establish ourselves as one of the most advanced and reliable tour operators in Turkmenistan. We have all the necessary esources,
              and we also have at our disposal qualified specialists with great professional knowledge, long experience in the field of tourism and services.
              We specialize in organizing tourist receptions, preparing group and individual tours, combined tours, booking hotels and air tickets.
            </p>
          </div>
          <div className='grid justify-center mt-14'>
            <button className='flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#FFC61A] font-semibold rounded-lg  text-white  ' >
              Read More
            </button>
          </div>

        </div>
      </div>
      {/*tours */}

      <div className='tours-wrapper  lg:mx-60  mt-32 grid md:grid-cols-3 gap-10  grid-cols-1 '>

        <div className="min-w-[200px] w-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>
          </div>
        </div>
        <div className="min-w-[200px] w-fit mx-auto  bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px]  mx-auto w-fit bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-fit mx-auto bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>

      </div>
      <Footer />
    </div>







  )
}

export default App;
