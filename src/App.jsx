import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar.jsx";
import LessonList from "./components/LessonList.jsx";
import CreateLessonForm from "./components/CreateLessonForm.jsx";
import LessonDetail from "./components/LessonDetail.jsx";

const startingLessons = [];

export default function App() {
  const [currentPage, setCurrentPage] = useState("list");

  const [isDark, setIsDark] = useState(true);

  const [lessons, setLessons] = useState(startingLessons);

  const [selectedLessonId, setSelectedLessonId] = useState(null);

  const selectedLesson = lessons.find(function (lesson) {
    return lesson.id === selectedLessonId;
  });

  function openDetailPage(id) {
    setSelectedLessonId(id);
    setCurrentPage("detail");
  }

  function addLesson(formData) {
    const colors = ["#2563eb", "#c2410c", "#059669", "#7c3aed"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newLesson = {
      id: lessons.length + 1,
      title: formData.title,
      project: formData.project,
      dept: formData.dept,
      desc: formData.desc,
      color: randomColor
    };

    setLessons(lessons.concat(newLesson));
    alert("Lesson submitted!");
    setCurrentPage("list");
  }

  return (
    <>
      <div className={"app-wrapper " + (isDark ? "theme-dark" : "theme-light")}>
        <Navbar isDark={isDark} onToggleTheme={function () { setIsDark(!isDark); }} />

        <div className="container">
          {currentPage === "list" && (
            <LessonList
              lessons={lessons}
              onCreateClick={function () { setCurrentPage("create"); }}
              onOpenLesson={openDetailPage}
            />
          )}

          {currentPage === "create" && (
            <CreateLessonForm
              onSubmit={addLesson}
              onCancel={function () { setCurrentPage("list"); }}
            />
          )}

          {currentPage === "detail" && selectedLesson && (
            <LessonDetail
              lesson={selectedLesson}
              onBack={function () { setCurrentPage("list"); }}
            />
          )}
        </div>
      </div>
    </>
  );
}
