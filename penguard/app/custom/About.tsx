
import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'

function About() {
  return (
    <section className="w-screen h-fit md:h-screen flex-col items-center justify-center p-10 space-y-24">
        <div className="flex w-full max-w-7xl mx-auto items-center justify-center space-x-4">
          {/* Left box */}
          <div className="border-2 border-purple-600 flex items-center justify-center w-10 h-10">
            <p className="font-semibold text-neutral-800">A</p>
          </div>

          {/* Text and line */}
          <div className="flex items-center w-full space-x-2">
            <h2 className="text-lg font-semibold text-purple-600  whitespace-nowrap">ABOUT US</h2>
            <div className="flex-1 border-t border-purple-600 "></div>
          </div>
        </div>

        <div className="flex flex-col space-y-10 md:space-y-0 md:grid md:grid-cols-2 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-10 flex-col">
            <div className="space-y-10 max-w-md xl:max-w-lg">
              <h2 className="text-3xl lg:text-4xl">Discover Our Journey to <span className='text-purple-600 font-bold'>Safety </span>  Excellence</h2>

              <div className="space-y-14 text-sm xl:text-md">
                <p>
            At PanGuard, we harness real-time technology, community intelligence, and data-driven insights to protect people when it matters most.
            We’re a future-focused safety platform designed for South Africa’s
            realities — where gender-based violence, crime, and slow emergency
            response demand faster, smarter, human-centered solutions.
          </p>
                <p> Our team
            blends mapping intelligence, behavioural science, safety strategy,
            and AI-powered analysis to deliver tools that save time, protect
            lives, and strengthen communities.</p>
              </div>
            </div>
            <div className="w-44 p-0.5 rounded-4xl flex items-center border-2 border-purple-600 space-x-2">
              <div className="rounded-full bg-purple- p-2">
                <ArrowUpRight className="stroke-white" />
              </div>
              <p className="text-black">ABOUT US </p>
            </div>
          </div>

          {/* About Images */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Image Card 1 */}
            <div className="flex flex-col items-center space-y-4">
              <div className="w-[280px] md:w-[400px] h-[360px] md:h-[400px] relative overflow-hidden">
                <Image
                  src="/PANGUARDLOGO.jpg"
                  alt="About Page Image"
                  fill
                  className="object-cover"
                />
              </div>
             
            </div>

           
          </div>
        </div>
      </section>
  )
}

export default About