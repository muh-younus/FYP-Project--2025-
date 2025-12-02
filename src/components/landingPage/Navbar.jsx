import {BrowserRouter,Routes,Route, Link } from 'react-router-dom';
import Login from '../login/Login';
import Herosection from './HeroSection';
function Home() {
  const [user, setUser] = useSate(true);
  return (
    <>
      <nav className="p-5 px-5">
        <div className="flex justify-between">
            {/* Logo-section */}
          <div>
            <h1 className="text-xl font-bold text-green-300">BreatheWell</h1>
          </div>
          {/* Menu-section */}
          <div>
            <ul className="flex align-center gap-10 pr-4 font-semibold">
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Home</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">About Us</a>
              </li>
              <li
                className="  relative cursor-pointer  
             after:content-[''] after:absolute after:left-0 after:-bottom-1 
             after:w-0 after:h-[2px] after:bg-green-300 
             after:transition-all after:duration-300 
             hover:after:w-full"
              >
                <a href="#">Contact</a>
              </li>
              <li>
                <button className="bg-green-900 hover:bg-green-400 text-white py-1 px-4 rounded-full">
                  <Link to="/login">Login</Link>
                 
                </button>
              </li> 
            </ul>
          </div>
        </div>
      </nav>
      <Herosection/>
    </>
  );
}
export default Home;
