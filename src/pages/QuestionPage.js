import React,{useState,useEffect} from 'react';
import {useParams} from 'react-router-dom';
import QuestionComponent from '../components/question/QuestionComponent';
import BASE_URL from '../api/client';

function QuestionPage() {
  const {id} = useParams();
  const [task, setTask] = useState({
    title:'',
    description:'',
    status:'pending'
  });
  const handleChange=(e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value
    });
  };
  return (
    <div>
      <h1>Question Page</h1>
      <h2>Edit Task</h2>
      <form>
        <input
          name="title"
          value={task.title}
          onChange={handleChange}
          placeholder="Title"
        />
        <textarea
          name="description"
          value={task.description}
          onChange={handleChange}
          placeholder="Description"
        />
        <select
          name="status"
          value={task.status}
          onChange={handleChange}
        >
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
        </select>
        <button type="submit">Update</button>
      </form>
      <QuestionComponent/>
    </div>
  );
}
export default QuestionPage;