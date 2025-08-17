import {Buttons} from "@/components/Buttons";
import { TimelineDemo } from "@/components/TimeLineDemo";

export default function Home() {
  return (
    <div className="text-white ml-2 min-h-screen px-4 sm:px-6 lg:px-8 xl:px-40 py-6 sm:py-10 lg:py-30">
      <section className="max-w-4xl w-full">
        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2">Hi, I&apos;m Sobhan</h1>
          <p className="text-gray-400 text-base sm:text-lg lg:text-lg mb-3 sm:mb-4">
            20, Odisha | Full Stack Engineer
          </p>
          <p className="text-gray-300 max-w-2xl leading-relaxed text-sm sm:text-base lg:text-base">
            I&apos;m a Full Stack Developer with a strong focus on backend engineering and building
            scalable systems. Alongside backend expertise, I also design and develop modern
            GenAI-powered products, turning complex technologies into intuitive and
            user-friendly applications.
          </p>
        </div>
      </section>

      <section className="my-6 sm:my-8 lg:my-10 flex flex-wrap gap-2 sm:gap-3">
        <Buttons />
      </section>

      <section>
        <TimelineDemo />
      </section>
    </div>
  );
}