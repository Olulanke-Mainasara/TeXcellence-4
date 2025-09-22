import Adewale from "@/public/speakers/Adewale-Adeyipo.webp";
import Afolabi from "@/public/speakers/Afolabi-Sobande.webp";
import Ayotunde from "@/public/speakers/Ayotunde-Coker.webp";
import Onasanya from "@/public/speakers/Onasanya.webp";
import VanR from "@/public/speakers/Van.png";
import AdeB from "@/public/speakers/Ade-Buraimo.jpg";
import BayoA from "@/public/speakers/BayoAyodeji.jpg";
import Mobolaji from "@/public/speakers/Mobolaji.jpg";
import Radoslav from "@/public/speakers/Dimitrov.jpg";
import Fola from "@/public/speakers/FolaDavid.jpg";
import Joe from "@/public/speakers/DrJoe.jpg";

export const speakersInfo = [
  {
    name: "Dr. Mark van Rijmenam",
    title: "Strategic Futurist",
    image: VanR,
  },
  {
    name: "Ade Buraimo",
    title: "Chief Executive Officer (CEO), Alpha Morgan Bank",
    image: AdeB,
  },
  {
    name: "Ayotunde Coker",
    title: "Chief Executive Officer (CEO), Open Access Data Centres",
    image: Ayotunde,
  },
  {
    name: "Adewale Adeyipo",
    title: "Group Managing Director / CEO, CWG Group Plc",
    image: Adewale,
  },
  {
    name: "Dr. Joe Abah",
    title: "Country Director for Nigeria, DAI",
    image: Joe,
  },
  {
    name: "Bayo Adedeji",
    title: "Group Chief Executive Officer, Wakanow",
    image: BayoA,
  },
  {
    name: "Mobolaji Adeoye",
    title: "Founder, Managing Partner, Consonance Capital",
    image: Mobolaji,
  },
  {
    name: "Radoslav Dimitrov",
    title: "Senior Director, Borica",
    image: Radoslav,
  },
  {
    name: "Fola Olatunji-Davids",
    title: "Founding Partner, Kickoff Africa",
    image: Fola,
  },
  {
    name: "Jesudetan Onasanya",
    title: "Regional Partner Director, Sub-Saharan Africa, Aleph",
    image: Onasanya,
  },
  {
    name: "Afolabi Sobande",
    title: "Chief Operating Officer (COO), CWG Group Plc",
    image: Afolabi,
  },
];

export const agenda = [
  {
    title: "The Future of Business in a Digital World",
    speaker: "Dr. Mark van Rijmenam",
    period: "09:00 - 09:45 AM",
    description:
      "A keynote session exploring how emerging technologies, AI, and digital transformation are reshaping industries globally and in Africa.",
    tags: ["AI", "Digital Transformation", "Future Trends"],
  },
  {
    title: "Building Sustainable Financial Institutions",
    speaker: "Ade Buraimo",
    period: "10:00 - 10:45 AM",
    description:
      "Insights into driving innovation and trust within Africa’s financial ecosystem, with a focus on strategy, leadership, and growth.",
    tags: ["Banking", "Finance", "Leadership"],
  },
  {
    title: "The Data Infrastructure Driving Africa",
    speaker: "Ayotunde Coker",
    period: "11:00 - 11:45 AM",
    description:
      "Discussion on the role of data centres in accelerating digital inclusion, powering businesses, and scaling across Africa.",
    tags: ["Data Centres", "Infrastructure", "Cloud"],
  },
  {
    title: "Scaling Technology Enterprises in Africa",
    speaker: "Adewale Adeyipo",
    period: "12:00 - 12:45 PM",
    description:
      "How African tech companies can scale effectively while navigating challenges in operations, governance, and market expansion.",
    tags: ["Business Scaling", "Tech Growth", "Operations"],
  },
  {
    title: "Governance, Policy, and the African Digital Economy",
    speaker: "Dr. Joe Abah",
    period: "01:00 - 01:45 PM",
    description:
      "A policy-focused conversation on creating enabling environments for innovation and the intersection between governance and technology.",
    tags: ["Policy", "Governance", "Digital Economy"],
  },
  {
    title: "Innovation in African Travel & Tourism",
    speaker: "Bayo Adedeji",
    period: "02:00 - 02:45 PM",
    description:
      "Exploring how technology is reshaping Africa’s travel industry and the strategies needed to scale consumer-driven platforms.",
    tags: ["Travel", "Innovation", "Tourism"],
  },
  {
    title: "Driving Impact with Venture Capital",
    speaker: "Mobolaji Adeoye",
    period: "03:00 - 03:45 PM",
    description:
      "A session on investment trends, funding opportunities, and how VCs can create sustainable impact in Africa’s startup ecosystem.",
    tags: ["Venture Capital", "Startups", "Impact Investing"],
  },
  {
    title: "Payments and the Future of Finance",
    speaker: "Radoslav Dimitrov",
    period: "04:00 - 04:30 PM",
    description:
      "Insights into financial technology, secure payment solutions, and how global systems can adapt to African markets.",
    tags: ["Fintech", "Payments", "Security"],
  },
  {
    title: "Empowering Startups in Africa",
    speaker: "Fola Olatunji-Davids",
    period: "04:45 - 05:15 PM",
    description:
      "Strategies for supporting startups through early growth, mentorship, and capital, with a focus on sustainable innovation.",
    tags: ["Startups", "Entrepreneurship", "Mentorship"],
  },
  {
    title: "Building Digital Partnerships Across Africa",
    speaker: "Jesudetan Onasanya",
    period: "05:30 - 06:00 PM",
    description:
      "How partnerships can unlock new growth opportunities in the digital space and create lasting value across African markets.",
    tags: ["Partnerships", "Digital", "Strategy"],
  },
  {
    title: "Operational Excellence in African Tech",
    speaker: "Afolabi Sobande",
    period: "06:15 - 06:45 PM",
    description:
      "Best practices for managing operations, fostering innovation, and ensuring resilience in African tech enterprises.",
    tags: ["Operations", "Strategy", "Leadership"],
  },
];

