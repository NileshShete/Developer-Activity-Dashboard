import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { ChartContainer } from '../styled';

const processChartData = (rows) => {
    const data = {};

    rows.forEach(row => {
        row.dayWiseActivity.forEach(activity => {
            if (!data[activity.date]) {
                data[activity.date] = { date: activity.date };
            }
            activity.items.children.forEach(item => {
                if (!data[activity.date][item.label]) {
                    data[activity.date][item.label] = 0;
                }
                data[activity.date][item.label] += parseInt(item.count, 10);
            });
        });
    });

    return Object.values(data);
};

const Chart = (props) => {
    const { data } = props
    const chartData = processChartData(data);

    return (
        <ChartContainer>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart
                    data={chartData}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    {data.length > 0 && data[0].totalActivity.map(activity => (
                        <Line
                            key={activity.name}
                            type="monotone"
                            dataKey={activity.name}
                            stroke={activity.fillColor}
                        />
                    ))}
                </LineChart>
            </ResponsiveContainer>
        </ChartContainer>
    );
};

export default Chart;
