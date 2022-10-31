import Image from "next/image";

const Header = () => {
  return (
    <>
      <div className="w-screen fixed top-0 cursor-pointer  flex flex-row items-center p-1 z-50 justify-between bg-white shadow-xs">
        <div className="ml-8 text-lg text-gray-700 hidden md:flex">
          <Image
            src="/svg/logo.svg"
            height={150}
            width={150}
            alt="An SVG of an eye"
          />
        </div>
        <span className="w-screen md:w-2/5 h-10 bg-gray-100 cursor-pointer border border-gray-100 text-sm rounded-full flex">
          <Image
            src="/svg/search.svg"
            height={22}
            width={22}
            alt="An SVG of an eye"
            className="ml-2"
          />

          <input
            type="search"
            name="serch"
            placeholder="Search people, cateogries, advertisements..."
            className="flex-grow px-4 rounded-l-full bg-gray-100 rounded-r-full text-sm focus:outline-none"
          />
        </span>
        <div className="flex flex-row-reverse mr-4 ml-4 md:hidden">
          <i className="fas fa-bars"></i>
        </div>
        <div className="flex flex-row-reverse mr-8 hidden md:flex">
          <div className="px-4 py-2 m-2 ">
            <Image
              src="/images/profile.png"
              height={50}
              width={50}
              alt="An SVG of an eye"
            />
          </div>
          <div
            className="flex w-fit mt-6 cursor-pointer  rounded-3xl h-fit px-4 py-2 m-2"
            style={{ background: "rgba(255, 104, 91, 0.06)" }}
          >
            <Image
              src="/svg/coin.svg"
              height={22}
              width={22}
              alt="An SVG of an eye"
            />
            2000
          </div>
          <div
            className="w-fit rounded-3xl cursor-pointer mt-6 h-fit px-4 py-2 m-2"
            style={{ background: "rgba(255, 104, 91, 0.06)" }}
          >
            <Image
              src="/svg/wallet.svg"
              height={22}
              width={22}
              alt="An SVG of an eye"
            />
          </div>
          <div
            className="w-fit rounded-3xl cursor-pointer mt-6 h-fit px-4 py-2 m-2"
            style={{ background: "rgba(255, 104, 91, 0.06)" }}
          >
            <Image
              src="/svg/notif.svg"
              height={22}
              width={22}
              alt="An SVG of an eye"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