// Merge agenda with speaker images
export const mergedAgenda = agenda.map((session) => {
  const match = speakersInfo.find((sp) => sp.name === session.speaker);
  return {
    ...session,
    image: match ? match.image : null, // fallback if not found
  };
});

export const faqs = [
  {
    question: "Who is eligible to apply?",
    answer:
      "Early-stage tech startups, solo founders, or individuals with innovative tech-driven solutions at the prototype or MVP stage can apply. The solution must have scalability and impact potential.",
  },
  {
    question: "What is the selection process?",
    answer:
      "The process consists of application submission, shortlisting by judges, and pitch preparation with a final conference pitch for the top 5 finalists.",
  },
  {
    question: "Do I need a fully functional product to apply?",
    answer:
      "Not necessarily. Working prototypes are preferred but MVPs and strong ideas are considered if scalable and impactful.",
  },
  {
    question: "Do I need to attend the event in person?",
    answer:
      "Finalists may be required to present live depending on whether the event is virtual or physical.",
  },
  {
    question: "My startup is pre-revenue. Can we still apply?",
    answer: "Yes, as long as there is at least a working prototype or MVP.",
  },
  {
    question: "We've raised seed funding. Are we still eligible?",
    answer: "Yes, if total funding is under $500k.",
  },
  {
    question: "Can university projects or student startups apply?",
    answer: "Yes, provided other criteria are met.",
  },
  {
    question: "What should our pitch deck include?",
    answer:
      "Cover problem, solution, market, business model, competition, traction, team, and funding needs in 10–15 slides.",
  },
  {
    question: "Can I update my application after submission?",
    answer: "No, updates after submission are not possible.",
  },
  {
    question: "How much detail should be in the 2-minute video?",
    answer:
      "Briefly explain your product/service, highlight key team members, and demo the prototype or MVP.",
  },
  {
    question: "Is there an application fee?",
    answer: "No, application is free.",
  },
  {
    question: "In which language should I submit my application?",
    answer: "English only.",
  },
  {
    question: "Who are the judges?",
    answer:
      "Investors, entrepreneurs, and industry experts. The specific panel will be announced later.",
  },
  {
    question: "How will we know if we make the shortlist?",
    answer:
      "All applicants will receive email notifications; semi-finalists may also get phone calls.",
  },
  {
    question: "What sectors or industries should the pitch be focused on?",
    answer:
      "All sectors are welcome, but healthcare, agriculture, financial inclusion, clean energy, and education may receive special consideration.",
  },
  {
    question: "Will travel expenses be covered for finalists?",
    answer: "No, travel expenses are not covered.",
  },
  {
    question: "Can we bring product demos to the final pitch?",
    answer:
      "Yes, within the 7-minute limit. Notify organizers in advance if special accommodations are needed.",
  },
  {
    question: "Is the prize money subject to taxes?",
    answer:
      "Yes, prize money is subject to taxes according to the recipient’s country laws.",
  },
  {
    question: "Are there any strings attached to the prize money?",
    answer:
      "No equity is taken, but quarterly updates for one year are required.",
  },
  {
    question:
      "How will you protect our intellectual property during the competition?",
    answer:
      "Judges and organizers sign confidentiality agreements, but finals are public. Avoid sharing critical IP.",
  },
  {
    question: "Who owns the rights to the pitch videos?",
    answer:
      "Applicants retain all rights, but the event may use videos for promotional purposes.",
  },
  {
    question: "Will InnovateX Africa claim any ownership in our business?",
    answer: "No, there are no equity or ownership claims.",
  },
];
