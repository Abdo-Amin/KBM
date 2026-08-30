import { useState } from "react";
import { departments } from "../data/departments.js";

export default function CreateLessonForm({ onSubmit, onCancel }) {
  const [title, setTitle] = useState("");
  const [project, setProject] = useState("");
  const [dept, setDept] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmitClick() {
    if (!title || !dept) {
      alert("Please fill in at least the Title and Department fields.");
      return;
    }

    onSubmit({
      title: title,
      project: project ? project : "N/A",
      dept: dept,
      desc: desc ? desc : "No description provided."
    });
  }

  return (
    <div>
      <span className="back-link" onClick={onCancel}>
        &larr; Back to Lessons
      </span>
      <h1>Create a Lesson</h1>

      <div className="form-wrap">
        <div className="form-main">

          <div className="form-section">
            <h3>1. Basic Information</h3>

            <label className="label">Lesson Title *</label>
            <input
              className="form-input"
              value={title}
              onChange={function (e) { setTitle(e.target.value); }}
              placeholder="Enter lesson title"
            />

            <label className="label">Project Name</label>
            <input
              className="form-input"
              value={project}
              onChange={function (e) { setProject(e.target.value); }}
              placeholder="Enter project name"
            />

            <label className="label">Department *</label>
            <select
              className="form-input"
              value={dept}
              onChange={function (e) { setDept(e.target.value); }}
            >
              <option value="">Select department</option>
              {departments.map(function (d) {
                return <option key={d} value={d}>{d}</option>;
              })}
            </select>
          </div>

          <div className="form-section">
            <h3>2. Lesson Content</h3>
            <label className="label">Description *</label>
            <textarea
              className="form-input"
              rows={6}
              value={desc}
              onChange={function (e) { setDesc(e.target.value); }}
              placeholder="Write the full description of the lesson..."
            />
          </div>

        </div>

        {}
        <div className="form-side">
          <h3>Review Summary</h3>
          <div className="summary-row">
            <span className="summary-label">Title:</span>
            <span>{title || "Not provided"}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Project:</span>
            <span>{project || "Not provided"}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Department:</span>
            <span>{dept || "Not provided"}</span>
          </div>
          <div className="summary-row">
            <span className="summary-label">Description:</span>
            <span>{desc || "Not provided"}</span>
          </div>
          <button
            className="btn-blue"
            style={{ width: "100%", marginTop: "15px" }}
            onClick={handleSubmitClick}
          >
            Submit Lesson
          </button>
        </div>
      </div>
    </div>
  );
}
