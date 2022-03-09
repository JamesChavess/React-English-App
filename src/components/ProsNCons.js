import { Bar } from "react-chartjs-2"

export default function ProsNCons({ participant }) {
    const scoresArr = Object.entries(participant.results[2021])
    const maxScore = Math.max(...Object.values(participant.results[2021]))
    const maxScoreName = scoresArr.filter(score => {
        if (score[1] === String(maxScore)) {
            return score[0]
        }
    })
    const minScore = Math.min(...Object.values(participant.results[2021]))
    const minScoreName = scoresArr.filter(score => {
        if (score[1] === String(minScore)) {
            return score[0]
        }
    })

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
