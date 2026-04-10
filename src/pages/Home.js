import React from 'react';
import {useNavigate} from 'react-router-dom'
// TODO: Replace placeholder values with actual student and lab identifiers
const STUDENT_ID = '23WH1A0519';
const LAB_ID = 'FSDLAB2';

function Home() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Stack Track Lab</h1>
      <p>Student ID:{STUDENT_ID}</p>
      <p>Lab ID:{LAB_ID}</p>
      <button onClick={() => navigate('/edit-task/1')}>Edit Task</button>
      {/* TODO: Replace this placeholder with your question set UI */}
      <p>Click the button above to edit task details.</p>
    </div>
  );
}

export default Home;