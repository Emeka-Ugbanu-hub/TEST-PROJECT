import { useRef } from "react";
import Image from "next/image";

const ProfilePictures = () => {
  const ref = useRef<any>()
  const scroll =  (scrollOffset:number) => {
    ref.current.scrollLeft += scrollOffset;
  }
  return (
    <>
      <div className="flex flex-col rounded-xl bg-white relative  ">
      <Image
            width={50}
            height={50}
            alt="An SVG of an eye"
            className="absolute right-0 top-8 cursor-pointer"
            src="/svg/arrow.svg"
            onClick={()=>scroll(200)}
          />
             <Image
            width={50}
            height={50}
            alt="An SVG of an eye"
            className="absolute left-0 top-8 cursor-pointer"
            src="/svg/scrollLeft.svg"
            onClick={()=>scroll(-200)}
          />
        <div className="flex  overflow-x-scroll hide-scroll-bar scroll-smooth" ref={ref}>
          <div className="flex flex-nowrap">
            <div className="inline-block px-3  relative  text-center py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-gray-300 "
                src="/images/ellipse1.png"
                alt="Bordered avatar"
              />
              <Image
                src="/svg/add.svg"
                height={25}
                width={25}
                alt="An SVG of an eye"
                className="bottom-8 right-5 absolute cursor-pointer "
              />

              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Your Story</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500 "
                src="/images/profile2.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Olajide Samuel</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500 "
                src="/images/profile3.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Abdullazeez B</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500"
                src="/images/profile4.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Olatoye Juliet</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500 "
                src="/images/profile5.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Kemi Smallz</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500"
                src="/images/ellipse2.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">OG Tega</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500"
                src="/images/profile2.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Abdullazeez B</p>
              </div>
            </div>
            <div className="inline-block text-center px-3 py-4">
              <img
                className="p-1 w-20 h-20 max-w-xs overflow-hidden rounded-full ring-2 ring-orange-500 "
                src="/images/ellipse1.png"
                alt="Bordered avatar"
              />
              <div className="flex-1 min-w-0">
                <p className="text-xs  truncate ">Abdullazeez B</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfilePictures;
