import video1 from '../video/v-1.mp4'
import video2 from '../video/v-2.mp4'


const Landingpage = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-7  lg:mt-20">
      <h1 className="text-4xl  sm:text-6xl lg:text-7xl tracking-wide text-center	">NegmMR build tools<span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text ">
{' '}
     for developers</span></h1>
     <p className="mt-10  text-center text-sm lg:text-lg px-2 text-neutral-500 max-w-4xl">
        Empower your creativity and bring your VR app ideas to life with our
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className=" flex items-center my-10">
        <a href="#" className="rounded-lg py-2 px-4 border-2 mx-3    text-base lg:text-xl shadow-xl bg-gradient-to-r  from-violet-500 to-fuchsia-500 border-transparent cursor-pointer	">Start for free</a>
        <a href="#" className="rounded-lg	border-2  py-2 px-4   pr-4 hover:text-fuchsia-400	shadow-md text-base lg:text-xl  cursor-pointer	delay-150">Documentation</a>
      </div>
      <div className="flex flex-col lg:flex-row items-center mt-7 lg:mt-10 justify-center px-20">
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-fuchsia-500 shadow-sm shadow-fuchsia-500 mx-2 my-4"
        >
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video
          autoPlay
          loop
          muted
          className="rounded-lg w-1/2 border border-fuchsia-500 shadow-sm shadow-fuchsia-500 mx-2 my-4"
        >
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  )
}

export default Landingpage
