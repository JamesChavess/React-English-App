import { useEffect, useState } from 'react';
import styles from './CustomProgressBar.module.css'

export default function CircularProgressBar({ percent, color, skill, year }) {
  const [percentCounter, setPercentCounter] = useState(0);

  useEffect(() => {
    let num = 0;
    let run = setInterval(() => {
      num++;
      if (num === percent + 1) {
        clearInterval(run);
      } else {
        setPercentCounter(num);
      }
    }, 20);
  }, [percent]);

  return (<>

    <article className={styles.circleBarsContainer}>
      <section className={styles.skillContainer}>
          <svg style={({ width: "90px", height: "90px" })}>
            <circle style={{
              fill: "none", stroke: "rgba(221,221,221, 0.65)", strokeDasharray: "251",
              strokeWidth: "10", cx: "45", cy: "45", r: "40"
            }} className={styles.innerCircle}></circle>
            <circle style={{
              fill: "none", stroke: color, strokeDasharray: "251", strokeDashoffset: (250 - (250 * percentCounter) / 100),
              strokeWidth: "10", cx: "45", cy: "45", r: "40"
            }} className={styles.outterCircle}></circle>
          </svg>
          <h2 style={{ color}}> {`${percentCounter}%`} </h2>
        <span style={{ color }} >{skill}</span>
      </section>
    </article>
  </>);
}
