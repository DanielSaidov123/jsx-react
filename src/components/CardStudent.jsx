import "./CardStudent.css";
export default function CardStudent({
  name,
  isOnline,
  age,
  subjects,
  grade,
  setDataStudents,
}) {
  function toggleOnline() {
    setDataStudents((prev) =>
      prev.map((s) => {
        if (s.name === name) {
          return { ...s, isOnline: !isOnline };
        }
        return s;
      }),
    );
  }
  return (
    <main className="divmain">
      <div className="div1 spase">
        <h3 className="h3">{name}</h3>
        <button onClick={toggleOnline} className="">
          {isOnline && <div className="online">online</div>}
          {!isOnline && <div className="no-online">offline</div>}
        </button>
      </div>
      <div className="div2 spase">
        <div className="divage">
          <strong>Age:</strong>
          <p>{age}</p>
        </div>
        <div className="divage">
          <strong>Grade:</strong>
          <p>{`${grade}%`}</p>
          <div>
            {isOnline && <div className="online">Pass</div>}
            {!isOnline && <div className="no-online">Fail</div>}
          </div>
        </div>
      </div>
      <h4 className="space">Subjects:</h4>
      <div className="spase">
        {subjects.map((subject, index) => (
          <span key={index} className="span1">
            {subject}
          </span>
        ))}
      </div>
    </main>
  );
}
