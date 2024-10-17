import codeImge from "../photos/code.jpg"
import {checklistItems} from "../constance";
import { CheckCircle2 } from "lucide-react";

const Workflow = () => {
  return (
   <div className=" container text-center mt-10 lg:mt-20  mb-9">
<div className=" flex flex-col justify-center items-center justify-between">
<h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
Accelerate your{" "}
          <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-transparent bg-clip-text">
          coding workflow.
          </span>
        </h2>
<div className="flex flex-wrap justify-center  mt-10 lg:mt-20">
<div className="p-2 w-full lg:w-1/2">
          <img src={codeImge} alt="Coding" />
        </div>
<div className=' pt-12 w-full lg:w-1/2'>
{checklistItems.map((item , index) => (
    <div key={index} className="flex mb-12 p-3 lg:p-0">
    <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center items-center rounded-full">
                <CheckCircle2 />
    </div>
    <div className="">
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-500">{item.description}</p>
              </div>
    </div>
))}
</div>
</div>
</div>
   </div>
  )
}

export default Workflow
