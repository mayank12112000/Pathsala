import React from "react";

import styles from "./Hero.module.css";
import { Carousel } from "../Carousel/Carousel";
import { Courses } from "../Courses/Courses";
export const Hero = () => {
  return (
    <>
      <Carousel />
      <Courses />
    </>
  );
};
