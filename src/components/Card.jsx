import React from 'react'
import "./Courses/Courses.css"
import { NavLink } from 'react-router-dom'
export const Card =({title,description,id,navigation})=> {
  return (
    <div key={id} className="card course-card" style={{width: "18rem"}}>
              <img src="carousel/image1.png" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <NavLink to={navigation} className="btn btn-primary">
                <button className="btn btn-primary">
                  Explore
                </button>
                </NavLink>
              </div>
          </div>
  )
}
