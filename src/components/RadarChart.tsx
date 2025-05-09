// components/RadarChart.js
import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const RadarChart: React.FC<{
    danceability: number,
    energy: number,
    valence: number,
    speechiness: number,
    acousticness: number,
    instrumentalness: number
}> = (props) => {
    const featureLabels = [
        'Danceability',
        'Energy',
        'Valence',
        'Speechiness',
        'Acousticness',
        'Instrumentalness'
    ];

    const featureValues = [
        props.danceability,
        props.energy,
        props.valence,
        props.speechiness,
        props.acousticness,
        props.instrumentalness
    ];

    const featureColors = [
        '#FF6384', // Danceability
        '#36A2EB', // Energy
        '#FFCE56', // Valence
        '#4BC0C0', // Speechiness
        '#9966FF', // Acousticness
        '#FF9F40'  // Instrumentalness
    ];

    const data = {
    labels: featureLabels,
    datasets: [
        {
            label: 'Audio Features',
            data: featureValues,
            backgroundColor: 'rgba(0, 0, 0, 0.05)',
            borderColor: 'rgba(0, 0, 0, 0.3)',
            borderWidth: 1,
            pointBackgroundColor: featureColors,
            pointBorderColor: featureColors,
            pointHoverBackgroundColor: featureColors,
            pointHoverBorderColor: featureColors
        }
    ]
    };

    const options = {
    scales: {
        r: {
        suggestedMin: 0,
        suggestedMax: 1,
        pointLabels: {
            font: { size: 14 }
        }
        }
    },
    plugins: {
        legend: { display: false }
    }
    };

    return <Radar data={data} options={options} />;
};

export default RadarChart;
