import React from 'react'
import './education.css'

const Education = () => {
    return <table className='table'>
        <thead>
            <th>Degree</th>
            <th>Major</th>
            <th>Institute</th>
            <th>Year</th>
        </thead>

        <tbody>
            <tr>
                <td>B.Tech</td>
                <td>Computer Science and Engineering</td>
                <td>Malaviya National Institute of Technology, Jaipur</td>
                <td>2021-2025</td>
            </tr>

            <tr>
                <td>12th</td>
                <td>PCM</td>
                <td>Macro Vision Academy, Burhanpur</td>
                <td>2020-2021</td>
            </tr>

            <tr>
                <td>10th</td>
                <td>---</td>
                <td>Maharashi Vidya Mandir, Bhandara</td>
                <td>2018-2019</td>
            </tr>
        </tbody>
    </table>
}

export default Education


