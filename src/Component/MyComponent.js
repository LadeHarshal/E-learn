import * as React from "react";

export default function MyComponent(props) {
  return (
    <div className="bg-white flex flex-col items-center border-2 border-solid border-black">
      <div className="z-[1] w-full max-w-[1474px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[45%] max-md:w-full max-md:ml-0">
            <span className="flex flex-col mt-4 px-5 max-md:max-w-full max-md:mt-10">
              <div className="self-stretch max-md:max-w-full">
                <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                  <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
                    <img
                      loading="lazy"
                      srcSet="..."
                      className="aspect-[0.86] object-contain object-center w-[102px] overflow-hidden shrink-0 max-w-full grow max-md:mt-5"
                    />
                  </div>
                  <div className="flex flex-col items-stretch w-[79%] ml-5 max-md:w-full max-md:ml-0">
                    <div className="text-black text-center text-4xl font-bold my-auto max-md:mt-10">
                      E-Learning Platform
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-sky-400 text-6xl font-bold self-stretch mt-20 max-md:max-w-full max-md:text-4xl max-md:mt-10">
                Let The Journey
                <br />
                For a better <span className="text-sky-400">Learning</span>
                <br />
                begin now
              </div>
              <div className="text-zinc-500 text-xl font-bold self-stretch mt-6 max-md:max-w-full">
                Click the below button to start registration.
              </div>
              <div className="justify-center text-neutral-900 text-center text-xl font-medium whitespace-nowrap ml-6 mt-16 self-start max-md:ml-2.5 max-md:mt-10">
                Get Started
              </div>
            </span>
          </div>
          <div className="flex flex-col items-stretch w-[55%] ml-5 max-md:w-full max-md:ml-0">
            <div className="bg-sky-400 flex grow flex-col items-stretch w-full pl-16 pr-4 py-11 border-2 border-solid border-black max-md:max-w-full max-md:mt-10 max-md:pl-5">
              <span className="flex items-start justify-between gap-5 pr-14 max-md:max-w-full max-md:flex-wrap max-md:pr-5">
                <div className="text-white text-xl font-extrabold mt-1.5 self-start">
                  Home
                </div>
                <div className="text-white text-xl font-extrabold mt-2 self-start">
                  Courses
                </div>
                <div className="text-white text-xl font-extrabold mt-1.5 self-start">
                  About Us
                </div>
                <span className="text-black text-base font-semibold whitespace-nowrap bg-stone-50 self-stretch grow justify-center items-stretch pl-6 pr-8 py-5 rounded-2xl max-md:px-5">
                  Contact Us
                </span>
              </span>
              <img
                loading="lazy"
                srcSet="..."
                className="aspect-[0.95] object-contain object-center w-[59px] overflow-hidden self-center max-w-full ml-20 mt-20 max-md:mt-10"
              />
              <span className="bg-white flex items-stretch gap-1.5 mt-36 mb-80 px-3 py-5 rounded-[31px] self-end max-md:my-10">
                <img
                  loading="lazy"
                  srcSet="..."
                  className="aspect-square object-contain object-center w-[30px] overflow-hidden shrink-0 max-w-full"
                />
                <div className="text-black text-lg font-semibold grow whitespace-nowrap mt-2.5 self-start">
                  Enhance your Skills
                </div>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-black self-stretch z-[1] flex w-full flex-col pt-10 pb-7 px-16 items-start max-md:max-w-full max-md:px-5">
        <span className="flex w-[1042px] max-w-full items-stretch justify-between gap-5 ml-24 max-md:flex-wrap">
          <div className="text-white text-center text-2xl font-bold flex-1">
            TOTAL COURSES
            <br />
            150+
          </div>
          <div className="text-white text-center text-2xl font-bold flex-1">
            TOTAL Teachers
            <br />
            150+
          </div>
          <div className="text-white text-center text-2xl font-bold flex-1">
            TOTAL Students
            <br />
            150+
          </div>
        </span>
      </div>
    </div>
  );
}
