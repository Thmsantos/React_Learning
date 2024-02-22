import React, { useState, useEffect } from 'react'
import { Pie } from 'react-chartjs-2'

function Pizza(props) {
    var url = props.url
    const [chart, setChart] = useState([])
  useEffect(() => {
    const fecthCars = async () => {
      await fetch(url,{
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((response) => response.json())
      .then((json) => {
        console.log(json)
        setChart(json)
      })
    }
    fecthCars()
  }, [url])
        return (
  <div>
        <Pie
          data={{
            labels: chart?.página1?.map(x => x.nome),
            datasets: [
              {
                label: '# of votes',
                data: chart?.página1?.map(x => x.qtdVenda),
                backgroundColor: [
                  'rgba(255, 48, 23, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(232, 123, 94, 0.2)',
                  'rgba(93, 234, 121, 0.2)',
                  'rgba(0, 102, 255, 0.2)',
                  'rgba(4, 03, 64, 0.2)',
                ],
                borderColor: [
                  'rgba(255, 48, 23, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(232, 123, 94, 0.2)',
                  'rgba(93, 234, 121, 0.2)',
                  'rgba(0, 102, 255, 0.2)',
                  'rgba(4, 03, 64, 0.2)',
                ],
                borderWidth: 1,
              },
            ],
          }}
          height={400}
          width={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
            legend: {
              labels: {
                fontSize: 20,
              },
            },
          }}
        />
      </div>
  );
}

export default Pizza;