import Image from 'next/image'
import Button from './components/buttons'

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="w-full h-16 bg-indigo-400 flex items-center justify-evenly px-6">
        <div className="flex flex-1">
          <h1>Sake</h1>
        </div>
        <div className="flex flex-1 justify-evenly">
          <h5>Bar</h5>
          <h5>Collection</h5>
        </div>
        <div className="flex flex-1">
          <Button type="primary">
            sigin in
          </Button>
        </div>
      </header>
      <main></main>
    </div>
  )
}
