import { Doughnut } from "react-chartjs-2"

/*
 {
            "Name": "Carlos Diaz",
            "Email": "carlos.diaz@sinco.com.co",
            "results": {
                "2020": {
                    "Comprehension": "90",
                    "Fluency": "80",
                    "Sentence Structure": "30",
                    "Pronunciation": "30",
                    "Monolingualism": "30",
                    "Spelling": "90",
                    "Over All English": "62"
                },
                "2021": {}
            }
        },
*/
function DoughnutChart({ participant }) {
    console.log(participant.Name)
    const results = participant.results['2021']
    const data = {
        labels: ["comprehension", "fluency", "Sentence Structure", "pronounciation", "monoliguisim"],
        datasets: [{
            data: [results.Comprehension, results.Fluency, results["Sentence Structure"], results.Pronunciation, results.Monolingualism, results["Over-All-English"]],
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.5)',
                'rgba(255, 206, 86, 0.5)',
                'rgba(75, 192, 192, 0.5)',
                'rgba(153, 102, 255, 0.5)'],
            borderColor: ['rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'],
            borderwidth: 3,
            offset: 5,
        }]
    }
    const options = {

        indexAxis: 'y',
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Skill Donut'
            }
        }
    };
    return (<>
        <section style={{ width: '400px', height: "100vh", margin: "0 auto", display: 'flex' }}>
            <article style={{ width: '100%', margin: "0 auto", display: 'flex' }}>
                {/*
                <Bar style={{width: '250px',height: '250px', margin: "0 auto"}} data={data} options={options}/> */}
                <Doughnut options={options} style={{ width: '350px', height: '250px', margin: "0 auto" }} data={data} />
            </article>
        </section>
    </>
    );
}

export default DoughnutChart;
