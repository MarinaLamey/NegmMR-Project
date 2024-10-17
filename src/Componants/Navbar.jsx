
import { CodeXml } from 'lucide-react';
import { navItems } from "../constance/index";
import { Menu , X } from 'lucide-react';
import { useState } from 'react';
const Navbar = () => {
  const [Mobileview , setMobileview] = useState(false)
  const toggleNavebar = () => {
    setMobileview(!Mobileview)
  };



  
  return (
    <nav className='  sticky	border-neutral-700/80	z-50	border-b	font-bold	backdrop-blur-lg 		'>
      <div className='container  mx-auto flex flex-row  justify-center  justify-between items-center relative  flex-nowrap '>
      <div className="icon-Lodg  flex flex-row items-center	justify-between "><CodeXml size={50} className='text-fuchsia-400  pl-3 '/><h2 className='ml-5 py-3 text-l  lg:text-2xl '>NegmMR</h2></div>
      <div className="links hidden lg:flex  items-center	 ">
       <ul className='flex gap-9 text-2xl	cursor-pointer'>
       { navItems.map((item , index) => (
           <li key={index}  className='hover:text-fuchsia-400 hover:animate-bounce '>
            <a href={item.href}  className='flex flex-row items-center	justify-between h-20'>{item.label}</a>
          </li>
        ))}
      </ul>
      </div>
       <div className="Signin hidden lg:flex flex-row items-center	justify-between text-xl	 " ><button className='rounded-lg	border-2   p-2 pl-4   pr-4 hover:text-fuchsia-400	shadow-md	  delay-150'>Sign in</button><button className='ml-5 rounded-lg pr-4 pl-4 border-2 p-2 shadow-xl		bg-gradient-to-r from-violet-500 to-fuchsia-500 border-transparent	'>Creat an account</button></div>
       <div className=" flex lg:hidden  items-center	justify- ">
      <button onClick={toggleNavebar} className='py-3 pr-3 '>{ Mobileview ? <X/>: <Menu></Menu>}</button>
      </div>
      </div>
      { Mobileview &&(
        <div className=' fixed top-12 right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden'>
          <ul className='' >
          { navItems.map((item , index) => (
           <li key={index}  className='hover:text-fuchsia-400 hover:animate-bounce '>
            <a href={item.href}  className='flex flex-row items-center	justify-between h-20'>{item.label}</a>
          </li>
        )) }
          </ul>
          <div className="Signin flex lg:hidden flex-row items-center	justify-between text-l	 " ><button className='rounded-lg	border-2   p-2 pl-4   pr-4 hover:text-fuchsia-400	shadow-md	  delay-150'>Sign in</button><button className='ml-5 rounded-lg pr-4 pl-4 border-2 p-2 shadow-xl		bg-gradient-to-r from-violet-500 to-fuchsia-500 border-transparent	'>Creat an account</button></div>
        </div>
      )}
    </nav>
    
  )
}

export default Navbar
