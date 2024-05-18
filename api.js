const express = require('express');
const app = express();

app.get('/chart', (req, res) => {
    const chartOptions = {
        chart: {
            type: 'line'
        },
        title: {
            text: 'Contoh Chart Highcharts'
        },
        xAxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun']
        },
        yAxis: {
            title: {
                text: 'Nilai'
            }
        },
        series: [{
            name: 'Data 1',
            data: [1, 3, 2, 4, 5, 7]
        }, {
            name: 'Data 2',
            data: [5, 7, 6, 8, 9, 10]
        }]
    };

    const chartScript = `
        <script src="https://code.highcharts.com/highcharts.js"></script>
        <script>
            document.addEventListener('DOMContentLoaded', function () {
                Highcharts.chart('container', ${JSON.stringify(chartOptions)});
            });
        </script>
    `;

    const htmlResponse = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Chart Highcharts</title>
        </head>
        <body>
            <div id="container" style="width:100%; height:400px;"></div>
            ${chartScript}
        </body>
        </html>
    `;

    res.send(htmlResponse);
});

app.listen(3000, () => {
    console.log('Server berjalan pada port 3000');
});