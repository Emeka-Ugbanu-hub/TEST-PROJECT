import { useRef } from "react";
import Image from "next/image";

const Explore = () => {
  const ref = useRef<any>()
  const scroll =  (scrollOffset:number) => {
    ref.current.scrollLeft += scrollOffset;
  }
  return (
    <>
      <div className=" mt-8 block p-6 h-fit relative max-w-sm bg-white rounded-lg border border-white shadow-md hover:bbg-white dark:bg-white">
        <div className="flex justify-between items-center mb-4">
          <h5 className="text-xl font-bold leading-none text-black dark:text-black">
            Explore
          </h5>
          <a
            href="#"
            className="text-sm font-medium text-slate-400 hover:underline dark:text-slate-400"
          >
            See all
          </a>
        </div>

        <div className="flex flex-col  ">
          <div className="flex overflow-x-scroll scroll-smooth pb-10 hide-scroll-bar"  ref={ref}>
            <div className="flex flex-nowrap cursor-pointer">
              <div className="inline-block px-3">
                <div className="w-fit h-8 max-w-xs px-4 py-1 text-white overflow-hidden rounded-3xl shadow-md bg-orange-600 hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  Product
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-fit h-8 max-w-xs px-4 py-1 overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  Entertainment
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-fit h-8 max-w-xs px-4 py-1 overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  Sports
                </div>
              </div>
              <div className="inline-block px-3">
                <div className="w-fit h-8 max-w-xs px-4 py-1 overflow-hidden rounded-3xl shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out">
                  Health
                </div>
              </div>
            </div>
          </div>

          <Image
            width={50}
            height={50}
            alt="An SVG of an eye"
            className="absolute right-0 top-12 cursor-pointer"
            src="/svg/arrow.svg"
            onClick={()=>scroll(200)}
          />
            <Image
            width={50}
            height={50}
            alt="An SVG of an eye"
            className="absolute left-0 top-12 cursor-pointer"
            src="/svg/scrollLeft.svg"
            onClick={()=>scroll(-200)}
            
          />
        </div>

        <div className="columns-2 gap-2">
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img6.png"
          />
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img2.png"
          />
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img3.png"
          />
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img1.png"
          />
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img4.png"
          />
          <Image
            width={100}
            height={100}
            alt="An SVG of an eye"
            className="mb-4"
            src="/images/img5.png"
          />
        </div>
      </div>
    </>
  );
};

export default Explore;
