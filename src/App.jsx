import React from 'react';
import Card from './components/Card';
import FacultyList from './components/Faculty';
import './App.css';


const mathCourses = [
  {
    title: "College Algebra for Precalculus",
    description: "Fundamental concepts of algebra for precalculus students.",
    courseNumber: "MATH *1006"
  },
  {
    title: "Problem Solving for College Mathematics",
    description: "Develop problem-solving skills for college-level mathematics.",
    courseNumber: "MATH *1010"
  },
  {
    title: "Precalculus Mathematics",
    description: "Preparation for calculus, including functions and their graphs.",
    courseNumber: "MATH *1011"
  },
  {
    title: "Calculus I",
    description: "Introduction to differential and integral calculus.",
    courseNumber: "MATH *1201"
  },
  {
    title: "Calculus II",
    description: "Continuation of Calculus I, including series and polar coordinates.",
    courseNumber: "MATH *1206"
  },
  {
    title: "Linear Algebra",
    description: "Study of vector spaces, linear transformations, and matrices.",
    courseNumber: "MATH *2101"
  },
  {
    title: "Multivariable Calculus",
    description: "Calculus of several variables, including partial derivatives and multiple integrals.",
    courseNumber: "MATH *2201"
  },
  {
    title: "Introduction to Mathematical Reasoning",
    description: "Logic, set theory, and proof techniques for mathematics majors.",
    courseNumber: "MATH *2001"
  },
  {
    title: "Differential Equations",
    description: "Study of ordinary differential equations and their applications.",
    courseNumber: "MATH *2206"
  },
  {
    title: "Abstract Algebra I",
    description: "Introduction to group theory and ring theory.",
    courseNumber: "MATH *3101"
  },
  {
    title: "Elementary Probability and Statistics",
    description: "Introduction to probability and statistics",
    courseNumber: "MATH *2501"
  },
  {
    title: "Probability and Statistics I",
    description: "Introduction to advanced probability and statistics",
    courseNumber: "MATH *3501"
  }
];

const generateCourseLink = (courseNumber) => {
  const num = courseNumber.split('*')[1];
  return `https://websql.brooklyn.cuny.edu/courses/ShowCourse.do?redirect=/acad/course_info.jsp&dsc=MATH.&crs_num=${num}&div=U`;
};


function App() {
  return (
    <div className="app">
      <h1>Brooklyn College Math Department Courses</h1>
      <div className="card-container">
        {mathCourses.map((resource, index) => (
          <Card
            key={index}
            title={resource.title}
            description={resource.description}
            courseNumber={resource.courseNumber}
            button={resource.button || generateCourseLink(resource.courseNumber)}
          />
        ))}
      </div>
      <h1>Brooklyn College Math Department Faculty</h1>
      <FacultyList />
    </div>
  );
}

export default App;
