import './App.css';
import QuizCard from './components/quizCard';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="App">
      <QuizCard />
      <Toaster />
    </div>
  );
}

export default App;
