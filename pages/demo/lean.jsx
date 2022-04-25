import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./Lean.module.scss";
import Fade from "react-reveal/Fade";
const items = [
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
        />
      </svg>
    ),
    title: "MVP builder",
    question: ["Do you have an idea that may turn into a great business?"],
    service: {
      title: "We have successfully helped our clients to: ",
      listService: [
        "Develop their ideas into MVPs to quickly test potential markets",
        "Demonstrate MVPs to their business partners/investors and gain financial confidence",
        "Build up solid technical foundations for further development.",
      ],
    },
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 13v-1m4 1v-3m4 3V8M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z"
        />
      </svg>
    ),
    title: "Technical Solutions",
    question: [
      "Are you looking for a technical solution to launch your startup?",
      "Are you expanding your business and wish to enforce the capacity of your existing technical system?",
    ],
    service: {
      title:
        "We have a wide range of experience in developing or upgrading our clients’ IT systems to cater for their business needs at competitive prices.",
      listService: [],
    },
  },
  {
    logo: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-10 w-10"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"
        />
      </svg>
    ),
    title: "Internet of Things",
    question: [
      "Are you looking for a platform to help you monitor and interact with your business anywhere and anytime?",
    ],
    service: {
      title: "We are providing IT services to",
      listService: [
        "Develop platforms connecting all of your monitoring devices and",
        "Provide you with real-time data, powerful reporting and interactive dashboards for your businesses.",
      ],
    },
  },
];

function LeanPage(props) {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  const [tab, setTab] = useState("MVP builder");
  const activeClass = "font-bold opacity-100";
  return (
    !isSSR && (
      <div
        className={`relative flex flex-row space-x-10 text-white px-40 py-10 min-h-screen bg-no-repeat bg-fixed bg-top bg-cover overflow-hidden w-full bg-[url('https://images.unsplash.com/photo-1492161587417-3562f41c95fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80')]   `}
      >
        <Fade left>
          <div className="w-1/2 space-y-3">
            <img
              src="https://leansoft-inc.com/static/logo_home_page-9cb02d768e513b18f6241112bc6e5888.png"
              alt=""
              className="w-[170px] h-[150px]"
            />
            <p className="text-2xl">
              LeanSoft is a Vietnam-based software company providing information
              technology services to enable our clients to capture their market
              opportunities.
            </p>
            <h3>We work with our clients to:</h3>
            <ul className="list-disc pl-10 space-y-3">
              <li>
                Turn their ideas into MVPs to test the potential markets and to
                attract investment
              </li>
              <li>
                Design and develop practical IT solutions to launch their
                startups
              </li>
              <li>Upgrade their IT systems to facilitate business growth</li>
              <li>
                Develop Internet of Things (IoT) platforms to monitor and
                interact with businesses anywhere and anytime.
              </li>
            </ul>

            <h3>Working with our clients, we are committed to:</h3>
            <ul className="list-disc pl-10 space-y-3">
              <li>Having open communication</li>
              <li>Being flexible during the development process</li>
              <li>
                Dedicating our time to learn and understand their business
                needs.
              </li>
            </ul>
          </div>
        </Fade>

        <Fade right>
          <div className="w-1/2 text-black space-y-7">
            <div className="controler relative bg-white  min-w-full text-xl space-y-2 px-7 py-4 rounded-t-xl">
              <h3 className="py-2 text-blue-700 font-bold">Service</h3>
              <div className="flex flex-row justify-between">
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={`space-y-2 cursor-pointer items-center flex flex-col opacity-50 ${
                      tab === item.title && activeClass
                    }`}
                    onClick={() => setTab(item.title)}
                  >
                    {item.logo}
                    <h3 className="text-lg  ">{item.title}</h3>
                    {item.title === tab && (
                      <div
                        className={"absolute  top-[135px] w-8 h-4 text-white"}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16 17l-4 4m0 0l-4-4m4 4V3"
                          />
                        </svg>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="result bg-white  min-w-full px-7 py-4 space-y-2">
              {items.map(
                (item, index) =>
                  item.title === tab && (
                    <div key={index} className="space-y-3">
                      <h1 className="text-xl font-bold text-blue-700">
                        {item.title}
                      </h1>
                      <p>{item.question.map((ques) => ques)}</p>
                      <h1>{item.service.title}</h1>
                      <ul className="pl-10 space-y-3">
                        {item.service.listService.map((service, index) => (
                          <li className="list-disc  " key={index}>
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )
              )}
            </div>
            <div className="bg-white  min-w-full px-7 py-4 space-y-5 rounded-b-xl ">
              <h3 className="text-blue-700 font-bold text-xl ">Contact Us</h3>
              <p className="flex">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>{" "}
                15 Ta My Duat street, Danang city, Vietnam
              </p>
              <p className="flex justify-between">
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                  {"  "}
                  lam@leansoft-inc.com (Mr. Lam)
                </div>
                <div className="flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                  0975850012
                </div>
                <div className="opacity-50">© 2022 LEANSOFT</div>
              </p>
            </div>
          </div>
        </Fade>
      </div>
    )
  );
}

export default LeanPage;

// /* <div className="relative h-[100vh] bg-top w-full -z-10">
//           <Image
//             src="https://images.unsplash.com/photo-1492161587417-3562f41c95fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
//             alt=" "
//             layout="fill"
//             objectFit="cover"
//           />
//         </div>
//         {/*left*/}
//         <div className="z-1">
//           <div>left</div>
//           {/*right */}
//           <div>right</div>
//         </div>
// */
