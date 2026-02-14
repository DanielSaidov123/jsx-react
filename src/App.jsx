import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section from "./components/section";
import CardStudent from "./components/CardStudent";
import students from "./data";
function App() {
  const [dataStudents ,setDataStudents]=useState(students)
  const [activeSection, setActiveSection] = useState("all");
function countIsOnline() {
  return dataStudents.reduce((acc, s) => {
    if (s.isOnline) acc++;
    return acc;
  }, 0);
}
function HonorRoll( ) {
  return dataStudents.reduce((acc,s)=>{
    if(s.grade >=90)acc++;
    return acc
  },0)
}
function avgGrade() {
  const total = dataStudents.reduce((acc, s) => acc + s.grade, 0);
  return (total / dataStudents.length).toFixed(2);  
}
function filterisonline() {
   const d=students.filter((s)=>s.isOnline===true)
   setDataStudents(d)
    setActiveSection("online"); 
}
function filterHonorRoll(){
  const honorroll = students.filter((s)=>s.grade>=90)
  setDataStudents(honorroll)
   setActiveSection("honor");
}
  return (    
    <>
      <Header />
      <div className="gridSection">
        <Section onClick={()=>{setActiveSection("all"),setDataStudents(students)}}number={dataStudents.length} p="Total Students"  />
        <Section onClick={filterisonline} number={countIsOnline()} p="Online Now"/>
        <Section onClick={filterHonorRoll} number={HonorRoll()} p="Honor Roll"/>
        <Section number={`${avgGrade()}%`} p="Avg Grade" />
      </div>
      <div className="divstudent">
        {dataStudents.map((student) => (
          <CardStudent key={student.id} setDataStudents={setDataStudents} {...student} />
        ))}
      </div>
    </>
  );
}

export default App;
