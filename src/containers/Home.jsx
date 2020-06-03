import React, { useState, useEffect } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Brush, ResponsiveContainer, Legend,
} from 'recharts';
import moment from 'moment';
import '../assets/styles/Home.scss';
import localData from '../utils/data.json';

/* const API = localData; */

const Home = () => {
/*   const [data, setData] = useState([]);

  useEffect(() => {

    fetch(API).then((response) => response.json()).then((data) => setData(data.resultObj));
  }, []);
 */
  return (
    <div>

      <section className='Graph__container'>
        <h1>ICP Index</h1>
        <ResponsiveContainer width='85%' height='80%' minHeight={200}>
          <LineChart
            data={localData}
            syncId='anyId'
            margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Fecha' tickFormatter={(time) => moment(time).format('LT')} />
            <YAxis type='number' />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Line type='basis' dot={false} dataKey='Precio' stroke='#0085FF' fill='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width='85%' height='80%' minHeight={200}>
          <LineChart
            data={localData}
            syncId='anyId'
            margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Fecha' tickFormatter={(time) => moment(time).format('LT')} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Line type='monotone' dot={false} dataKey='Volumen' stroke='#8884d8' />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width='85%' height='80%' minHeight={200}>
          <LineChart
            data={localData}
            syncId='anyId'
            margin={{ top: 10, right: 30, left: 30, bottom: 0 }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='Fecha' tickFormatter={(time) => moment(time).format('LT')} />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign='top' height={36} />
            <Line type='monotone' dot={false} dataKey='Porcentaje' stroke='#AB9766' fill='#8884d8' />
            <Brush dataKey='Fecha' startIndex={0} />
          </LineChart>

        </ResponsiveContainer>
      </section>
    </div>

  );
};

export default Home;
