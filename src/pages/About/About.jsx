import HeroImg from "@/assets/images/hero.jpg";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h2 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Developer, Innovator, Problem Solver
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block"
                  alt="payments illustration"
                  width={1207}
                  height={929}
                />
              </div>
            </div>

            <div className="relative space-y-4">
  <p className="text-white">
    Hello! I'm Sushant Joshilkar, a passionate full-stack developer and tech enthusiast,
    dedicated to building impactful software solutions that solve real-world problems.{" "}
    <span className="font-bold text-white">
      As the creator of multiple innovative tech projects and research papers
    </span>
    , I strive to blend creativity with cutting-edge technology.
  </p>
  <p className="text-white">
    My focus is on delivering scalable, user-centric applications across domains like
    healthcare, automation, and job-tech. I’m constantly exploring new tools and technologies
    to enhance my skills and contribute to meaningful innovations.
  </p>

  <div className="pt-6">
    <blockquote className="border-l-4 border-gray-300 pl-4">
      <p className="text-white">
        I'm a lifelong learner and builder, passionate about solving complex challenges with code.
        Through my journey, I’ve built systems ranging from smart IoT robots to AI-powered career
        platforms. I believe in the power of technology to transform lives and strive to make a
        lasting impact in the developer community.
      </p>

      <div className="mt-6 space-y-3">
        <cite className="block font-medium text-white">
          Sushant Joshilkar {/*,Full-Stack Developer & Innovator */}
        </cite>
      </div>
    </blockquote>
  </div>
</div>

          </div>
        </div>
      </section>
    </>
  );
}
