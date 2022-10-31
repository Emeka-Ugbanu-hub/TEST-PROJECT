import Image from "next/image";

const Personal = () => {
  return (
    <>
      <aside className="w-full" aria-label="Sidebar">
        <div className="py-4 px-3 bg-white  rounded-xl dark:bg-white">
          <ul className="space-y-2">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:bg-orange-50"
              >
                <Image
                  src="/images/profile.png"
                  height={50}
                  width={50}
                  alt="An SVG of an eye"
                />
                <span className="ml-2  inline-flex text-black">Segun</span>
                <span className="ml-1 inline-flex text-black">James</span>
                <span
                  className="inline-flex justify-center items-center px-2 ml-4 text-sm font-medium text-gray-800 rounded-full "
                  style={{ background: "rgba(255, 104, 91, 0.06)" }}
                >
                  <Image
                    src="/svg/sideIcon.svg"
                    height={85}
                    width={75}
                    alt="An SVG of an eye"
                  />
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-orange-50"
              >
                <Image
                  src="/svg/conect.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Connections
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-orange-50"
              >
                <Image
                  src="/svg/group.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Groups
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-orange-50"
              >
                <Image
                  src="/svg/message.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Messages
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-orange-50 "
              >
                <Image
                  src="/svg/market.svg"
                  height={25}
                  width={25}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Marketplace
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-orange-50 "
              >
                <Image
                  src="/svg/saved.svg"
                  height={14}
                  width={14}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Saved
                </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:bg-orange-50"
              >
                <Image
                  src="/svg/event.svg"
                  height={20}
                  width={20}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Events & Challenges
                </span>
              </a>
            </li>

            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 hover:bg-orange-50"
              >
                <Image
                  src="/svg/refer.svg"
                  height={20}
                  width={20}
                  alt="An SVG of an eye"
                />
                <span className="flex-1 ml-3 text-black whitespace-nowrap">
                  Referral
                </span>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Personal;
