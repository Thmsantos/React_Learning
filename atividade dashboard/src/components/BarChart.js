import React from 'react'
import { defaults, Bar } from 'react-chartjs-2'

defaults.global.tooltips.enabled = false
defaults.global.legend.position = 'bottom'

const BarChart = () => {
  return (
    <div>
      <Bar
        data={{
          labels: ['corsa', 'gol', 'voyage', 'corolla', 'onix', 'celta',  'carro1', 'fd', 'fox'],
          datasets: [
            {
              label: '# of votes',
              data: [10, 10, 10, 10, 10, 10, 10, 10, 10],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(117, 117, 117, 0.2)',
                'rgba(143, 102, 255, 0.2)',
                'rgba(255, 100, 64, 0.2)',
              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(117, 117, 117, 0.2)',
                'rgba(143, 102, 255, 0.2)',
                'rgba(255, 100, 64, 0.2)',
              ],
              borderWidth: 1,
            },
            // {
            //   label: 'Quantity',
            //   data: [47, 52, 67, 58, 9, 50],
            //   backgroundColor: 'orange',
            //   borderColor: 'red',
            // },
          ],
        }}
        height={300}
        width={25}
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
  )
}

export default BarChart
