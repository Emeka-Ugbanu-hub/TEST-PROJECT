import Image from "next/image";

const RecentPosts = () => {
  return (
    <>
      <div className="rounded-md shadow-md w-full bg-white mt-8 text-coolGray-100">
        <div
          className="flex items-center justify-between p-3"
          style={{ cursor: "auto" }}
        >
          <div
            className="flex items-center space-x-2"
            style={{ cursor: "auto" }}
          >
            <img
              src="images/ellipse1.png"
              alt=""
              className="object-cover object-center w-12 h-12 rounded-full shadow-sm ring-2 ring-orange-500 p-0.5"
              style={{ cursor: "auto" }}
            />
            <div style={{ cursor: "auto" }}>
              <h2
                className="text-sm font-semibold leading-none"
                style={{ cursor: "auto" }}
              >
                Ella Ray
              </h2>
              <span
                className="inline-block text-xs leading-none text-coolGray-400"
                style={{ cursor: "auto" }}
              >
                Lagos, Nigeria
              </span>
              <span
                className="block text-xs leading-none text-coolGray-400"
                style={{ cursor: "auto" }}
              >
                28 March, 2022
              </span>
            </div>
          </div>
          <button title="Open options" type="button">
            <Image
              src="/svg/menu.svg"
              height={20}
              width={20}
              alt="An SVG of an eye"
            />
          </button>
        </div>
        <img
          src="/images/name.png"
          alt=""
          className="object-cover object-center w-full h-72 bg-coolGray-500"
          style={{ cursor: "auto" }}
        />

        <div
          className="flex justify-between  p-4"
          style={{ background: "#E5E5E5" }}
        >
          <div>
            <span className="block text-xs text-gray-600">
              WWW.NAIRALAND.COM
            </span>
            <span className="block text-sm font-medium">
              Best Way to Sell Your Product to Many Clients
            </span>
          </div>
          <button className="w-fit h-fit p-2 bg-gray-300 text-sm mr-8 rounded-md">
            Learn More
          </button>
        </div>

        <div className="p-3" style={{ cursor: "auto" }}>
          <div
            className="flex items-center justify-between"
            style={{ cursor: "auto" }}
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/svg/like.svg"
                height={25}
                width={25}
                alt="An SVG of an eye"
              />
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <Image
                  src="/svg/cloud.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <Image
                  src="/svg/share.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
              </button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex mr-8 items-center justify-center"
            >
              <Image
                src="/svg/favourite.svg"
                height={14}
                width={14}
                alt="An SVG of an eye"
              />
            </button>
          </div>
          <div
            className="flex flex-wrap items-center pt-3 pb-1"
            style={{ cursor: "auto" }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/ellipse2.png"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/collage2.png"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/collage1.png"
                />
              </div>
              <span className="text-xs">
                {" "}
                Liked by {""}
                <span className="font-semibold">Kemi Smallz</span> and {""}
                <span className="font-semibold">1,002 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3" style={{ cursor: "auto" }}>
            <p className="text-sm" style={{ cursor: "auto" }}>
              <span className="text-base font-semibold">Ella Ray</span> Those
              who will continue to make money are the ones that refused to
              consume all they earned but invested for their tomorrow.
            </p>
          </div>
        </div>
      </div>

      <div className="rounded-md shadow-md w-full bg-white mt-8 text-coolGray-100">
        <div
          className="flex items-center justify-between p-3"
          style={{ cursor: "auto" }}
        >
          <div
            className="flex items-center space-x-2"
            style={{ cursor: "auto" }}
          >
            <img
              src="images/abdul.png"
              alt=""
              className="object-cover object-center w-12 h-12 rounded-full shadow-sm ring-2 ring-orange-500 p-0.5"
              style={{ cursor: "auto" }}
            />
            <div style={{ cursor: "auto" }}>
              <h2
                className="text-sm font-semibold leading-none"
                style={{ cursor: "auto" }}
              >
                Abdullazeez Mheny
              </h2>
              <span
                className="inline-block text-xs leading-none text-coolGray-400"
                style={{ cursor: "auto" }}
              >
                London, UK
              </span>
              <span
                className="block text-xs leading-none text-coolGray-400"
                style={{ cursor: "auto" }}
              >
                28 March, 2022
              </span>
            </div>
          </div>
          <button title="Open options" type="button">
            <Image
              src="/svg/menu.svg"
              height={20}
              width={20}
              alt="An SVG of an eye"
            />
          </button>
        </div>
        <img
          src="/images/name.png"
          alt=""
          className="object-cover object-center w-full h-72 bg-coolGray-500"
          style={{ cursor: "auto" }}
        />

        <div
          className="flex justify-between  p-4"
          style={{ background: "#E5E5E5" }}
        >
          <div>
            <span className="block text-xs text-gray-600">
              WWW.NAIRALAND.COM
            </span>
            <span className="block text-sm font-medium">
              Best Way to Sell Your Product to Many Clients
            </span>
          </div>
          <button className="w-fit h-fit p-2 bg-gray-300 text-sm mr-8 rounded-md">
            Learn More
          </button>
        </div>

        <div className="p-3" style={{ cursor: "auto" }}>
          <div
            className="flex items-center justify-between"
            style={{ cursor: "auto" }}
          >
            <div className="flex items-center space-x-3">
              <Image
                src="/svg/like.svg"
                height={25}
                width={25}
                alt="An SVG of an eye"
              />
              <button
                type="button"
                title="Add a comment"
                className="flex items-center justify-center"
              >
                <Image
                  src="/svg/cloud.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
              </button>
              <button
                type="button"
                title="Share post"
                className="flex items-center justify-center"
              >
                <Image
                  src="/svg/share.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
              </button>
            </div>
            <button
              type="button"
              title="Bookmark post"
              className="flex mr-8 items-center justify-center"
            >
              <Image
                src="/svg/favourite.svg"
                height={14}
                width={14}
                alt="An SVG of an eye"
              />
            </button>
          </div>
          <div
            className="flex flex-wrap items-center pt-3 pb-1"
            style={{ cursor: "auto" }}
          >
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-3">
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/ellipse2.png"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/collage2.png"
                />
                <img
                  alt=""
                  className="w-5 h-5 border rounded-full "
                  src="/images/collage1.png"
                />
              </div>
              <span className="text-xs">
                {" "}
                Liked by {""}
                <span className="font-semibold">Kemi Smallz</span> and {""}
                <span className="font-semibold">1,002 others</span>
              </span>
            </div>
          </div>
          <div className="space-y-3" style={{ cursor: "auto" }}>
            <p className="text-sm" style={{ cursor: "auto" }}>
              <span className="text-base font-semibold">Ella Ray</span> Those
              who will continue to make money are the ones that refused to
              consume all they earned but invested for their tomorrow.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecentPosts;
