import './App.css';
import testResults from './JSON/testResults.json'
import Header from './components/Header';
import FormContainer from "./components/FormContainer";
import ProfileBanner from './components/ProfileBanner';
import SearchWindow from './components/SearchWindow';
import ChartsContainer from './components/ChartsContainer';
import { useState } from 'react'

;

function App() {
  const [isActive, setActive] = useState(true);
  const [darkMode, setDarkMode] = useState(true);
  const [participant, setParticipant] = useState();
  const [emailParticipant, setEmailParticipant] = useState("");
  const [invalid, setInvalid] = useState(false);
  const participantList = testResults["English Stats"];
  
  const validationStruct = {
    fName: /^[a-z ,.'-]+$/i,
    pNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
    email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    searchEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  }
  const themeToggle = ()=> {
    setDarkMode(!darkMode)
  }
  const handleSearchParticipant = () => {
    const participantFound = participantList.find((item) => item.Email.toLowerCase() === emailParticipant.toLowerCase())
  
    if (participantFound) {
      setActive(false)
      setParticipant(participantFound);
    }
  }
  const inputValHandler = (e) => {
    if (validationStruct[e.target.name].test(e.target.value)) {
      e.target.classList.remove('true');
    } else {
      e.target.classList.add('true');
    }
  }
  const inputSearchHandler = (e) => {
    inputValHandler(e);
    setEmailParticipant(e.target.value);
  }
  return (
    <main className="app">

      <Header darkMode={darkMode} themeToggle={themeToggle}/>
      {isActive && <FormContainer darkMode={darkMode} inputValHandler={inputValHandler} />}
      <SearchWindow className={isActive ? 'hidden' : ''} name={participant && participant.Name } emailParticipant={emailParticipant} invalid={invalid} inputSearchHandler={inputSearchHandler} handleSearchParticipant={handleSearchParticipant}/>
      {!isActive && <button onClick={() => { setActive(true) }} className='returnBtn'>Open Form</button>}
      {participant && <ProfileBanner participant={participant} />}
      { participant && <ChartsContainer participant={participant}/>}
     
    </main>
  );
}
export default App;
