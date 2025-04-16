import React from 'react';
import './Courses.css';



export const Courses = () => {
    const courses = [
        { id: 1, title: 'React for Beginners', description: 'Learn the basics of React.' },
        { id: 2, title: 'Advanced JavaScript', description: 'Deep dive into JavaScript concepts.' },
        { id: 3, title: 'Web Development Bootcamp', description: 'Full-stack web development course.' },
    ];

    return (
        <div className="courses-container">
            <h1 className="courses-title">Our Courses</h1>
            <div className="courses-list">
                {courses.map((course) => (
                    <div key={course.id} className="course-card">
                        <h2 className="course-title">{course.title}</h2>
                        <p className="course-description">{course.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

