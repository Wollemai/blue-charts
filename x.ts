import * as echarts from 'echarts';

// Prepare data
const data = [
    { "financial_year": "2023", "average_of_farms": 0.3412434723317237, "reference_farm_amount": 0.19816574 },
    { "financial_year": "2030", "average_of_farms": 0.3412434723317237, "reference_farm_amount": 0.21289936 },
    { "financial_year": "2040", "average_of_farms": 0.3412434723317237, "reference_farm_amount": 0.21283042 },
    { "financial_year": "2050", "average_of_farms": 0.3412434723317237, "reference_farm_amount": 0.2138979 }
];

const years = data.map(item => item.financial_year);
const averageOfFarms = data.map(item => item.average_of_farms);
const referenceFarmAmount = data.map(item => item.reference_farm_amount);

// ECharts configuration
const option = {
    title: {
        text: 'Average of Farms vs Reference Farm Amount'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['Average of Farms', 'Reference Farm Amount']
    },
    xAxis: {
        type: 'category',
        data: years
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Average of Farms',
            type: 'bar',
            data: averageOfFarms,
            color: 'blue'
        },
        {
            name: 'Reference Farm Amount',
            type: 'bar',
            data: referenceFarmAmount,
            color: 'green'
        }
    ]
};

// Initialize the chart
const chart = echarts.init(document.getElementById('main'));
chart.setOption(option);