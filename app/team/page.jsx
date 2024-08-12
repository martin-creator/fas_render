"use client";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import SectionHeading from "@/components/SectionHeading";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaLinkedin, FaSquareXTwitter } from "react-icons/fa6";
import dummyUser from "../../public/teamImg/martin_lubowa.png";

const TeamPage = () => {
  const coreTeam = [
    {
      name: "Martin Lubowa",
      position: "Co-Founder | Director of Finance & Operations",
      bio: " Martin Lubowa is a graduate of the African Leadership Academy and a social entrepreneur passionate about leveraging technology to merge science and entrepreneurship, creating enterprises that address pressing healthcare and education challenges in Africa. He has served as the co-founder and managing director of the Africa Students Support Network (AFRISSUN), a community-based non-profit organization in Uganda that provides scholarships and entrepreneurship training to disadvantaged students. Martin also co-founded Primetel, a telemedicine company in Tanzania that utilizes USSD technology to provide healthcare services, starting with the Moduli region. Additionally, he has worked as an implementation lead for Docta, a telemedicine application developed in collaboration with VSEE Health, a US-based company. This initiative aims to ensure healthcare access for over 30 million people in Cameroon and the Sahel region.",
      img: "/teamImg/martin_lubowa.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Daniel Zhang",
      position: "Co-Founder | Director of Technology & Partnerships",
      bio: "Daniel Zhang is currently an MD/PhD candidate at UCSF, having previously graduated from MIT with a Bachelors of Science in Biology and conducting a Fulbright Fellowship in Utrecht, Netherlands. He is passionate about STEM education, in particular helping those from underrepresented background, and has been involved in multiple outreach efforts including dynaMIT and Global Teaching Labs. In his free time, he enjoys playing basketball and exploring new places.",
      img: "/teamImg/daniel.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Robert Kyomuhendo",
      position: "Co-Founder | Director of Admissions & Outreach",
      bio: " Robert is a rising young medical Doctor who graduated from Gulu University medical school, Uganda. He is a diverse-minded individual passionate about research and entrepreneurship, sharing ideas with like-minded individuals to craft solutions to community problems. While at campus, Robert worked on research projects on such topics as antimicrobial resistance, reproductive health and clinical practice. He also served and collaborated with various organisations like Rotary, Niteo Africa to create social impact. Notably, he served in different capacities including the 19th Students Guild, Federation of Uganda Medical Students Association (FUMSA) and as the Gulu University Campus Director for Millennium fellowship  class of 2020.",
      img: "/teamImg/robert.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Sadikh Mbengue",
      position: "Director of Learning & Development",
      bio: " Sadikh is a dual bachelors' degree holder in Electronics and Electrical Engineering, and Global Challenges with a focus on Education and Economics. Gaps in Engineering education he identified in Senegal inspired his interest in Education Curriculum Design. He has designed successful learning sessions for facilitators at the African Leadership University, completed curricula development in entrepreneurship and leadership for some youth-based organisations in Nigeria. His mission is to enable learners to gain practical experiences by bringing real-life projects into the classroom.",
      img: "/teamImg/sadikh.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jimmy Nkaiwuatei",
      position: "Research Manager",
      bio: " Jimmy Nkaiwuatei is a Health Research Scientist with a focus on infectious diseases and antimicrobial resistance (AMR). Also, he has a great interest in vaccine/drug research and development as a sustainable solution to antimicrobial-resistant infectious diseases. As an AMR Champion, Jimmy has spearheaded the initiation and implementation of several antimicrobial resistance stewardship programs in various countries across Africa, through the Students Against Superbugs (SAS) Africa Network. He looks forward to building the capacity of emerging research scientists across Africa to promote scientific research and innovation for the provision of effective and context-specific solutions to challenges inflicting the continent.Jimmy holds a Bachelor of Science in Biochemistry and Molecular Medicine from Jomo Kenyatta University of Agriculture and Technology, Kenya, and a graduate of the Young African Leaders Initiative (YALI), a United States signature’s effort to invest in the next generation of African leaders.",
      img: "/teamImg/jimmy.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const advisorsTeam = [
    {
      name: "BRUCE WALKER, MD",
      position:
        "Founding Director of the Ragon Institute of MGH, MIT and Harvard",
      bio: " Dr. Bruce D. Walker is a physician-scientist and T cell immunologist, the founding Director of the Ragon Institute of MGH, MIT and Harvard, a Howard Hughes Medical Institute investigator, a Professor of Medicine at Harvard Medical School, and Professor of the Practice of Medicine at MIT.  He is also Adjunct Professor of Medicine at the Nelson Mandela School of Medicine at the University of KwaZulu-Natal in Durban, South Africa, where he has helped catalyzed the creation of two research institutes. His laboratory studies T cell responses to chronic viral infections, using HIV as a model system.",
      img: "/teamImg/bruce.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Elizabeth Marincola",
      position:
        "Senior Advisor for Science Communications and Advocacy at the Science for Africa Foundation",
      bio: "Elizabeth Marincola is Senior Advisor for Science Communications and Advocacy at the Science for Africa Foundation, after serving in a similar role at the African Academy of Sciences, since 2016. She is publisher of Open Research Africa, the SFA Foundation-affiliated open access publishing platform that offers rapid, peer reviewed, transparent and indexed science publication. Marincola was CEO of the major open access publisher PLOS, after serving as a long time PLOS board member. From 2005-2013, Marincola was President of the Society for Science & the Public (now the Society for Science) and Publisher of Science News magazine. She was Executive Director of the American Society for Cell Biology and the Coalition for Life Sciences, and Publisher of Molecular Biology of the Cell, from 1991-2005. She served on the founding board of PubMed Central and on the founding Board and as Chair of the Board of eLife. As an international leader in non-profit management, open access publishing, science advocacy, communications, education and public engagement, Marincola has published scores of peer reviewed articles and has been appointed to numerous US and EU advisory commissions on open science. She currently serves on the Advisory Board of the Johns Hopkins Bloomberg School of Public Health Center for Humanitarian Health, and on the Board of Directors of Undue Medical Debt. She received her bachelors and MBA degrees from Stanford University.",
      img: "/teamImg/elizabeth_m.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Elizabeth Scott",
      position: "Science Educator",
      bio: "Elizabeth entered the world of science at Cornell University, where she double majored in Genetics and Biology & Society. She went on to explore research in genetics and immunochemistry labs. Elizabeth continued her study with a PhD in Immunology from the Tufts University School of Graduate Biomedical Sciences. She has taught biology courses for master’s degree candidates, undergraduates, and high school students - she was also a full-time high school biology and physics teacher for many years. Elizabeth’s work as an education consultant for the New Jersey Center for Teaching and Learning allowed her to combine her interests in global health, immunology, and education. She helped propose and fulfill contracts in educational development for Lesotho, Malawi, Nigeria, and Rwanda. She has written and contributed to a variety of biology courses including Living Environment (a first course in biology), a health curriculum for Malawi high schools, an online version of AP Biology, and The Molecular Biology of Cancer Cells for upper-level students. Elizabeth’s current passion is working on a forest enhancement project in Massachusetts, which has broadened her interests to include conservation ecology. In her spare time, Elizabeth swims, hikes and bikes with friends and family, and loves to travel. ",
      img: "/teamImg/elizabeth_s.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    // {
    //   name: "Teng-Leong Chew",
    //   position: "Director of Advanced Imaging at Janelia",
    //   bio: "After obtaining a BS in Biochemistry at the University of Wisconsin-Madison, Chew went to St. Louis University to pursue his PhD, where he worked to understand the role of myosin II regulation in endothelial cells. Realizing that conventional biochemical methods could not address the spatial and temporal regulation of signaling pathways inside the cell, Chew embarked on his postdoctoral research in the laboratory of Rex Chisholm by developing fluorescent biosensor to simultaneously monitor the enzymatic activity and localization pattern of myosin light chain kinase in vivo. In 2002, Chew became the director of the Center for Advanced Microscopy at Feinberg School of Medicine, Northwestern University in 2002, and led the facility to be recognized as one of the few selected Nikon Imaging Centers of Excellence in the world. At the same time, his lab began devising methods to engineer three-dimensional, lumenized vascular network capable of dynamic signaling read-out. This approach ultimately allowed Chew and his team to dissect the regulatory signals in the opposing endothelial cells during active tumor diapedesis – providing a rare glimpse into the signaling cascade during tumor invasion, not from the perspective of the cancer cell, but from the underlying endothelium. In 2009, Chew was further appointed to the position of Director for University Imaging Resources at Northwestern, overseeing the overarching strategy in building integrated imaging infrastructure across all seven imaging centers and cores within the university.",
    //   img: "/teamImg/leong.png",
    //   linkedin: "https://www.linkedin.com/in/john-doe/",
    //   twitter: "https://twitter.com/johndoe",
    // },
    {
      name: "Thi Nguyen",
      position: "Educator and Storytelling Coach for scientists",
      bio: " Dr. Thi Nguyen is an educator and storytelling coach for scientists. She draws on training in neuroscience and psychology, and her cultural background, to create resources to help scientists prepare for versatile career paths (InterSECT Job Simulations and Business Concepts for Life Scientists, a course hosted by iBiology). She has worked with over 20 universities and nonprofits. Thi is also a national speaker on strategic and inclusive scientific leadership. In Greater St. Louis, she supports local nonprofits in their work towards equitable education and workforce, and enjoys nature walks with her family. She earned a PhD in Neuroscience from the University of Texas Southwestern.",
      img: "/teamImg/thi.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Godwin Ogbole",
      position: " Neuroradiologist and Professor of Radiology",
      bio: "A Neuroradiologist and Professor of Radiology at Nigeria’s largest teaching hospital, Godwin Ogbole is dedicated to developing flexible, patient-centered imaging solutions for resource-constrained environments in Africa. Serving as a team leader for the Stroke Investigative and Educational Research Network (SIREN), the largest-ever stroke study in Africa spanning 15 sites in West Africa, the goal is to accelerate the identification and mitigation of stroke risks. As the Principal Investigator of a Chan Zuckerberg Initiative (CZI) grant, Ogbole's focus is on creating platforms for mentorship for the next generation of African researchers as well as enhance MRI capabilities and intelligent imaging systems in Africa through collaborative efforts with institutions in the Global North, ultimately advancing clinical translational neuroscience research in Africa.",
      img: "/teamImg/godwin.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Wade Zamechek",
      position:
        "Vice President of Development at the African Leadership Academy",
      bio: "Wade Zamechek is the Vice President of Development at the African Leadership Academy (ALA) in Johannesburg, South Africa. ALA focuses on providing educational programs for young Africans to develop the next generation of ethical and entrepreneurial leaders. Wade brings over 20 years of nonprofit experience, having worked with organizations like Village Health Works, Covenant House, Salvation Army, and New York Blood Center. He holds a Bachelor’s Degree from New York University and a Master’s Degree in Nonprofit Management from the New School University.",
      img: "/teamImg/wade.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "DON ETEGHWIA",
      position: "Ambassador of the AfricaBerlin Network",
      bio: " Don Eteghwia is deeply embedded in the tech startup ecosystem at the intersection of Berlin and Africa. He holds a B.A. in Product Management from CODE University of Applied Sciences in Berlin and raised capital to build his previous companies during his studies. Beyond that, he founded the startup accelerator Leadwood, which connects African startups with global stakeholder alliances to help them scale. Today, he is an Ambassador of the AfricaBerlin Network - a group of representatives, bridge builders, and policymakers in Africa and Europe with the mission of creating connections and partnerships to strengthen the global entrepreneurial ecosystem.",
      img: "/teamImg/don.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const facilitatorsTeam = [
    {
      name: "Felix Bongomin",
      position: "Medical Doctor",
      bio: " Dr. Bongomin is an Ugandan trained physician with dual specialization in internal medicine and medical mycology. He received his training from Gulu University, The University of Manchester, and Makerere University. Bongo is a lecturer at Gulu University Medical School. He has published widely in the areas of infectious diseases epidemiology, COVID-19, fungal diseases, and TB, with over 100 peer-reviewed publications cited over 2,000 times. He is a fellow of European Confederation of Medical Mycology and a member of the World Health Organization Expert Committee on Priority Fungal Pathogens",
      img: "/teamImg/bongo.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Ronald Olum",
      position: "Medical Doctor",
      bio: " Ronald Olum is a pre-intern medical doctor who has recently completed Bachelor of Medicine and Bachelor of Surgery at Makerere University, Uganda. He does research in infectious diseases, NCDs, mental health, adolescent, and maternal health. Over the past 2 years, Ronald has contributed to 40 research articles in peer-reviewed journals which have been cited over 500 times. Ronald has recently served as a Guest Editor at the Journal of Adolescent and has been appointed as a Guest Editor for Frontiers in Epidemiology Journal in addition to peer-reviewing for over 20 international journals. Ronald has also participated in technical consultancy for the WHO Department of Sexual and Reproductive Health, and currently serves as a member of a Technical Advisory Group with UNESCO. He is passionate about mentorship and has since collaborated with over 50 undergraduate medical students",
      img: "/teamImg/olum.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Kanyike Andrew Marvin",
      position: "Medical Doctor",
      bio: " Dr. Kanyike Andrew Marvin is a medical doctor and early career researcher currently working at Mengo Hospital as a research associate and general practioner. He has additional training in monitoring and evaluation, and implementation science, from the University of Washington. He is a fellow at the  HIV, Infectious Disease, and Global Health Implementation Research Institute (HIGH IRI), Center for Implementation and Dissemination research, Institute of Public Health  Washington University, St Louis. He is also an esteemed member and early career researcher grant awardee of the Royal Society of Tropical Medicine and Hygiene. He is also an almnus and community action grant awardee of the Aspire Institute leaders’ program founded at Harvard university. He is also a member of the Bristish Society for Antimicrobial Chemotherapy. Dr. Kanyike is a civic, he is a co-founder and general secretary of Healtorch Foundation Uganda, a non-profit health organization in Uganda. He also serves as the Director of research support and dissemination at Communities for Childbirth International, a health organization that strives to improve maternal health in Eastern Uganda. He is the team lead of the NCD initiative at Way Forward Youth Africa Limited. Dr. Kanyike also provides research consultancy services. He is a dedicated leader, service-oriented individual, and a Rotaractor. Dr. Kanyike is passionate about global public health research and civic leadership.",
      img: "/teamImg/marvin.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "YVES JACKET NSAVYIMANA",
      position: "Medical Doctor",
      bio: " Yves is currently a 6th year medical student at the National University of Burundi and Intern at the University Teaching Hospital of Kamenge (CHUK). He served as Director of the Standing Committee on Human Rights and Peace (SCORP) within the medical students association of Burundi (ABEM-Burundi). Furthermore, he has recently been elected as a National Member Organization President of ABEM-Burendi within the International Federation of Medical Students’ Association, and currently coordinating a national project on Tuberculosis. He is also heavily involved in various ambassadorial efforts, such as serving as a Planetary Health Campus Ambassador and helps coordinate YAGA Burundi’s partnership with YouLead Africa. As an avid researcher, he has presented at the East African Health Scientific Conference and has multiple accepted research abstracts.",
      img: "/teamImg/yves.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Jean Bertrand IRAKOZE",
      position: "Medical Doctor",
      bio: " Jean Bertrand IRAKOZE is a young Medical Doctor graduated from the University of Burundi  2020. From 2017 after graduating in Global Health Courses  , he manifested a particular interest in Reseach . He served as National officer on Medical education within Local medical students association and member of Incision Burundi.  Jean Bertrand is among authors of two works and one of them is a journal article and an other is a abstract presented in Conference. Jean Bertrand is currently a resident student at the Kamenge Teaching Hospital in the internal medicine department and still passionate with Reseach. ",
      img: "/teamImg/betrand.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },

    {
      name: "TONY PAN",
      position: "Waymo Software Engineer, University of Michigan",
      bio: "Tony is a software engineer at Waymo, formerly the Google self-driving car project. He builds and maintains services that enhance the safety and scalability of autonomous vehicles. He is passionate about improving people's lives with robotics technology. Outside of work, he enjoys hiking, cooking, and watching anime.",
      img: "/teamImg/pan.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
    {
      name: "Shepherd Kruse",
      position: "Junior at the United States Air Force Academy",
      bio: "Shepherd Kruse is a junior at the United States Air Force Academy in Colorado Springs, CO studying Astronautical engineering. Shepherd has started numerous programs including Blue Horizon Rocketry and BioBorn, A Grassroots Approach to Transform PPE. Shepherd has used high altitude balloons to research the effect of magnetism on radiation levels, collect microbial samples for NASA, and filmed the 2017 solar eclipse from 80,000 ft. Currently, he is working on a global communication network utilizing high altitude balloons and the Internet of Things.",
      img: "/teamImg/sheperd.png",
      linkedin: "https://www.linkedin.com/in/john-doe/",
      twitter: "https://twitter.com/johndoe",
    },
  ];
  const [tabState, setTabState] = useState("core");
  // const [modalStates, setModalStates] = useState(
  //   Array(coreTeam.length).fill(false),
  //   Array(advisorsTeam.length).fill(false),
  //   Array(facilitatorsTeam.length).fill(false)
  // );
  const [coreModalStates, setCoreModalStates] = useState(
    Array(coreTeam.length).fill(false)
  );
  const [advisorModalStates, setAdvisorModalStates] = useState(
    Array(advisorsTeam.length).fill(false)
  );
  const [facilitatorModalStates, setFacilitatorModalStates] = useState(
    Array(facilitatorsTeam.length).fill(false)
  );
  return (
    <div>
      <div className="bg-primary sticky top-0 left-0 h-1/2 flex flex-col w-full">
        <NavigationBar />
      </div>
      {/* hero sect */}
      <div className="bg-primary h-1/2 flex flex-col items-center gap-8 justify-center first:w-full">
        <div className="flex w-full justify-center pt-12">
          <p className="text-5xl text-tertiary font-bold">Our Team</p>
        </div>
        <div className="w-[60%] text-center text-lightGray">
          Future African Scientist is led by a team of committed young
          entrepreneurs and scientists, supported by an advisory board
          comprising renowned scientists, educators, non-profit professionals,
          and entrepreneurs. Together, they bring a wealth of experience to
          provide the best services to young people.
        </div>
        <div className="text-tertiary text-lg flex gap-4 pb-16">
          <button
            onClick={() => {
              setTabState("core");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "core" ? "font-bold underline" : ""
            }`}
          >
            Core Team
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("advisors");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "advisors" ? "font-bold underline" : ""
            }`}
          >
            Advisors
          </button>
          <div className="border-l border-l-tertiary" />
          <button
            onClick={() => {
              setTabState("facilitators");
            }}
            className={`cursor-pointer hover:scale-110 transition duration-300 ease-in-out ${
              tabState === "facilitators" ? "font-bold underline" : ""
            }`}
          >
            Course Facilitators
          </button>
        </div>
      </div>
      {/* body */}
      <div>
        {tabState === "core" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title="Core Team" Bg="light" />

              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full h-2/4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
                {coreTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...coreModalStates];
                        newModalStates[index] = !newModalStates[index];
                        setCoreModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md  h-full w-full"
                        width={1000}
                        height={600}
                        // fill="contain"
                        src={member.img}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        {/* <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        coreModalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          coreModalStates[index] === false ? "hidden" : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow overflow-y-scroll py-4  w-[80%] md:w-1/2 h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="w-[150px] h-[150px] overflow-hidden rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={500}
                                    height={500}
                                    // fill="contain"
                                    src={member.img}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                {/* <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div> */}
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [...coreModalStates];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setCoreModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                                {member.bio}
                              </p>
                            </div>
                            {/* <!-- Modal footer --> */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tabState === "advisors" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title=" Advisors" Bg="light" />
              {/* <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aliquam. Beatae dignissimos voluptate suscipit
                maiores aliquam dolor asperiores atque quo amet qui libero
                magni, nemo exercitationem ipsam, ex esse illum veritatis sequi
                expedita. Minus consequatur amet excepturi sequi et error, ad
                fugit explicabo voluptas corporis tenetur provident hic
                accusantium quisquam!
              </p> */}
              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {advisorsTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...advisorModalStates];
                        newModalStates[index] = !newModalStates[index];
                        setAdvisorModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md w-full"
                        width={1000}
                        height={600}
                        // fill="contain"
                        src={member.img}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        {/* <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        advisorModalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          advisorModalStates[index] === false ? "hidden" : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow overflow-y-scroll py-4 w-[92%] md:w-1/2 h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="w-[150px] h-[150px] overflow-hidden rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={500}
                                    height={500}
                                    // fill="contain"
                                    src={member.img}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                {/* <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div> */}
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [
                                    ...advisorModalStates,
                                  ];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setAdvisorModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400">
                                {member.bio}
                              </p>
                            </div>
                            {/* <!-- Modal footer --> */}
                            {/* <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                          I accept
                        </button>
                        <button
                          data-modal-hide="default-modal"
                          type="button"
                          className="ms-3 text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        >
                          Decline
                        </button>
                      </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tabState === "facilitators" && (
          <div>
            <div className="bg-backgroundLight flex flex-col items-center justify-center pt-8">
              <SectionHeading Title=" Past" Bg="light" />
              {/* <p className="text-center w-[80%] md:w-1/2 mt-4 text-dimGray">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident, aliquam. Beatae dignissimos voluptate suscipit
                maiores aliquam dolor asperiores atque quo amet qui libero
                magni, nemo exercitationem ipsam, ex esse illum veritatis sequi
                expedita. Minus consequatur amet excepturi sequi et error, ad
                fugit explicabo voluptas corporis tenetur provident hic
                accusantium quisquam!
              </p> */}
              {/* Images */}

              <div className="mt-8 mb-12 px-24 w-full grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {facilitatorsTeam.map((member, index) => (
                  <div key={index}>
                    {/* visible part */}
                    <div
                      onClick={() => {
                        const newModalStates = [...facilitatorModalStates];
                        newModalStates[index] = !newModalStates[index];
                        setFacilitatorModalStates(newModalStates);
                      }}
                      className="bg-white cursor-pointer w-full col-span-1 overflow-hidden rounded-md shadow-lg"
                    >
                      <Image
                        className="rounded-t-md w-full"
                        width={1000}
                        height={600}
                        // fill="contain"
                        src={member.img}
                        alt="image of a black professional"
                      />

                      <div className="flex justify-between items-center p-4">
                        <div className="flex flex-col">
                          <h5 className="font-bold">{member.name}</h5>
                          <p className="text-sm text-darkerGray">
                            {member.position}
                          </p>
                        </div>
                        {/* <div className="flex gap-2">
                          <Link href={member.linkedin}>
                            <FaLinkedin className="text-darkerGray" size={20} />
                          </Link>
                          <Link href={member.twitter}>
                            <FaSquareXTwitter
                              className="text-darkerGray"
                              size={20}
                            />
                          </Link>
                        </div> */}
                      </div>
                    </div>
                    {/* end of visible part */}
                    <div
                      className={`relative ${
                        facilitatorModalStates[index] === false ? "hidden" : ""
                      }`}
                    >
                      {/* <!-- Main modal --> */}
                      <div
                        id="default-modal"
                        tabIndex="-1"
                        aria-hidden="true"
                        className={` ${
                          facilitatorModalStates[index] === false
                            ? "hidden"
                            : ""
                        } overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full`}
                      >
                        <div className="relative p-4 w-full h-full bg-primary bg-opacity-30 flex items-center justify-center">
                          {/* <!-- Modal content --> */}
                          <div className="relative bg-backgroundLight rounded-lg shadow overflow-y-scroll py-4 w-[92%] md:w-1/2 h-full dark:bg-gray-700">
                            {/* <!-- Modal header --> */}
                            {/* <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600"> */}
                            <div className="flex relative items-center p-4 md:p-5  rounded-t ">
                              <div className="flex flex-col items-center justify-center w-full">
                                <div className="w-[150px] h-[150px] overflow-hidden rounded-full">
                                  <Image
                                    className="rounded-full w-full"
                                    width={500}
                                    height={500}
                                    // fill="contain"
                                    src={member.img}
                                    alt="image of a black professional"
                                  />
                                </div>
                                <div className="flex flex-col items-center my-4">
                                  <h5 className="font-bold">{member.name}</h5>
                                  <p className="text-sm text-darkerGray">
                                    {member.position}
                                  </p>
                                </div>
                                {/* <div className="flex gap-2">
                                  <Link href={member.linkedin}>
                                    <FaLinkedin
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                  <Link href={member.twitter}>
                                    <FaSquareXTwitter
                                      className="text-darkerGray"
                                      size={20}
                                    />
                                  </Link>
                                </div> */}
                              </div>
                              <button
                                type="button"
                                className="text-gray-400 absolute right-4 top-4 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                data-modal-hide="default-modal"
                                onClick={() => {
                                  const newModalStates = [
                                    ...facilitatorModalStates,
                                  ];
                                  newModalStates[index] =
                                    !newModalStates[index];
                                  setFacilitatorModalStates(newModalStates);
                                }}
                              >
                                <svg
                                  className="w-3 h-3"
                                  aria-hidden="true"
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 14 14"
                                >
                                  <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                  />
                                </svg>
                                <span className="sr-only">Close modal</span>
                              </button>
                            </div>
                            {/* <!-- Modal body --> */}
                            <div className="space-y-4">
                              <p className="text-base px-12 text-center leading-relaxed text-gray-500 dark:text-gray-400 ">
                                {member.bio}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default TeamPage;
