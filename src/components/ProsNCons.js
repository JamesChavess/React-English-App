import { Bar } from "react-chartjs-2"

export default function ProsNCons({ participant }) {

    console.log(participant)
    let scoresArr = Object.entries(participant.results[2021])
    scoresArr = (scoresArr.length === 0 ? Object.entries(participant.results[2020]) : scoresArr) 
    const maxScore = Math.max(...Object.values(participant.results[2021]))
    const minScore = Math.min(...Object.values(participant.results[2021]))
    const maxScoreName = scoresArr.filter(score => {
        console.log(scoresArr[score])
        if (score[1] === String(maxScore)) {
            return score[0]
        }
    })
    const minScoreName = scoresArr.filter(score => {
        if (score[1] === String(minScore)) {
            return score[0]
        }
    })
    console.log("this is the scores array  "+scoresArr)
    console.log("this is the participants results  "+participant.results,participant.results)
    console.log("this is the participants results by year -- 2020 "+participant.results[2020]+" --- 2021 "+participant.results[2021])
    console.log("this is the key value pairs of participant results  "+Object.entries(participant.results[2020]),Object.entries(participant.results[2021]))
    console.log("this is the  value sof aprticpants results by year --- 2020 "+Object.values(participant.results[2020])+" -- 2021 "+Object.values(participant.results[2021]))
    console.log("this is the  max of values by year -- 2020 "+Math.max(...Object.values(participant.results[2020]))+" -- 2021 "+ Math.max(...Object.values(participant.results[2021])))
 console.log("this is the variable with the min  "+maxScore+" and max "+minScore)
console.log("this is the max key value pair "+maxScoreName)
console.log("this is the  min name value "+maxScoreName[0][0])
    Object.entries(participant.results[2021])
    const data = {
        labels: ['Strength & Weakness'],
        datasets: [
            {
                label: maxScoreName[0][0],
                data: [maxScore],
                borderWidth: 5,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                barThickness: 90,
            }, {
                label: minScoreName[0][0],
                data: [minScore],
                borderWidth: 5,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                barThickness: 90,
            }]
    }
    const options = {
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Cons & Pros'
            }
        }
    };
    return (<section>
        <Bar options={options} data={data} />
    </section>)
}
