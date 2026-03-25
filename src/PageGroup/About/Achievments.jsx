import { PlayCircle, Video } from "react-feather";
import HeroSection from "./Component/HeroSection";
import image from "./assets/aboutjmi.jpeg";
import { achievementInTech, videoLectures,facultyParticipation } from "../../../data/achievement";
import AchiementCard from "./Component/AchiementCard";
import { useState } from "react";
  const[isExpanded,setIsExpanded] = useState(false);

function facultyParticipationCard(faculty) {
  return (
    <div className="col-span-1 overflow-hidden rounded-md bg-green-100 shadow">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex w-full items-center justify-between bg-green-200 px-4 py-3 text-left transition-colors hover:bg-green-300"
      >
        <div className="flex items-center gap-2">
          <Users className="h-5 w-5 text-green-800" />
          <span className="font-semibold text-green-800">{faculty.name}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="rounded-full bg-green-700 px-2 py-0.5 text-xs text-white">
            {faculty.activities.length}{" "}
            {faculty.activities.length === 1 ? "activity" : "activities"}
          </span>
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
                <span className="rounded bg-green-200 px-2 py-0.5 text-xs font-medium">
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

    </div>
  );
}
export default Achievments;
