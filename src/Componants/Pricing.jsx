import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constance";

const Pricing = () => {
  return (
    <div className="container relative  text-center mt-10 lg:mt-20  mb-9  min-h-[800px]">
    <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide" >Pricing</h2>
<div className=" flex flex-wrap mt-9 ">
{pricingOptions.map((option, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-700 rounded-xl">
              <p className="text-4xl mb-8">
                {option.title}
                {option.title === "Negma" && (
                  <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text text-xl mb-4 ml-2">
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{option.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className="mt-8 flex items-center">
                    <CheckCircle2 />
                    <span className="ml-2">{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-fuchsia-700 border border-fuchsia-700 rounded-lg transition duration-200"
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}

</div>
    </div>
  )
}

export default Pricing
