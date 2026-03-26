import { PlayCircle, Video,FileText} from "react-feather";
import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";
import { achievementInTech, videoLectures,facultyParticipation,patents,productDevelopment } from "../../../data/achievement";
import AchiementCard from "./Component/AchiementCard";
import { useState } from "react";
import { Users, ChevronDown, ChevronUp, Calendar, Clock } from "react-feather";

function FacultyParticipationCard({faculty}) {
    const[isExpanded,setIsExpanded] = useState(false);

  return (
    <div className="col-span-1 overflow-hidden rounded-md bg-green-light shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between bg-green-light px-4 py-3 text-left transition-colors hover:bg-green-300"
      >
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-green-800" />
          <span className="font-semibold text-green-800">{faculty.name}</span>
        </div>
        <div className="flex items-center gap-2">
          {/* <span className="rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
            {faculty.activities.length}{" "}
            {faculty.activities.length === 1 ? "activity" : "activities"}
          </span> */}
          {isExpanded ? (
            <ChevronUp className="h-5 w-5 text-green-700" />
          ) : (
            <ChevronDown className="h-5 w-5 text-green-700" />
          )}
        </div>
      </button>

      {isExpanded && (
        <div className="divide-y divide-green-200 px-4 py-2">
          {faculty.activities.map((activity, idx) => (
            <div key={idx} className="py-3">
              <p className="mb-2 font-medium text-green-800">{activity.title}</p>
              <div className="flex flex-wrap gap-3 text-sm text-green-700">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {activity.from} - {activity.to}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {activity.duration}
                </span>
                <span className="rounded bg-green-light px-2 py-0.5 text-xs font-medium">
                  {activity.year}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
function Achievments() {
  return (
    <div className="mb-48 flex w-full flex-col items-center justify-center gap-y-8 font-[450] text-justify">
      <HeroSection heading={"achievements"} image={image} />
      <div className="mx-4 mb-8 flex flex-col justify-center rounded-md bg-green-light p-6 text-lg sm:mx-8 md:mx-12 lg:mx-24">
        <span className="group flex items-center text-sm font-bold capitalize text-green-deep">
          video lectures
          <PlayCircle className="ml-1 h-4 w-4 text-green-950 transition-all group-hover:translate-x-1" />
        </span>
        <div>
          Mr. Sarfaraz Masood, Assistant Professor, Department of Computer
          Engineering has enthusiastically produced a series of video lectures
          on Compiler Design. The video lectures cover a wide range of topics
          that potentially include Lexical Analysis, Syntax Analysis, Semantic
          Analysis, Type Checking and Intermediate Code Generation. The videos
          can be accessed through the following links:
        </div>
      </div>
      <div className="grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:gap-x-12 md:px-12 lg:px-24">
        {videoLectures.map((lecture, i) => (
          <div
            className="col-span-1 flex items-center justify-center text-green-800 shadow"
            key={i}
          >
            <div className="group flex w-full items-center bg-green-light px-4 py-4 sm:px-8 md:px-12">
              <Video className="mr-2 h-4 w-4" />
              <p
                onClick={() =>
                  confirm("This link will take you to Youtube") &&
                  window.open(lecture.link)
                }
                className="relative cursor-pointer"
              >
                {lecture.title}
                <div className="absolute bottom-0 left-1/2 h-[1px] w-0 -translate-x-1/2 rounded bg-green-800 opacity-0 transition-all group-hover:w-full group-hover:opacity-100" />
              </p>
            </div>
          </div>
        ))}
      </div>
      <hr className="mt-8 w-[80%] bg-green-deep" />
      <div className="mt-8 grid w-full grid-cols-1 gap-x-2 gap-y-6 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:gap-x-12 md:px-12 lg:px-24 text-justify">
        {achievementInTech.map((achievement, i) => (
          <AchiementCard
            key={i}
            id={achievement.id}
            title={achievement.title}
            description={achievement.description}
          />
        ))}
      </div>
            <hr className="mt-8 w-[80%] bg-green-deep" />

      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24 text-left">
  <div className="flex flex-col rounded-md text-lg">
    <span className="font-bold capitalize text-xl text-green-800">
      Faculty as participants in FDP/Training Activities/STTPs
    </span>

    <div className="text-green-700 mt-2">
      Our faculty members actively participate in various Faculty
      Development Programs (FDPs), Short Term Training Programs (STTPs), and
      other training activities.
    </div>
  </div>
</div>

      <div className="mt-4 grid w-full grid-cols-1 gap-x-2 gap-y-4 px-6 sm:grid-cols-2 sm:gap-x-6 sm:px-8 md:gap-x-12 md:px-12 lg:px-24">
        {facultyParticipation.map((faculty, i) => (
          <FacultyParticipationCard key={i} faculty={faculty} />
        ))}
      </div>
            <hr className="mt-8 w-[80%] bg-green-deep" />
 <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24 text-left">
  <div className="flex flex-col rounded-md text-lg">
    <span className="font-bold capitalize text-xl text-green-800">
Product Development    </span>

    <div className="text-green-700 mt-2">
       Products developed by faculty members of the Department of Computer
          Engineering, showcasing innovation and practical application of
          research.
    </div>
  </div>
</div>

      <div className="mt-4 w-full overflow-x-auto px-6 sm:px-8 md:px-12 lg:px-24">
        <table className="w-full border-collapse overflow-hidden rounded-md bg-green-light text-sm">
          <thead>
            <tr className="bg-green-light">
              <th className="border border-green-300 px-4 py-3 text-left font-semibold text-green-800">
                S. No
              </th>
              <th className="border border-green-300 px-4 py-3 text-left font-semibold text-green-800">
                Product Type
              </th>
              <th className="border border-green-300 px-4 py-3 text-left font-semibold text-green-800">
                Faculty Name
              </th>
              <th className="border border-green-300 px-4 py-3 text-left font-semibold text-green-800">
                Assessment Year
              </th>
            </tr>
          </thead>
          <tbody>
            {productDevelopment.map((product) => (
              <tr
                key={product.id}
                className="transition-colors hover:bg-green-50"
              >
                <td className="border border-green-300 px-4 py-3 text-green-800">
                  {product.id}
                </td>
                <td className="border border-green-300 px-4 py-3 text-green-700">
                  {product.productType}
                </td>
                <td className="border border-green-300 px-4 py-3 text-green-700">
                  {product.facultyName}
                </td>
                <td className="border border-green-300 px-4 py-3 text-green-700">
                  {product.assessmentYear}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <hr className="mt-8 w-[80%] bg-green-800" />
      <div className="w-full px-6 sm:px-8 md:px-12 lg:px-24 text-left">
  <div className="flex flex-col rounded-md text-lg">
    <span className="font-bold capitalize text-xl text-green-800">
Details of Patents   </span>

    <div className="text-green-700 mt-2">
       Patents granted to the faculty members of the Department of Computer
          Engineering, demonstrating innovation and intellectual contributions.
    </div>
  </div>
</div>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 px-6 sm:px-8 md:px-12 lg:px-24">
        {patents.map((patent) => (
          <div
            key={patent.id}
            className="rounded-md bg-green-light p-4 shadow transition-shadow hover:shadow-md"
          >
            <div className="mb-2 flex flex-wrap items-start justify-between gap-2">
              <h3 className="flex-1 font-semibold text-green-800">
                {patent.title}
              </h3>
              <span className="rounded-full bg-green-light px-3 py-1 text-xs font-medium text-white">
                {patent.status}
              </span>
            </div>
            <p className="mb-3 text-sm text-green-700">
               {patent.inventors}
            </p>
            <div className="flex flex-wrap gap-4 text-sm text-green-700">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                Year: {patent.year}
              </span>
              <span className="flex items-center gap-1">
                <FileText className="h-4 w-4" />
                Patent No: {patent.registrationNo}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                Filed: {patent.registrationDate}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
export default Achievments;
