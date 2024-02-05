import React from "react";

const Resume = () => {
  return (
    <div id="resume" className=" container m-auto   mt-16">
      {/* heading */}
      <div data-aos="fade-up" className="relative mb-5">
        <h3 className=" text-3xl font-black text-gray-400 sm:text-2xl">
          Resume
        </h3>
        <span className="h-[1.1px] right-0 absolute w-[92%] bg-gray-300 block"></span>
      </div>
      <div data-aos="fade-up" className="left flex-1 w-full">
        <p className=" text-gray-700 font-medium w-[100%]">
          Here are my experiences and qualifications.
        </p>
      </div>
      {/* card*/}
      <div className="card-wrapper w-[90%] sm:w-full mt-5 flex md:flex-col sm:gap-5 mx-auto ">
        <div className="left flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-800">
              Experience
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-red-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Jr. Quality Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  At Trigo Quality Solution Pune.
                </span>
                <span className=" text-[.9rem] font-semibold text-red-800 sm:text-base">
                  MAY 2021 To SEP 2021
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                As a Junior Quality Engineer at Trigo Quality Solutions in Pune from May 2021 
                to September 2021, I played a crucial role in ensuring and enhancing the quality 
                standards of the company's products or services. Engaging in various aspects of the
                quality control process, my responsibilities included conducting thorough inspections, 
                implementing quality assurance protocols, and collaborating with cross-functional teams 
                to identify and address potential issues.
                </p>
              </div>
            </div>
            <br />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 sm:gap-1 border-2 border-red-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  Full Stack Software Testing 
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Pathglow.
                </span>
                <span className=" text-[.9rem] font-semibold text-red-800 sm:text-base">
                  SEP 2022 To DEC 2022
                </span>
                <p className=" text-[.9rem] text-justify break-words text-gray-500">
                
                  Undertaking the Full Stack Software Testing course at Pathglow from 
                  September 2022 to December 2022 provided me with comprehensive insights
                  into the intricate domain of software testing. Throughout the duration of
                  the program, I acquired a diverse skill set encompassing both manual and 
                  automated testing methodologies, test planning, defect tracking, and quality
                  assurance processes
                </p>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="right flex-1 flex items-center justify-center">
          <fieldset
            data-aos="zoom-in"
            className=" w-[80%] p-5 py-12 sm:py-8 sm:w-full sm:p-2"
          >
            <legend className=" w-auto ml-[50%] translate-x-[-50%] border-2 border-gray-200 rounded-3xl py-1 px-8 font-semibold text-xl text-red-800">
              Education
            </legend>
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-red-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                  B.Tech, Mechanical Engineer
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Mumbai University
                </span>
                <span className=" text-[.9rem] font-semibold text-red-800 sm:text-base">
                  Year 2021 CGPA - 6.47
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                "Dynamic B.E. in Mechanical Engineering graduate from Mumbai 
                University, boasting a competitive 6.47 CGPA. Fueled by a passion 
                for innovation, my academic journey equipped me with a robust understanding 
                of mechanical principles. Eager to apply my knowledge and skills to drive cutting
                -edge solutions in the dynamic realm of mechanical engineering."
                </p>
              </div>
            </div>
            <br /><br />
            <div className=" relative">
              {/* design */}
              <div className="design flex absolute left-[-150px] top-1/2 items-center rotate-[90deg] sm:left-[-160px] ">
                <div className="c1 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
                <div className="line w-[230px] bg-gray-300 h-[2px] sm:w-[250px]"></div>
                <div className="c2 w-[12px] h-[12px] rounded-full bg-white border-2 border-red-800"></div>
              </div>
              {/* design */}
              <div className=" flex flex-col gap-1 border-2 border-red-800 shadow-[0px_0px_16px_1px_rgba(0,0,0,0.1)] p-3 rounded-lg">
                <h1 className="text-[1.4rem] font-semibold sm:text-xl">
                HSC(Science)
                </h1>
                <span className=" text-[.9rem] font-semibold text-gray-500 sm:text-base">
                  Maharashtra StateBoard  
                </span>
                <span className=" text-[.9rem] font-semibold text-red-800 sm:text-base">
                  Year  2014 Score - 55%
                </span>
                <p className=" text-[.9rem] text-justify text-gray-500">
                "Completed Higher Secondary Education (HSC) with a Science specialization 
                from the Maharashtra State Board in 2014, achieving a 55% score. This
                educational background laid the groundwork for a strong foundation in 
                scientific principles and problem-solving skills."
                </p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Resume;
