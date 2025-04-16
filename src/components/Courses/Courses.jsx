import React from "react";
import "./Courses.css";
import { Card } from "../Card";

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
            <Card title={course.title} description={course.description} id={course.id} navigation={`/courses/${course.id}`}/>
        ))}
      </div>
    </div>
  );
};
