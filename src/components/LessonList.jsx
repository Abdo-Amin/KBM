import { useState } from "react";
import LessonCard from "./LessonCard.jsx";
import { departments } from "../data/departments.js";


export default function LessonList({ lessons, onCreateClick, onOpenLesson }) {
  const [searchText, setSearchText] = useState("");
  const [deptFilter, setDeptFilter] = useState("");

  const filteredLessons = lessons.filter(function (lesson) {
    const matchesSearch = lesson.title.toLowerCase().includes(searchText.toLowerCase());
    const matchesDept = deptFilter === "" || lesson.dept === deptFilter;
    return matchesSearch && matchesDept;
  });

  return (
    <div>
      <div className="header-row">
        <div>
          <h1>Lesson Learned</h1>
          <p className="subtitle">
            A space to write down and share lessons learned from our projects, so the team can learn from them.
          </p>
        </div>
        <button className="btn-blue" onClick={onCreateClick}>
          + Create Lesson
        </button>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="Search for a lesson..."
          className="input search-input"
          value={searchText}
          onChange={function (e) { setSearchText(e.target.value); }}
        />
        <select
          className="input"
          value={deptFilter}
          onChange={function (e) { setDeptFilter(e.target.value); }}
        >
          <option value="">All Departments</option>
          {departments.map(function (dept) {
            return <option key={dept} value={dept}>{dept}</option>;
          })}
        </select>
      </div>

      {filteredLessons.length === 0 && (
        <p className="empty-message">
          No lessons yet. Click "+ Create Lesson" to add the first one.
        </p>
      )}

      <div className="card-grid">
        {filteredLessons.map(function (lesson) {
          return <LessonCard key={lesson.id} lesson={lesson} onOpen={onOpenLesson} />;
        })}
      </div>
    </div>
  );
}
