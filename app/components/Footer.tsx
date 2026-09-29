import { FiDribbble, FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi"

const Footer = () => {
  return (
    <footer className="py-16 px-8 w-full bg-[#263138]
    dark:bg-gray-900">
       <div className=" max-w-2xl lg:max-w-7xl mx-auto
       flex flex-col lg:flex-row gap-10 lg:justify-between">
          <div className="space-y-10">
              <div className="flex items-center gap-1">
                <svg width="44" height="30"
                viewBox="0 0 44 30" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                 <path d="M23.2259 16.2379L16.561 27.6527L9.89611 16.2379H23.2259ZM25.0114 15.2177H8.10339L16.561 29.6717L25.0114 15.2177Z" fill="white"/>
                 <path d="M34.8137 2.0404L41.4786 13.4552H28.1488L34.8137 2.0404ZM34.8137 0L26.3561 14.454H43.2713L34.8137 0Z" fill="white"/>
                 <path d="M0 0L7.09143 12.7846L14.8406 0.321025L0 0Z" fill="#4CAF4F"/>
                 <path d="M16.5612 1.11987L23.9997 13.8332H9.1084L16.5612 1.11987Z" fill="#4CAF4F"/>
                 <path d="M25.9152 16.6089L33.3608 29.6718H18.1154L25.6838 16.6089H25.9152Z" fill="#4CAF4F"/>
                 <path d="M27.5271 15.8169L34.8137 28.68L42.2014 15.8169H27.5271Z" fill="#4CAF4F"/>
                </svg>

                <h2 className="text-xl font-bold
                text-white sm:text-2xl">
                  Nexcent
                </h2>
              </div>
              <p className="text-[#F5F7FA] text-sm">
                Copyright © 2020 Nexcent ltd.
              </p>
              <div className="flex items-center gap-3">
                <button className="p-2 bg-[#2f3d44]
                rounded-full text-white cursor-pointer">
                  <FiInstagram />
                </button>
                <button className="p-2 bg-[#2f3d44]
                rounded-full text-white cursor-pointer">
                  <FiDribbble />
                </button>
                <button className="p-2 bg-[#2f3d44]
                rounded-full text-white cursor-pointer">
                  <FiTwitter/>
                </button>
                <button className="p-2 bg-[#2f3d44]
                rounded-full text-white cursor-pointer">
                  <FiYoutube />
                </button>
              </div>
          </div>
          <div className="flex flex-col lg:flex-row
          gap-12">
            <div className="flex items-center
            justify-between lg:gap-12">
              <div>
              <h3 className="text-white font-semibold
              mb-5">
                Company
              </h3>
              <ul className="space-y-3 text-sm
              text-white">
                <li className="">About us</li>
                <li className="">Blog</li>
                <li className="">Contact us</li>
                <li className="">Pricing</li>
                <li className="">Testemonials</li>
              </ul>
              </div>
              <div>
              <h3 className="text-white font-semibold
              mb-5">
                Support
              </h3>
              <ul className="space-y-3 text-sm
              text-white">
                <li className="">Help center</li>
                <li className="">Terms of service</li>
                <li className="">Legal</li>
                <li className="">Privacy policy</li>
                <li className="">Status</li>
              </ul>
              </div>
            </div>        
            <div className="space-y-6">
              <h3 className="text-lg text-white
              font-semibold">Stay up to date</h3>
              <div className="w-63.75 py-3.5 px-3
              rounded-lg flex items-center
              justify-between bg-[#475156]
              dark:bg-gray-800">
                <input type="email"
                className="outline-none bg-transparent
                text-white text-sm"
                placeholder="Your email address"/>
                <svg width="18" height="18"
                viewBox="0 0 18 18" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_1390_93)">
                  <path fill-rule="evenodd"
                  clipRule="evenodd" d="M17.0303 0.969691C17.2341 1.17342 17.3031 1.47584 17.2079 1.74778L11.9579 16.7478C11.8563 17.038 11.5878 17.2369 11.2806 17.2494C10.9733 17.2619 10.6895 17.0856 10.5646 16.8046L7.6818 10.3182L1.1954 7.43538C0.91439 7.31049 0.738092 7.02671 0.750627 6.71945C0.763163 6.41219 0.961991 6.14371 1.25224 6.04213L16.2522 0.792127C16.5242 0.696948 16.8266 0.765962 17.0303 0.969691ZM9.14456 9.91612L11.1671 14.4667L14.7064 4.35429L9.14456 9.91612ZM13.6457 3.29362L3.53331 6.83297L8.0839 8.85546L13.6457 3.29362Z" fill="white"/>
                  </g>
                  <defs>
                  <clipPath id="clip0_1390_93">
                  <rect width="18" height="18"
                  fill="white"/>
                  </clipPath>
                  </defs>
                </svg>

              </div>
            </div>
          </div>
       </div>
    </footer>
  )
}

export default Footer