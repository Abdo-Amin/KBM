
export default function LessonCard({ lesson, onOpen }) {
  return (
    <div className="card">
      {/* the banner color is different per lesson, so this one stays
          as an inline style since it's not a theme color */}
      <div className="card-banner" style={{ backgroundColor: lesson.color }}>
        <span className="card-tag">{lesson.dept}</span>
      </div>
      <div className="card-body">
        <h3>{lesson.title}</h3>
        <button className="btn-outline" onClick={function () { onOpen(lesson.id); }}>
          Open Lesson
        </button>
      </div>
    </div>
  );
}
