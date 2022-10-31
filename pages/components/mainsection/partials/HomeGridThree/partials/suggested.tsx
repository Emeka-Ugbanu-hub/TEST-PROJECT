
import Image from "next/image"

const Suggested = () => {
  return (
    <>
    
<div className="p-6 mt-8 w-full max-w-md  rounded-lg border shadow-md bg-white">
    <div className="flex justify-between items-center mb-4">
        <h5 className="text-base font-bold leading-none text-gray-900">Suggested for You</h5>
        <a href="#" className="text-sm font-medium text-gray-400 ">
            See all
        </a>
   </div>
   <div className="flow-root">
        <ul role="list" >
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug1.png" alt="Neil image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Mani Queen
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                        Recently
                        </p>
                    </div>
                    <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    <Image
              src="/svg/recentuser.svg"
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
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug2.png" alt="Bonnie image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Joshua King
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Suggested for you
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
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug3.png" alt="Michael image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Ayomide Adewunmi
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Followed by Ella Ray
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
            <li className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                    <div className="flex-shrink-0">
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug4.png" alt="Lana image"/>
                    </div>
                    <div className="flex-1 min-w-0 ">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        James Brown
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Followed by Kemi Smallz
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
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug2.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Joshua King
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Suggested for you
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
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug3.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Ayomide Adewunmi
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Followed by Ella Ray
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
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/sug1.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        James Brown
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Followed by Kemi Smallz
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
                        <img className="w-8 h-8 rounded-full ring-2 ring-orange-500" src="/images/ellipse2.png" alt="Thomas image"/>
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                        Joshua King
                        </p>
                        <p className="text-sm text-gray-500 truncate ">
                        Suggested for you
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
        </ul>
   </div>
</div>

    </>
  )

}

export default Suggested