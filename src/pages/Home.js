import Landing from '..//sources/landing-image.png'
import Pointer from '..//sources/Mask group.png'
import Visa from '..//sources/Visa.png'
import Ticket from '..//sources/ticket.png'
import Hotel from '..//sources/hotel.png'
import Active from '..//sources/active-last.png'
import Stationary from '..//sources/stationary.png'
import Transportation from '..//sources/transportation.png'
import Station from '..//sources/station.png'
import Overlay from '..//sources/overlay.png'
import Bg from '..//sources/bg.png'
import OBg from '..//sources/over-bg.png'
import Line from '..//sources/Line.png'
import PLanning from '..//sources/planning.png'
import Experience from '..//sources/star.png'
import Blue from '../sources/blue-bg.png'
import Yellow from '../sources/yellow-obg.png'
import World from '..//sources/world.png'
import Turkmenistan from '..//sources/Turkmenistan.png'
import TurkmenistanBg from '../sources/Turkmenistan_bg.png'
import Vienna from '../sources/vienna.png'
import Footer from '../components/Footer'

export const Home = () => {
  return (

    <div className='Main-Wrapper '>

      <div className='Landing-Image-container relative '>
        <img src={Landing} alt="landing-image " />
        <div className='Landing-Image-text absolute  left-1/2 transform -translate-x-1/2 -translate-y-1/2  ' style={{ top: '40%', width: '650px' }} >
          <h1 className='text-white text-3xl  font-font-semibold grid justify-center' > LET US TAKE  TO YOUR  </h1>
          <h1 className=' text-white text-6xl mr-2 font-font-semibold grid justify-center '>DREAM DESTINATION</h1>
        </div>
        <button className='Landing-button flex h-[35px] w-36 items-center justify-center overflow-hidden bg-[#FFC61A] font-semibold rounded-lg  text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#FFC61A] hover:shadow-[#FFC61A]  absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' style={{ top: '55%' }} >
          Tours
        </button>
        <div className='Landing-pointer absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 ' style={{ top: '87%' }}>
          <img src={Pointer} alt="pointer" />
        </div>
      </div>
      {/* service section  */}
      <div className='Services-Section w-screen flex justify-center flex-col mt-24'>
        <div className='Service-text '>
          <h1 className='text-[#FFC61A] text-5xl font-semibold grid justify-center'>
            Services
          </h1>
          <p className='text-[#0D1680] mt-4 text-2xl grid justify-center '>
            Your destination dreams, our expert schemes.
          </p>
        </div>

        {/* service images */}
        <div className='Service-Images-Container grid grid-rows-2 grid-cols-2 mt-10  mx-36  px-10 gap-5 py-5 min-w-[900px] ' >
          <div className='relative group'>
            <img className='wrapper ' src={Visa} alt="Visa" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 '> Visa </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group'>
            <img className='' src={Ticket} alt="Ticket" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10 '> Ticket </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group'>
            <img className='' src={Hotel} alt="Hotel" />
            <p className='text-white text-3xl font-semibold absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer z-10'> Hotel </p>
            <img className='absolute left-0 top-0   hidden group-hover:block    ' src={Active} alt="" />
            <img className="absolute left-0 top-0   group-hover:hidden   " src={Stationary} alt="stationary" />
          </div>
          <div className='relative group '>
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
          <h1 className='text-[#FFC61A] text-5xl font-semibold grid justify-center '>
            Why choose us?
          </h1>
          <h2 className='text-[#0D1680] text-xl grid justify-center '>
            Your Journey, Our experience
          </h2>
        </div>

        <div className='img-wrapper relative mt-24' >
          <img className='' src={Station} alt="" />
          <img className='absolute top-0 left-0' src={Overlay} alt="" />
          {/* cards  */}
          <div className='cards-wrapper absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  w-[900px] h-[300px] flex justify-between px-5 '>
            <div className='card  flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className='absolute  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={OBg} alt="icon" />
                <img className=' ' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white text-xl font-semibold grid justify-center mt-2'> Expert Guidance </h1>
                <img className='mt-2' src={Line} alt="" />
                <p className='text-white w-56 mt-2'> From hidden gems to must-visit landmarks, we guide you with insider insights, ensuring each journey is unique and unforgettable</p>
              </div>

            </div>
            <div className='card  flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className='absolute  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={PLanning} alt="icon" />
                <img className=' ' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white text-xl font-semibold grid justify-center mt-2'> Seenles Planning </h1>
                <img className='mt-2' src={Line} alt="" />
                <p className='text-white w-64 mt-2 '> We take care of every detail, from flights and accommodations to activities and transfers. Your only task is to savor the adventure while we handle the logistics.</p>
              </div>

            </div>
            <div className='card   flex items-center flex-col'>
              <div className='card-icon relative  h-fit w-fit mt-4'>
                <img className='absolute  z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2' src={Experience} alt="icon" />
                <img className=' ' src={Bg} alt="icon-bg" />
              </div>
              <div className='card-text '>
                <h1 className='text-white text-xl font-semibold grid justify-center mt-2'> Tailored Experience </h1>
                <img className='mt-2' src={Line} alt="" />
                <p className='text-white w-56 mt-2'>We create personalized travel experiences, whether you crave relaxation or adventure, cultural immersion. Your journey, your way.</p>
              </div>

            </div>
          </div>


        </div>
      </div>
      {/* About us section  */}
      <div className='Information-wrapper grid grid-cols-2  gap-10 w-screen mt-20 px-36'>
        <div className='Information-text-wrapper '>
          <h1 className='text-[#FFC61A] text-4xl font-bold'>
            About Us
          </h1>
          <h1 className='text-[#0D1680] text-xl font-medium'> Your Journey, Our Expertise  </h1>
          <p className='mt-2 w-[550px]'> As a premier travel agency, we pride ourselves on crafting extraordinary experiences that transcend the ordinary. At Lebap Travel, we believe in the transformative power of travel and its ability to enrich lives. <br /><br />
            Our seasoned team of travel enthusiasts is dedicated to curating seamless, tailor-made adventures that cater to the unique preferences of each traveler. From the moment you entrust us with your travel aspirations, we embark on a mission to turn your dreams into reality. <br /> <br />
            With a commitment to excellence, Lebap Travel ensures that every detail of your journey is thoughtfully considered and expertly executed. From discovering off-the-beaten-path gems to indulging in luxurious accommodations, we guarantee an unparalleled travel experience that goes beyond expectations.</p>
          <div className='button-wrapper mt-10 ' >
            <button className=' flex h-[50px] w-40 items-center justify-center overflow-hidden bg-[#FFC61A] font-semibold rounded-lg  text-white shadow-2xl transition-all duration-300 hover:bg-white hover:text-[#FFC61A] hover:shadow-[#FFC61A]'>
              <span className=''>Read More</span>
            </button>
          </div>

        </div>
        <div className='Information-picture-wrapper relative '>
          <img className=' absolute right-0' src={World} alt="" />
          <div className='bookmark-wrapper absolute z-20  ' style={{ top: '-50px', right: '-40px' }}>
            <div className='bookmark  w-fit relative '>
              <img src={Blue} alt="" />
              <img className='absolute  z-10  top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/' src={Yellow} alt="" />
            </div>
          </div>


        </div>

      </div>
      {/*Turkmenistan  */}
      <div className='Turkmenistan-wrapper mt-28 relative '>
        <div className='Turkmenistan-image-wrapper relative'>
          <img src={Turkmenistan} alt="Turkmenistan" />
          <img src={TurkmenistanBg} alt="Turkmenistan Background" className="absolute inset-0" />
        </div>
        <div className='Turkeminstan-information-wrapper absolute z-10  top-[40%] left-1/2 transform -translate-x-1/2 -translate-y-1/2   '>
          <h1 className='text-4xl font-semibold text-white mt-2 grid justify-center'> Turkmenistan </h1>
          <h2 className=' grid justify-center mt-2 mb-5 text-white'>Spirit. Heritage. Horizon. </h2>
          <div className=''>
            <p className='text-white'>
              The Oguzabat company has been working directly in the field of tourism since 2017. Despite a rather short period of work in this area, we have already
              managed to establish ourselves as one of the most advanced and reliable tour operators in Turkmenistan. We have all the necessary resources,
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
      <div className='tours-wrapper border-2 mt-32 grid grid-cols-3 gap-10 pl-24 '>

        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
          <a href="#">
            <img class="rounded-t-lg" src={Vienna} alt="" />
          </a>
          <div className="p-5 flex flex-row items-center justify-between  ">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-700  ">Vienna <span className='ml-28'> 700$</span></h5>

          </div>
        </div>
        <div className="min-w-[200px] w-[300px] bg-gray-100 border border-gray-300 rounded-lg shadow">
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
