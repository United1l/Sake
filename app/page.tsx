import Image from 'next/image'
import Button from './components/buttons'
import { imgSrc } from './landing_image'

export default function Home() {

  return (
    <div className="min-h-screen w-auto flex flex-col bg-[#adb5bd] text-white">
      <header className="w-full h-16 flex items-center justify-between px-6">
        <div className="flex flex-1 space-x-2 items-center">
          <div className="w-6 h-6 bg-red-400 rounded-full"></div>
          <h1 className="text-xl md:text-[2rem] font-medium">Sake</h1>
        </div>
        <div className="flex flex-1 justify-evenly text-xs md:text-xl font-medium">
          <h5 className="cursor-pointer">Bar</h5>
          <h5 className="cursor-pointer">Collection</h5>
        </div>
        <div className="flex flex-1 justify-end">
          <Button>
            sigin in
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-[30rem] md:h-auto flex items-center sm:justify-start justify-center">
          <Image
            src={imgSrc} 
            alt="A glass of alcohol"
            height={300}
            width={300}
            className="md:h-[32rem] md:w-[32rem]"
          />
        </div>
        <div className="flex-1 flex flex-col justify-start md:justify-center p-2">
          <h2 className="text-xl font-semibold text-center sm:text-[1.5rem] md:text-[3rem] leading-snug
           tracking-wide">
            The fastest new way to get Booze to your place
          </h2>
          <h5 className="text-xs text-center mt-3 md:text-[1.3rem] leading-snug">
            We're the current best way to get booze online and safely delivered
            to your location
            </h5>
        </div>
      </main>
    </div>
  )
}
