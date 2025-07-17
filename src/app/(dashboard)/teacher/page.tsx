"use client";
import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const TeacherPage = () => {
  return (
    <div className="p-4 flex flex-1 gap-4 flex-col xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-xl">
          <h1 className="text-xl font-semibold">Schedule</h1>
          <BigCalendar />
        </div>
      </div>
      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-8">
        <Announcements />
      </div>
    </div>
  );
};

export default TeacherPage;
