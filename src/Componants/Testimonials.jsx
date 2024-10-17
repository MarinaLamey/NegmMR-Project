import {testimonials} from '../constance'

const Testimonials = () => {
  return (
    <div className="container relative mt-20 tracking-wide text-center">
       <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide" > What People are saying </h2>
       <div className="flex flex-wrap justify-center   mt-10 lg:mt-20 ">
         {testimonials.map((testimonial , index) => (
        <div key={index} className='w-full  sm:w-1/2 lg:w-1/3 px-4 py-2 '>
         <div className=' bg-neutral-900 rounded-md p-6 text-md border border-neutral-800 font-thin shadow-lg shadow-fuchsia-900	 '>
         <p>{testimonial.text}</p>
              <div className="flex mt-8 items-start">
                <img
                  className="w-12 h-12 mr-6 rounded-full border border-neutral-300"
                  src={testimonial.image}
                  alt=""
                />
                <div>
                  <h6>{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                  </div>
                </div>
    </div>
            </div>    
         ))}
       </div>
    </div>
  )
}

export default Testimonials
