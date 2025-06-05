import React from 'react'
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2'
import "./charts.css"

function charts({details}) {
  return (
    <div className='charts'>
        <Line 
            data={{
                labels: [...details.map(data => {
                        return data.address
                })],
                datasets: [
                    {
                        label: "Rent Listings($)",
                        data: [...details.map(data => {
                            return data.listedRent
                        })]
                    },
                    {
                        label: "Sq. Ft.",
                        data: [...details.map(data => {
                            return data.sqft
                        })]
                    }
                ]
            }}
        />
    </div>
  )
}

export default charts