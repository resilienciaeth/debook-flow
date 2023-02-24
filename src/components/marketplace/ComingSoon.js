import React from "react";

export default function Comingsoon() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl nm:py-24 px-6 py-32 nm:px-8">
        <div className="relative isolate overflow-hidden px-6 pt-16 shadow-2xl rounded-3xl sm:px-16 md:pt-24 nm:flex nm:gap-x-20 nm:px-24 nm:pt-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-y-1/2 left-full -ml-80 lg:left-1/2 lg:ml-0 lg:translate-y-0 lg:-translate-x-1/2"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#759c1415-0410-454c-8f7c-9a820de03641)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient
                id="759c1415-0410-454c-8f7c-9a820de03641"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(512 512) rotate(90) scale(512)"
              >
                <stop stop-color="#ff6600"></stop>
                <stop offset="1" stop-color="#ffaf7a"></stop>
              </radialGradient>
            </defs>
          </svg>

          <div className="mx-auto max-w-md text-center nm:mx-0 nm:flex-auto nm:py-32 nm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white sm:text-4xl">
              One debook
              <br />
              One community
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-700 ">
              DEBOOK APP is where every book becomes alive. Readers will be able
              to chat with each other and add value to the book, sharing their
              creative ideas on top of the debooks. Authors get to know their
              audience and have the opportunity to learn with and from them.
              That and much more coming soon.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6 nm:justify-start">
              <a
                href="https://00tldot4xp4.typeform.com/to/r0DhrkDH"
                className="rounded-md bg-black px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-gray-100 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Publish a debook
              </a>
              <a
                href="https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5"
                className="text-base font-semibold leading-7 text-black"
              >
                Read our Manifesto <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>

          <div className="relative mt-16 h-80 nm:mt-8">
            <img
              className="absolute top-0 left-0 w-[400px] nm:w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"
              src="https://res.cloudinary.com/drxuutjwr/image/upload/v1674406641/63cd6aa3447a3a680d53f37d_rvzmof.jpg"
              alt="App screenshot"
              width="1824"
              height="1080"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
