import Image from 'next/image'
import Button from './components/buttons'
import { imgSrc } from './landing_image'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-[#adb5bd] text-white">
      <header className="w-full h-16 flex items-center justify-between px-6">
        <div className="flex flex-1 space-x-2 items-center">
          <div className="w-6 h-6 bg-red-400 rounded-full"></div>
          <h1 className="text-xl font-medium">Sake</h1>
        </div>
        <div className="flex flex-1 justify-evenly text-xs font-medium">
          <h5 className="cursor-pointer">Bar</h5>
          <h5 className="cursor-pointer">Collection</h5>
        </div>
        <div className="flex flex-1 justify-end">
          <Button type="primary">
            sigin in
          </Button>
        </div>
      </header>
      <main className="flex flex-1 flex-col md:flex-row">
      <div className="w-full md:w-2/5 h-3/5 md:h-auto flex items-center justify-center">
          <Image
            src={imgSrc} 
            alt="A glass of alcohol"
            height={400}
            width={500}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center p-2">
          <h2 className="text-xl font-semibold text-center">
            The fastest new way to get Alcoholic drinks to your place
          </h2>
          <h5 className="text-xs text-center mt-3">
            We're the current best way to get booze online and safely delivered
            to your location
            </h5>
        </div>
      </main>
    </div>
  )
}
