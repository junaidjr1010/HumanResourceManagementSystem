import React from "react";
import { Calendar, Clock } from "lucide-react";
import { motion } from "framer-motion";

const meetings = [
  {
    id: 1,
    dayShort: "Mon",
    date: 10,
    title: "Interview",
    time: "From 9:30 AM to 11:20 AM",
    badgeBg: "bg-red-100",
    badgeText: "text-red-700",
  },
  {
    id: 2,
    dayShort: "Tue",
    date: 11,
    title: "Organizational Meeting",
    time: "From 9:30 AM to 11:20 AM",
    badgeBg: "bg-orange-100",
    badgeText: "text-orange-700",
  },
  {
    id: 3,
    dayShort: "Wed",
    date: 12,
    title: "Meeting with the HR",
    time: "From 9:30 AM to 11:20 AM",
    badgeBg: "bg-green-100",
    badgeText: "text-green-700",
  },
];

export default function MeetingsUI() {
  return (
    <div className="w-full max-w-sm md:max-w-md">
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35 }}
        className="bg-[#eef7fb] border border-[#bfe7ff] rounded-xl shadow-md p-3"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-lg font-semibold text-[#2b4a72]">Meetings</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              className="inline-flex items-center gap-2 px-2 py-1 rounded-md bg-white border border-gray-200 shadow-sm text-xs"
              aria-label="Open calendar"
            >
              <Calendar size={16} />
              <span className="text-xs font-medium text-gray-700">Calendar</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-2">
          {meetings.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.04 * idx }}
              className="flex items-center gap-3 bg-white rounded-lg p-2 border border-gray-100 shadow-sm"
            >
              <div className="flex-shrink-0">
                <div className={`w-10 h-10 rounded-md flex flex-col items-center justify-center text-center ${m.badgeBg} ${m.badgeText} font-semibold shadow-sm border border-white`}>
                  <span className="text-[10px]">{m.dayShort}</span>
                  <span className="text-base mt-0.5">{m.date}</span>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="text-gray-800 font-medium text-sm">{m.title}</h3>
                  <div className="text-xs text-gray-400 flex items-center gap-1">
                    <Clock size={12} />
                    <span className="text-xs text-gray-500">{m.time}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-between">
          <div className="text-xs text-gray-500">Last synced 10 minutes ago</div>
          <button className="text-xs font-medium px-3 py-1 rounded-md bg-white border border-gray-200 shadow-sm">
            Sync
          </button>
        </div>
      </motion.div>
    </div>
  );
}
