import Logo from "./assets/Jadoo-travel-logo.svg"
import pic1 from "./assets/pic1.jpg";
import btn from "./assets/btn.svg";

import weather from "./assets/weather.svg";
import Flight from "./assets/Best-flights.svg";
import Events from "./assets/events.jpg";
import Setting from "./assets/setting.svg";

// Top Selling
import London from "./assets/London.jpg";
import Europe from "./assets/Europe Visit.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import Rome from "./assets/Rome.jpg";
// Trip to Grace
import greece from "./assets/Trip-to-greece.png";
import rome from "./assets/Trip-to-rome.png";

// Choose Destinations 
import reachairport from "./assets/Icon-reachairport.svg";
import chosedestination from "./assets/Icon-chosedestination.svg";
import makepayment from "./assets/Icon-makepayment.svg";

// Choose Destinations div potion 
import alitalia from "./assets/Logo-alitalia.png";
import avon from "./assets/Logo-avon.png";
import expedia from "./assets/Logo-expedia.png";
import jetstar from "./assets/Logo-jetstar.png";
import qantas from "./assets/Logo-qantas.png";

// 
import Inbox from "./assets/Icon-inbox.svg"; 

const App = () => {
  return (
    <>
      {/* Nevigation Bar  */}
      <div class="w-screen h-20 flex ">
        <div class="w-1/2 h-full flex items-center">
          <img src={Logo} alt="Jadoo Logo" class="px-8" />
        </div>
        <div class="w-1/2 h-full flex items-center gap-5">
          <a class="">Destinations</a>
          <a>Hotels</a>
          <a>Flights</a>
          <a>Bokking</a>
          <a>Logins</a>
          <a class="border-2 px-5 rounded-md">Sign up</a>
          <select>
            <option>EN</option>
          </select>
        </div>
      </div>
      {/*Home Page*/}
      <div class="w-screen h-[85vh] flex p-8">
        <div class="w-1/2 h-full flex flex-col gap-5 justify-start items-start">
          <p class="mt-10 text-xl font-bold text-yellow-300">
            BEST DISTINATIONS AROUND THE WORLD
          </p>
          <h1 class="w-full text-8xl font-bold">
            Travel, enjoy and live a new and full life
          </h1>
          <p class="w-full text-xl">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div class="flex gap-10">
            <button class="bg-yellow-500 px-5 py-2 text-white rounded-md courser-pointer">
              Find out more{" "}
            </button>
            <button>
              <img src={btn} />
            </button>
            <button class="flex items-center font-xl courser-pointer">
              Play Demo
            </button>
          </div>
        </div>
        <div class="w-1/2 h-full">
          <img src={pic1} alt="pic1" />
        </div>
      </div>
      {/*      Category  */}
      <div class="w-screen h-[100vh] flex flex-col justify-center items-center gap-5">
        <p>Category</p>
        <h1 class="text-5xl font-bold">We Offer Best Service </h1>
        <div class="w-screen h-2/3 flex gap-10 justify-center items-center">
          <div class="h-4/5 w-1/5 rounded-md flex flex-col justify-center items-center gap-5">
            <img src={weather} alt="Calculate Weather " class="h-2/5 w-2/3" />
            <p class="text-2xl font-samibold ">Calculated Weather</p>
            <p class="text-1xl w-1/2 flex items-center ">
              Built Wicket longer admire do barton vanity itself do in it.
            </p>
          </div>
          <div class="h-4/5 w-1/5 rounded-md flex flex-col justify-center items-center gap-5">
            <img src={Flight} alt="Flight pic" class="h-2/5 w-2/3" />
            <p class="text-2xl font-samibold ">Best Flights </p>
            <p class="text-1xl w-2/3 flex items-center px-5">
              Engrossed listening. Park gate sell they west hard for the.
            </p>
          </div>
          <div class="h-4/5 w-1/5 rounded-md flex flex-col justify-center items-center gap-5">
            <img src={Events} alt="Events pic" class="h-2/5 w-1/2" />
            <p class="text-2xl font-samibold ">Local Events</p>
            <p class="text-1xl w-2/3 flex items-center px-2">
              Barton vanity itself do in it. Prefferd to men it engrossed
              listening.
            </p>
          </div>
          <div class="h-4/5 w-1/5 rounded-md flex flex-col justify-center items-center gap-5">
            <img src={Setting} alt="Setting pic" class="h-2/5 w-2/3" />
            <p class="text-2xl font-samibold ">Customization</p>
            <p class="text-1xl w-2/3 flex items-center px-2">
              We deliver outsourced aviation services formilitary customers
            </p>
          </div>
        </div>
      </div>
      {/*  Top Selling  */}
      <div class="w-screen h-[100vh] flex flex-col justify-center items-center gap-5">
        <p>Category</p>
        <h1 class="text-5xl font-bold">Top Destinations</h1>
        <div class="w-screen h-2/3 flex justify-center gap-16">
          <div class="w-[45vh] h-full">
            <img src={Rome} alt="Rome pic" class="w-full h-3/4 rounded-md" />
            <div class="flex flex-col">
              <div class="flex justify-between items-center p-2">
                <p class="font-serif">Rome</p>
                <p class="font-sans">$5.6K</p>
              </div>
              <div class="flex justify-start items-center p-3">
                <FontAwesomeIcon icon={faLocationArrow} size="1x" />
                <p>15days trip</p>
              </div>
            </div>
          </div>
          <div class="w-[45vh] h-full">
            <img src={London} alt="Rome pic" class="w-full h-3/4 rounded-md" />
            <div class="flex flex-col">
              <div class="flex justify-between p-2">
                <p class="font-serif">London</p>
                <p class="font-sans">$5.5K</p>
              </div>
              <div class="flex justify-start items-center p-3 ">
                <FontAwesomeIcon icon={faLocationArrow} size="1x" />
                <p>12 days trip</p>
              </div>
            </div>
          </div>
          <div class="w-[45vh] h-full">
            <img src={Europe} alt="Rome pic" class="w-full h-3/4 rounded-md" />
            <div class="flex flex-col">
              <div class="flex justify-between p-2">
                <p class="font-serif">Full Europe</p>
                <p class="font-sans">$15000K</p>
              </div>
              <div class="flex justify-start p-3">
                <FontAwesomeIcon icon={faLocationArrow} size="1x" />
                <p>30 days trip</p>
              </div>
            </div>
          </div>
        </div>
      </div>

       {/* Grace trip */}
        <div class="w-screen h-[100vh] flex">
          <div class="w-1/2 h-full flex flex-col justify-center items-start p-24 gap-5">
          <p class="text-lg">Easy And Fast</p>
         <p class="font-sans flex flex-wrap font-bold text-5xl">Book your Next Trip in 3 Easy steps</p>
          <div class=" w-full h-1/5 flex">
           <div class="w-1/5 flex items-start justify-center">
           <img src={chosedestination} />
           </div>
           <div class="4/5 flex flex-col flex-wrap">
           <p class="font-semibold text-xl">Choose Destination</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
           </div>
          </div>

            <div class=" w-full h-1/5 flex">
           <div class="w-1/5 flex items-start justify-center">
           <img src={makepayment} />
           </div>
           <div class="4/5 flex flex-col flex-wrap">
           <p class="font-semibold text-xl">Choose Destination</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
           </div>
          </div>

          <div class=" w-full h-1/5 flex">
           <div class="w-1/5 flex items-start justify-center">
           <img src={reachairport} />
           </div>
           <div class="4/5 flex flex-col flex-wrap">
           <p class="font-semibold text-xl">Choose Destination</p>
           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
           </div>
          </div>

         </div>
         <div class="w-1/2 flex justify-center items-center">
         <img src={greece} />
         <img src={rome} class="absolute ml-52 mt-36 z-10 w-64"/>
         </div>
        </div>

        {/* Landing Page ... ; */}
        <div class="w-screen h-[35vh] flex justify-evenly items-center">
        <img src={avon} />
        <img src={jetstar} />
        <img src={expedia} />
        <img src={qantas} />
        <img src={alitalia} />
        </div>
        
        <div class="w-screen h-[60vh]  flex justify-center items-center">
        <div class="w-4/5 h-4/5 bg-gray-200 rounded-tl-3xl flex flex-col justify-center items-center gap-8">
        <p class="font-bold text-2xl text-center r w-3/5">Subscribe to get information,latest news and other interestingoffers about Cobham</p>
        <div class="w-1/2 h-12  flex gap-4">
        <div class="w-3/4 h-full bg-white  flex justify-start items-center px-5 gap-2">
         <img src={Inbox} class="size-8" />
         <p class="font-serif">Your Email ...</p>
        </div>
        <button class="font-serif text-1xl flex items-center justify-center bg-red-400 text-white p-5"> Subscribe </button>
        </div>
        </div>
        </div>


     {/*  */}
      <div class="w-screen h-[65vh] ">
      <div class="w-full h-4/5 flex justify-evenly">

       <div class="w-1/5 h-full flex flex-col justify-center gap-8 ">
        <p class="text-5xl font-xl px-7">Jadoo .</p>
        <p class="font-sans text-1xl px-7">Book your trip in minute, get full control for much longer.</p>
       </div>

        <div class="w-1/5 h-full flex flex-col justify-center items-center gap-4 ">
        <p class="text-2xl">Company</p>
        <div class="flex flex-col">
         <button class="cursor-pointer">About</button>
         <button class="cursor-pointer">Careers</button>
         <button class="cursor-pointer">Mobile</button>
        </div>
       </div>



        <div class="w-1/5 h-full flex flex-col justify-center items-center gap-4 ">
        <p class="text-2xl">Contact</p>
        <div class="flex flex-col">
         <button class="cursor-pointer">Help / FAQ</button>
         <button class="cursor-pointer">Press</button>
         <button class="cursor-pointer">Affiliates</button>
        </div>
       </div>

        <div class="w-1/5 h-full flex flex-col justify-center items-center gap-4 ">
        <p class="text-2xl">More</p>
        <div class="flex flex-col">
         <button class="cursor-pointer">Airline fees</button>
         <button class="cursor-pointer">Airline</button>
         <button class="cursor-pointer">Low fare tips</button>
        </div>
       </div>

        <div class="w-1/5 h-full flex flex-col justify-center items-center gap-4 ">
        <p class="text-2xl">Company</p>
        <div class="flex flex-col">
         <button class="cursor-pointer">About</button>
         <button class="cursor-pointer">Careers</button>
         <button class="cursor-pointer">Mobile</button>
        </div>
       </div>
      </div>
      <div class="h-1/5 w-screen flex justify-center items-center">
       <p>All rights reserved@jadoo.co</p>
      </div>
      </div>

    </>
  );
};

export default App;
