import Image from "next/image"
import image1 from '@/public/7776b16fd94779a6038df61ab3795e3388d1c731.jpg';
import image2 from '@/public/5b68113ad80dfca071d88cdc680544ed9cbcf9ed.jpg';
import image3 from '@/public/a353eb29cb260e5e45b8deb813272ee1a31ac6f1.jpg';
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const SeventhSection = () => {
  return (
   <section className="my-12 bg-transparent text-center px-6
   max-w-7xl mx-auto h-full">
       <div className="mb-3">
         <h2 className="text-xl text-[#4D4D4D] mb-1
         font-semibold dark:text-gray-300">Caring is the new marketing
        </h2>
        <p className="text-sm text-[#717171]
        dark:text-gray-300">
          The Nexcent blog is the best place to read about the
          latest membership insights, trends and more. See who&apos;s
          joining the community, read about how our community are
          increasing their membership income and lot&apos;s more.​
        </p>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
       gap-y-25 gap-x-15">
          <div className="relative w-full">
            <div className="w-full sm:w-145 md:w-86 lg:w-76
            h-71.5 overflow-hidden rounded-lg mx-auto">
            <Image
            src={image1}
            alt=""
            width={368}
            height={286}
            className="w-full h-full object-cover"/>
            <div className="absolute -bottom-20 left-[50%]
            translate-x-[-50%] rounded-lg space-y-4 min-w-70.25
            h-fit bg-[#F5F7FA] shadow shadow-[#ABBED1] p-4
            dark:bg-gray-800 dark:shadow-gray-600">
              <h2 className="text-[#717171] text-lg
              font-semibold dark:text-gray-300">
               Creating Streamlined Safeguarding
               Processes with OneRen</h2>
              <Link href={'/'} className="text-[#4CAF4F]
              font-semibold flex items-center justify-center
              gap-2">
                Readmore
                <FiArrowRight />
              </Link>
            </div>
          </div>
          </div>
          <div className="relative w-full">
            <div className="w-full sm:w-145 md:w-86 lg:w-80
            h-71.5 overflow-hidden rounded-lg mx-auto">
            <Image
            src={image2}
            alt=""
            width={368}
            height={286}
            className="w-full h-full object-cover"/>
            <div className="absolute -bottom-20 left-[50%]
            translate-x-[-50%] rounded-lg space-y-4 min-w-70.25
            h-fit bg-[#F5F7FA] shadow shadow-[#ABBED1] p-4
            dark:bg-gray-800 dark:shadow-gray-600">
              <h2 className="text-[#717171] text-lg
              font-semibold dark:text-gray-300">
               What are your safeguarding
               responsibilities and how can you manage them?</h2>
              <Link href={'/'} className="text-[#4CAF4F]
              font-semibold flex items-center justify-center
              gap-2">
                Readmore
                <FiArrowRight />
              </Link>
            </div>
          </div>
          </div>
          <div className="relative w-full">
           <div className="w-full sm:w-145 md:w-86 lg:w-80
            h-71.5 overflow-hidden rounded-lg mx-auto">
            <Image
            src={image3}
            alt=""
            width={368}
            height={286}
            className="w-full h-full object-cover"/>
            <div className="absolute -bottom-20 left-[50%]
            translate-x-[-50%] rounded-lg space-y-4 min-w-70.25
            h-fit bg-[#F5F7FA] shadow shadow-[#ABBED1] p-4
            dark:bg-gray-800 dark:shadow-gray-600">
              <h2 className="text-[#717171] text-lg
              font-semibold dark:text-gray-300">
               Revamping the Membership Model
               with Triathlon Australia</h2>
              <Link href={'/'} className="text-[#4CAF4F]
              font-semibold flex items-center justify-center
              gap-2">
                Readmore
                <FiArrowRight />
              </Link>
            </div>
          </div>
          </div>
       </div>
   </section>
  )
}

export default SeventhSection