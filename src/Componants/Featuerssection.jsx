import {features} from '../constance';


const Featuerssection = () => {
  return (
    <div className="container mt-52 relative border-b border-neutral-800 min-h-[800px] ">
   <div className=" flex flex-col justify-center items-center justify-between">
  <span className="text-fuchsia-400	text-lg">Featuers</span>
  <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
   <div className=' flex flex-wrap items-center mt-10 lg:mt-20'>
  {features.map((featuerbox , index) => (
    <div key={index} className='flex  w-full sm:w-1/2 lg:w-1/3'>
    <div className='flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-fuchsia-700	 justify-center items-center rounded-full'>{featuerbox.icon}</div>
    <div className=''>
      <h5 className='mt-1 mb-6 text-xl'>{featuerbox.text}</h5>
      <p className='text-md p-2 mb-20 text-neutral-500'>{featuerbox.description}</p>
    </div>
    </div>
  ))}
   </div>
   </div>
      
    </div>
  )
}

export default Featuerssection
