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
      <div class="w-screen h-[85vh] bg-red-800 flex">
      <div class="w-1/2 h-full flex flex-col ml-12">
      <p class="text-xl font-bold text-yellow-300">BEST DISTINATIONS AROUND THE WORLD</p>
      <h1 class="text-6xl font-bold ">Travel, enjoy and live a newand full life</h1>
      </div> 
       <div class="w-1/2 h-full bg-yellow-70">
        <img src="pic1.jpg" alt="pic1"></img>
        </div>
      </div>
    </>
  );
};

export default App;
