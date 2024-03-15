import { useState } from 'react';
import './App.css';
import Description from './components/Description/Description.jsx';
import Options from './components/Options/Options.jsx';
import Feedback from './components/Feedback/Feedback.jsx';


function App({
	good= 0,
	neutral= 0,
	bad= 0
}) {
  const [clicks, setClicks] = useState(0);

	const handleClick = () => {
    setClicks(clicks + 1);
  };
    return (
    <>
    <Description/>
    <Options/>
    <Feedback/>
    </>
  );
}

export default App;
