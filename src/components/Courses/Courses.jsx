import React from "react";
import "./Courses.css";
import { NavLink } from "react-router-dom";

export const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Physics",
      description: "Class 11th",
    },
    {
      id: 2,
      title: "Physics",
      description:"Class 12th",
    }
  ];

  return (
    <div className="courses-container">
      <h2 className="courses-title">Our Courses</h2>
      <div className="courses-list">
        {courses.map((course) => (
            <div key={course.id} className="card course-card" style={{width: "18rem"}}>
              <img src="carousel/image1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{course.title}</h5>
                <p className="card-text">
                  {course.description}
                </p>
                <NavLink to={`/courses/${course.id}`} className="btn btn-primary">
                <button className="btn btn-primary">
                  Explore
                </button>
                </NavLink>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};
