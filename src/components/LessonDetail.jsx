
export default function LessonDetail({ lesson, onBack }) {
  return (
    <div>
      <span className="back-link" onClick={onBack}>
        &larr; Back to Lessons
      </span>
      <div className="detail-box">
        <h1>{lesson.title}</h1>
        <div className="detail-meta">
          Project: {lesson.project} &nbsp;|&nbsp; Department: {lesson.dept}
        </div>
        <p>{lesson.desc}</p>
      </div>
    </div>
  );
}
