import EighthSection from "./EighthSection"
import FifthSection from "./FifthSection"
import FirstSection from "./FirstSection"
import FourthSection from "./FourthSection"
import SecondSection from "./SecondSection"
import SeventhSection from "./SeventhSection"
import SixthSection from "./SixthSection"
import ThirdSection from "./ThirdSection"

const Main = () => {
  return (
    <main className="overflow-hidden min-h-full">
      <FirstSection /> 
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <EighthSection />
    </main>
  )
}

export default Main