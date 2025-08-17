import Buttons from "@/components/Buttons";
import { TimelineDemo } from "@/components/TimeLineDemo";

export default function Home() {
  return (
    <div className="text-white min-h-screen my-30 mx-40 ">
      <section className="max-w-4xl w-full px-15">
        <div>
          <h1 className="text-4xl font-bold mb-2">Hi, I&apos;m Sobhan</h1>
          <p className="text-gray-400 text-lg mb-4">
            20, Odisha | Full Stack Engineer
          </p>
          <p className="text-gray-300 max-w-2xl leading-relaxed">
            I&apos;m a Full Stack Developer with a strong focus on backend engineering and building
            scalable systems. Alongside backend expertise, I also design and develop modern
            GenAI-powered products, turning complex technologies into intuitive and
            user-friendly applications.
          </p>
        </div>
      </section>

      <section className="my-10 mx-9 flex flex-wrap gap-3 px-6">
        <Buttons />
      </section>

      <section className="">
        <TimelineDemo />
      </section>
    </div>
  );
}
