import randomColor from "randomcolor";
import CustomProgressBar from './CustomProgressBar'
import DoughnutChart from './Doughnut';
import ProsNCons from './ProsNCons';
import LineBar from './LineBar';
import HorizontalBar from './HorizontalBar';

export default function chartsContainer(props){
const types = ['Comprehension', 'Fluency', 'Monolingualism', 'Pronunciation', 'Sentence Structure', 'Spelling', 'Over All English'];

return (<section className="chartsContainer dark" >

          <aside> {props.participant &&
            <div>
            {props.participant.results['2020'] !== {} && <h3>2020</h3>}
              {
                types
                  .filter(type => !!props.participant.results['2020'][type])
                  .map(type =>
                    <CustomProgressBar year={'2020'} key={type} percent={+props.participant.results['2020'][type]} color={randomColor()} skill={type} />
                  )
              }
            </div>
          }
           {props.participant &&
             
            <div>
              <h3>2021</h3>
              {
                types
                  .filter(type => !!props.participant.results['2021'][type])
                  .map(type =>
                    <CustomProgressBar year={'2021'} key={type} percent={+props.participant.results['2021'][type]} color={randomColor()} skill={type} />
                  )
              }
            </div>}
            </aside>

          <div style={{ flexDirection: 'column' }}>
            {props.participant && <ProsNCons participant={props.participant} />}
            {props.participant && <LineBar oldStats={props.participant.results['2020']} newStats={props.participant.results['2021']} />}
            {props.participant && <HorizontalBar oldStats={props.participant.results['2020']} newStats={props.participant.results['2021']} />}
          </div>
          <div className=''>
            {props.participant && <DoughnutChart participant={props.participant} />}
          </div>
          </section>)}