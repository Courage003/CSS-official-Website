import React, { useState } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import coverImg from "../../assets/upse.png";

export default function CareerAndExam() {
  const blackImage =
    "https://img.freepik.com/free-photo/dark-black-abstract-background-with-wood-chips_24972-208.jpg?size=626&ext=jpg&ga=GA1.1.481347670.1709641640&semt=ais";
  const whiteImage =
    "https://img.freepik.com/free-vector/elegant-white-background-with-shiny-lines_1017-17580.jpg?t=st=1709642531~exp=1709646131~hmac=844c3a047d6d4f1f7477d30a3511b4c9a3a832db0d11f3b0dca2c68f3ba7899c&w=900";

  const [load, setLoad] = useState(true);
  setTimeout(() => {
    setLoad(false);
  }, 1000);

  return load ? (
    <Loading />
  ) : (
    <section className="hero flex flex-col items-center justify-center">
      <div className=" top-0 sm:h-[22rem] w-full overflow-visible sm:sticky">
        <img
          src={coverImg}
          alt=""
          className="h-60 sm:h-96 w-full object-fill sm:object-cover object-bottom"
        />
      </div>
      {/*What is Civil Services?*/}
      <div
        className="container z-10 flex flex-col items-center justify-center rounded-t-xl bg-white shadow-xl md:h-[550px] md:rounded-2xl lg:w-[1240px] xl:h-[400px]"
        style={{ backgroundImage: "url(" + whiteImage + ")" }}
      >
        <h1 className=" pt-10 font-fredoka text-4xl font-bold lg:text-5xl">
          What is Civil Services?
        </h1>
        <p className="mx-8 py-8 text-justify sm:mx-20 lg:text-lg ">
          The civil services in India are the lifeblood of the nation's
          administration. These dedicated, non-elected officials form a vast
          network, stretching from the heart of the government in New Delhi to
          the far corners of India's diverse districts. They play a crucial role
          in keeping the country running, from formulating national policies to
          ensuring their effective implementation on the ground. <br />A career
          in the civil services holds immense appeal for many Indians. It offers
          prestige, stability, and the chance to make a real difference in the
          lives of millions. However, securing a coveted position in this highly
          competitive field is no easy feat. Aspiring civil servants must
          conquer the rigorous Civil Services Examination (CSE) conducted by the
          Union Public Service Commission (UPSC). This multi-stage exam, known
          for its difficulty, attracts thousands of applicants each year.
        </p>
      </div>
      {/*Eligibility & Requirements*/}
      <div className="flex w-full flex-col items-center justify-center">
        <div
          className="container bg-black z-10 flex text-gray-200 flex-col items-center justify-center bg-cover shadow-xl md:m-4 md:rounded-2xl  lg:w-[1240px]"
          style={{ backgroundImage: "url(" + blackImage + ")" }}
        >
          <h1 className=" pt-20 font-fredoka text-4xl font-bold lg:text-5xl">
            Eligibility & Requirements
          </h1>
          <p className="mx-8 py-8 pb-12 sm:mx-20 lg:text-lg">
            Aspiring for a career in the prestigious Indian Civil Services comes
            with its set of eligibility criteria and requirements. Meeting these
            eligibility requirements is just the first step. To be successful,
            you'll need dedication, perseverance, and a strong foundation in
            various academic subjects covered in the UPSC syllabus. <br />
            <br />
            <ul className="grid gap-2">
              <li>
                <strong className="text-lg">Nationality:</strong> <br />
                <span className="pl-4">
                  Candidate must be a citizen of India.
                </span>{" "}
                <br />
              </li>
              <li>
                <strong className="text-lg">Age :</strong>
                <br />
                <ul className="list-inside pl-4 pt-2">
                  <li>
                    {" "}
                    <span className="pr-1 font-semibold">Minimum age:</span>
                    21 years as of 1st August of the exam year
                  </li>
                  <li>
                    <span className="pr-1 font-semibold">Maximum age:</span>
                    Varies based on category
                    <ul className="list-inside list-disc pl-4">
                      <li>
                        General Category & Economically Weaker Sections (EWS):
                        32 years
                      </li>
                      <li>Other Backward Classes (OBC): 35 years</li>
                      <li>
                        Scheduled Castes (SC) & Scheduled Tribes (ST): 37 years
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-lg">Educational Qualification:</strong>
                <ul className="list-outside list-disc pl-8">
                  <li>
                    Candidate must hold a bachelor's degree from a recognized
                    university or an equivalent qualification.
                  </li>
                  <li>
                    Candidates in their final year of graduation or awaiting
                    results can appear for the preliminary exam, but must
                    present proof of passing the degree before the main exam.
                  </li>
                </ul>
              </li>
              <li>
                <strong className="text-lg">Number of Attempts:</strong>
                <br />{" "}
                <span className="pl-4">
                  The number of attemps allowed also varies by category:
                  <ul className="list-inside list-disc pl-8">
                    <li>General Category & EWS: 6 attempts</li>
                    <li>OBC: 9 attempts</li>
                    <li>SC & ST: No limit</li>
                  </ul>
                </span>
              </li>
            </ul>
          </p>
        </div>
      </div>
      {/*Exam Pattern & Syllabus*/}
      <div
        className="container z-10 flex flex-col items-center justify-center bg-white shadow-xl md:m-4 md:rounded-2xl  lg:w-[1240px]"
        style={{ backgroundImage: "url(" + whiteImage + ")" }}
      >
        <h1 className=" pt-20 font-fredoka text-4xl font-bold lg:text-5xl">
          Exam Pattern & Syllabus
        </h1>
        <p className="mx-8 py-10 pt-8 text-justify sm:mx-20  lg:text-lg">
          The Civil Services Examination (CSE) conducted by the UPSC is a
          multi-stage process, testing various competencies of aspiring civil
          servants. Here's a breakdown of both the exam pattern and syllabus:{" "}
          <br /> <br />
          <ul className="grid gap-3">
            <li>
              <strong>Stage 1: Preliminary Examination (Prelims): </strong>{" "}
              <br />
              <p className="pl-3">
                This serves as a screening test, with two objective-type papers.
                The first focuses on general knowledge like Indian history,
                politics, and current affairs. The second (CSAT) tests your
                aptitude, including comprehension and reasoning. Qualifying the
                Prelims is mandatory to proceed further.
              </p>
            </li>
            <li>
              <strong>Stage 2: Main Examination (Mains): </strong> <br />
              <p className="pl-3">
                A series of written papers delving deeper into various subjects.
                This includes essay writing, general studies (covering Indian
                society, governance, and more), and an optional subject of your
                choice. Language skills are also tested. Your performance in the
                Mains decides your final rank and service selection.
              </p>
            </li>
            <li>
              <strong>Stage 3: Personality Test (Interview):</strong> <br />
              <p className="pl-3">
                The final stage is an interview where a panel assesses your
                personality, communication, and overall suitability for a civil
                service career. This focuses on your mental clarity,
                problem-solving abilities, and temperament.
              </p>
            </li>
          </ul>{" "}
          <br />
          The UPSC provides detailed syllabi for each stage of the exam. You can
          find these on the{" "}
          <a
            href="https://upsc.gov.in/sites/default/files/Engl_CSP_2017.pdf"
            className="text-green-600 underline"
            target="_blank"
          >
            {" "}
            official UPSC website{" "}
          </a>{" "}
          and a structured analysis of sylabi on{" "}
          <Link to="/resources" className="text-green-600 underline">
            {" "}
            resource
          </Link>{" "}
          page.
        </p>
      </div>

      {/*exams page*/}
      <div className="flex w-full flex-col items-center justify-center sm:mb-20">
        <div
          className="container bg-black z-10 flex bg-cover flex-col items-center justify-center pb-12 text-gray-200 shadow-xl md:m-4 md:rounded-2xl  lg:w-[1240px]"
          style={{ backgroundImage: "url(" + blackImage + ")" }}
        >
          <h1 className=" pt-20 font-fredoka text-4xl font-bold lg:text-5xl">
            Some Important links
          </h1>
          <p className="mx-8 py-10  pt-8 sm:mx-20  lg:text-lg">
            <ul className="grid gap-3">
              <li className="list-disc">
                <a
                  href="https://upsc.gov.in/"
                  className="font-bold text-green-700 underline"
                  target="_blank"
                >
                  {" "}
                  UPSC:
                </a>{" "}
                This exam grants entry into coveted services like the Indian
                Administrative Service (IAS), Indian Foreign Service (IFS), and
                Indian Police Service (IPS), making it highly competitive.
              </li>
              <li className="list-disc">
                <a
                  href="https://ncert.nic.in/textbook.php"
                  className="font-bold text-green-700 underline"
                  target="_blank"
                >
                  {" "}
                  NCERT Textbook:
                </a>{" "}
                NCERT books lay a strong foundation for the Civil Services Exam
                by covering core subjects like history, polity, and economics
                tested in the General Studies papers. Their clear language and
                basic structure make them valuable resources for initial
                understanding and building a strong knowledge base.
              </li>
              <li className="list-disc">
                <a
                  href="https://prsindia.org/"
                  className="font-bold text-green-700 underline"
                  target="_blank"
                >
                  {" "}
                  PRS India:
                </a>{" "}
                PRSIndia (PRS Legislative Research) is crucial for Civil
                Services as it provides in-depth analysis of legislation, bills,
                and policy issues, all of which are integral parts of the
                General Studies syllabus, particularly the "Governance" and
                "Polity" sections.
              </li>
              <li className="list-disc">
                <a
                  href="https://www.egyankosh.ac.in/"
                  className="font-bold text-green-700 underline"
                  target="_blank"
                >
                  {" "}
                  IGNOU Books:
                </a>{" "}
                IGNOU books can be a helpful supplement for Civil Services prep,
                offering in-depth coverage of specific topics within the vast
                syllabus. However, they might lack the conciseness needed for
                the exam and should be used alongside core resources like NCERT
                textbooks.
              </li>
            </ul>{" "}
            <br />
            For more detailed and researched material, hand-written by our
            members can be available{" "}
            <Link to="/resources" className="text-green-600 underline">
              {" "}
              here
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
