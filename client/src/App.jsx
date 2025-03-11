import React from "react";
import { Route, Routes, useMatch } from "react-router-dom";
import Loading from "./components/students/Loading";
import Navbar from "./components/students/Navbar";
import AddCourse from "./pages/educator/AddCourse";
import Dashboard from "./pages/educator/Dashboard";
import Educator from "./pages/educator/Educator";
import MyCourses from "./pages/educator/MyCourses";
import StudentEnrolled from "./pages/educator/StudentEnrolled";
import CourseDetails from "./pages/student/CourseDetails";
import CourseList from "./pages/student/CourseList";
import Home from "./pages/student/Home";
import MyEnrollments from "./pages/student/MyEnrollments";
import Player from "./pages/student/Player";

const App = () => {
  const isEducatorRoute = useMatch('/educator/*');
  return (

    

    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <Navbar/>}
          
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/course-list" element={<CourseList />} />
        <Route path="/course-list/:input" element={<CourseList />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/my-enrollments" element={<MyEnrollments />} />
        <Route path="/player/:courseId" element={<Player />} />
        <Route path="/loading/:path" element={<Loading />} />

        <Route path="/educator" element={<Educator />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="add-course" element={<AddCourse />} />
          <Route path="my-courses" element={<MyCourses/>} />
          <Route path="student-enrolled" element={<StudentEnrolled />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
