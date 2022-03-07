import './App.css';

import randomColor from "randomcolor";
import testResults from './JSON/testResults.json'
import FormContainer from "./components/FormContainer";
import CustomProgressBar from './components/CustomProgressBar'
import DoughnutChart from './components/Doughnut';
import ProsNCons from './components/ProsNCons';
import lightMenu from "./imgs/lightMenu.svg"
import darkMenu from "./imgs/darkMenu.svg"
import Advanced from "./imgs/advanced.svg"
import HighLevel from "./imgs/highlevel.svg"
import Intermediate from "./imgs/intermediate.svg"
import Beginner from "./imgs/beginner.svg"
import LineBar from './components/LineBar';
import HorizontalBar from './components/HorizontalBar';
import { useState } from 'react'

const validationStruct = {
  fName: /^[a-z ,.'-]+$/i,
  pNumber: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
  email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  searchEmail: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

const imageStruct = {
  Advanced: Advanced,
  HighLevel: HighLevel,
  Intermediate: Intermediate,
  Beginner: Beginner
}

function App() {
  const [isActive, setActive] = useState(true);
  const [participant, setParticipant] = useState();
  const [emailParticipant, setEmailParticipant] = useState("");
  const [invalid, setInvalid] = useState(false);
  const participantList = testResults["English Stats"];
  const types = ['Comprehension', 'Fluency', 'Monolingualism', 'Pronunciation', 'Sentence Structure', 'Spelling', 'Over All English'];

  const handleSearchParticipant = () => {
    const participantFound = participantList.find((item) => item.Email.toLowerCase() === emailParticipant.toLowerCase())
    console.log(participantFound)
    if (participantFound) {
      setActive(false)
      setParticipant(participantFound);
      console.log(participant)
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
    <main className="app dark">
      <img className='menu' srcSet={darkMenu}/>
      {isActive && <FormContainer inputValHandler={inputValHandler} />}

      <input name="searchEmail" value={emailParticipant} onChange={inputSearchHandler} placeholder='Type in your email' data-error={invalid} />
      <button onClick={() => { handleSearchParticipant(); }}>Find results</button>
      
      {!isActive && <button onClick={() => { setActive(true) }} className='returnBtn'>Go Back</button>}
      
        {participant && <>
          <article className={`${participant.level}`}>
            <img srcSet={imageStruct[participant.level]}  alt="level image" />
            <h1>
              {'Name : ' + participant.Name}
              <br />
              {'Level : ' + participant.level}
            </h1>
            <h1>
              {'Group Rank  : ' + participant.GroupRank}
              <br />
              {'Company Rank : ' + participant.CompanyRank}
            </h1>
          </article>
        </>},
        {participant && console.log(participant.results['2020'] !== {})}
        <section className="chartsContainer dark" >
          <aside> {participant &&
            <div>
            {participant.results['2020'] !== {} && <h3>2020</h3>}
              {
                types
                  .filter(type => !!participant.results['2020'][type])
                  .map(type =>
                    <CustomProgressBar year={'2020'} key={type} percent={+participant.results['2020'][type]} color={randomColor()} skill={type} />
                  )
              }
            </div>
          }
           {participant &&
             
            <div>
              <h3>2021</h3>
              {
                types
                  .filter(type => !!participant.results['2021'][type])
                  .map(type =>
                    <CustomProgressBar year={'2021'} key={type} percent={+participant.results['2021'][type]} color={randomColor()} skill={type} />
                  )
              }
            </div>}
            </aside>

          <div style={{ flexDirection: 'column' }}>
            {participant && <ProsNCons participant={participant} />}
            {participant && <LineBar oldStats={participant.results['2020']} newStats={participant.results['2021']} />}
            {participant && <HorizontalBar oldStats={participant.results['2020']} newStats={participant.results['2021']} />}
          </div>
          <div className=''>
            {participant && <DoughnutChart participant={participant} />}
          </div>
          </section>
     
    </main>
  );
}

export default App;
