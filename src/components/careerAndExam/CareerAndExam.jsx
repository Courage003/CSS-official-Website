import React from "react";
import { Link } from "react-router-dom";

export default function CareerAndExam() {
  return (
    <section className="hero flex flex-col items-center justify-center">
        {/*What is Civil Services?*/}
      <div className="container flex flex-col items-center justify-center pt-20 md:h-[550px] md:pt-0 lg:w-[1240px]">
        <h1 className=" font-fredoka text-4xl font-bold md:p-10 lg:text-5xl">
          What is Civil Services?
        </h1>
        <p className="mx-20 py-8 md:py-0 lg:text-lg ">
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
      <div className="flex w-full flex-col items-center justify-center bg-gray-300">
        <div className="container flex flex-col items-center justify-center py-10 lg:w-[1240px]   lg:py-20">
          <h1 className=" font-fredoka text-4xl font-bold md:p-10 lg:text-5xl">
            Eligibility & Requirements
          </h1>
          <p className="mx-20 py-8 md:py-0 lg:text-lg">
            Aspiring for a career in the prestigious Indian Civil Services comes
            with its set of eligibility criteria and requirements. Meeting these
            eligibility requirements is just the first step. To be successful,
            you'll need dedication, perseverance, and a strong foundation in
            various academic subjects covered in the UPSC syllabus. <br />
            <br />
            <strong className="text-lg">Nationality:</strong> <br />
            <span className="pl-4">
              Candidate must be a citizen of India.
            </span>{" "}
            <br />
            <strong className="text-lg">Age :</strong>
            <br />
            <ul className="list-inside pl-4">
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
                    General Category & Economically Weaker Sections (EWS): 32
                    years
                  </li>
                  <li>Other Backward Classes (OBC): 35 years</li>
                  <li>
                    Scheduled Castes (SC) & Scheduled Tribes (ST): 37 years
                  </li>
                </ul>
              </li>
            </ul>
            <strong className="text-lg">Educational Qualification:</strong>
            <ul className="list-outside list-disc pl-8">
              <li>
                Candidate must hold a bachelor's degree from a recognized
                university or an equivalent qualification.
              </li>
              <li>
                Candidates in their final year of graduation or awaiting results
                can appear for the preliminary exam, but must present proof of
                passing the degree before the main exam.
              </li>
            </ul>
            <strong className="text-lg">Number of Attempts:</strong>
            <br /> The number of attemps allowed also varies by category:
            <ul className="list-outside list-disc pl-8">
              <li>General Category & EWS: 6 attempts</li>
              <li>OBC: 9 attempts</li>
              <li>SC & ST: No limit</li>
            </ul>{" "}
            <br />
          </p>
        </div>
      </div>
      {/*Exam Pattern & Syllabus*/}
      <div className="container flex flex-col items-center justify-center py-20 lg:w-[1240px]">
        <h1 className=" font-fredoka text-4xl font-bold md:pb-10 lg:text-5xl">
          Exam Pattern & Syllabus
        </h1>
        <p className="mx-20 py-8 md:py-0 lg:text-lg ">
          The Civil Services Examination (CSE) conducted by the UPSC is a
          multi-stage process, testing various competencies of aspiring civil
          servants. Here's a breakdown of both the exam pattern and syllabus:{" "}
          <br /> <br />
          <ul>
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
          </ul> <br />
          The UPSC provides detailed syllabi for each stage of the exam. You can find these on the <a href="https://upsc.gov.in/sites/default/files/Engl_CSP_2017.pdf" className="text-blue-600 underline"> official UPSC website </a> and a structured analysis of sylabi on <Link to="/resources" className="text-blue-600 underline"> resource</Link> page.
        </p>
      </div>

      {/*exams page*/}
      <div className="flex w-full flex-col items-center justify-center bg-gray-300">
      <div className="container flex flex-col items-center justify-center py-20 lg:w-[1240px]">
        <h1 className=" font-fredoka text-4xl font-bold md:pb-10 lg:text-5xl">
          Some Important links
        </h1>
        <p className="w-full items-start mx-20 py-8 md:py-0 lg:text-lg ">
          <ul>
            <li className="list-disc">
                    <a href="https://upsc.gov.in/" className="font-bold underline text-blue-700"> UPSE:</a> {" "}
                    This exam grants entry into coveted services like the Indian Administrative Service (IAS), Indian Foreign Service (IFS), and Indian Police Service (IPS), making it highly competitive.
            </li>
          </ul>
        </p>
      </div>
      </div>
    </section>
  );
}
