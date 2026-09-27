import { FiArrowRight } from "react-icons/fi"

const EighthSection = () => {
  return (
    <section className="py-8 px-6 text-center w-full h-full
    bg-[#F5F7FA] mt-25">
        <h2 className="text-3xl sm:text-4xl md:text-5xl
        font-semibold text-[#263238] max-w-200 mx-auto">
         Pellentesque suscipit
         fringilla liberoneu.</h2>
        <button className="py-3.5 px-8 text-white text-sm
        rounded-sm bg-[#4CAF4F] flex items-center mx-auto
        justify-center gap-3 cursor-pointer mt-7">
         Get a Demo <FiArrowRight />
        </button>
    </section>
  )
}

export default EighthSection