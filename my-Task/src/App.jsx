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

const App = () => {
  return (
    <>
      {/* Nevigation Bar  */}
      <div class="w-screen h-20 flex ">
        <div class="w-1/2 h-full flex items-center">
          <h1 class="font-semibold text-3xl ml-12">Jadoo</h1>
        </div>
        <div class="w-1/2 h-full flex items-center gap-7">
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
      <div class="w-screen h-[85vh] flex ml-10">
        <div class="w-1/2 h-full flex flex-col ml-1 gap-5 justify-start items-start">
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
        <div class="w-1/2 h-full mr-16">
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

       {/*  */}

    </>
  );
};

export default App;
