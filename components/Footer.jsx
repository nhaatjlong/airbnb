import React from "react";
const dataFooter = [
  {
    head: "About",
    child: [
      "Newsroom",
      "Learn about new features",
      "Letter from our founders",
      "Careers",
      "Investors",
      "Airbnb Luxe",
    ],
  },
  {
    head: "Hosting",
    child: [
      "Try hosting",
      "AirCover: protection for Hosts",
      "Explore hosting resources",
      "Visit our community forum",
      "How to host responsibly",
    ],
  },
  {
    head: "Community",
    child: [
      "Airbnb.org: disaster relief housing",
      "Support Afghan refugees",
      "Combating discrimination",
    ],
  },
  {
    head: "Support",
    child: [
      "Help Center",
      "Safety information",
      "Cancellation options",
      "Our COVID-19 Response",
      "Supporting people with disabilities",
      "Report a neighborhood concern",
    ],
  },
];
function Footer(props) {
  return (
    <footer className=" max-w-7xl mx-auto p-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {dataFooter.map((section, index) => {
        return (
          <div key={index} className="border-b py-3 border-b-black-400">
            <h5 className="font-bold text-red-400 text-xl">{section.head}</h5>
            {section.child.map((p) => (
              <p
                className="opacity-80 cursor-pointer hover:border-b border-b-black w-fit "
                key={p.index}
              >
                {p}
              </p>
            ))}
          </div>
        );
      })}
    </footer>
  );
}

export default Footer;
