
import Image from "next/image"
const  Activity = () => {
  return (
    <>
    
<div className=" w-full bg-white rounded-lg border shadow-md p-4 ">
    <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold leading-none text-gray-900 ">Activity</h5>
        <a href="#" className="text-sm font-medium text-gray-400 ">
            See all
        </a>
   </div>
   <div>
    <h5>Story about you</h5>
<div className="flex">
<div className="flex -space-x-5">
              <img alt="" className="w-8 h-8 border rounded-full " src="/images/ellipse2.png"/>
              <img alt="" className="w-8 h-8 border rounded-full " src="/images/collage2.png"/>
              <img alt="" className="w-8 h-8 border rounded-full " src="/images/collage1.png"/>
            </div>
            <div className="ml-4 ">
                <span className="block text-sm">Mentions</span>
                <span className="block text-xs">2 stories about you</span>
            </div>
</div>
<span>New</span>
   </div>
   <div className="flow-root">
        <ul role="list">
            <li className="py-3 ">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse2.png" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Ella Ray <span className="font-light text-xs">Started</span>
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        <span className="text-black">following you</span>. 4m
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    <Image
              src="/svg/adduser.svg"
              height={35}
              width={35}
              alt="An SVG of an eye"
            />
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse2.png" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Ella Ray shared a
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        <span className="text-black">new post.</span> 6m
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    <Image
              src="/images/ellipse3.png"
              height={35}
              width={35}
              alt="An SVG of an eye"
            />
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse5.png" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Joshua K like your 
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        <span className="text-black">post. </span>10m
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    <Image
              src="/images/ellipse4.png"
              height={35}
              width={35}
              alt="An SVG of an eye"
            />
                    </div>
                </div>
            </li>
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse2.png" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Ella Ray Started 
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        <span className="text-black">following you.</span> 4m
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    <Image
              src="/svg/adduser.svg"
              height={35}
              width={35}
              alt="An SVG of an eye"
            />
                    </div>
                </div>
            </li>
            <li className="pt-3 pb-0 sm:pt-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse5.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Joshua K like your 
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        <span className="text-black">post.</span> 10m
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900 ">
                    <Image
              src="/images/ellipse3.png"
              height={35}
              width={35}
              alt="An SVG of an eye"
            />
                    </div>
                </div>
            </li>
        </ul>
   </div>
</div>

    </>
  )
}

export default Activity