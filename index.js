const express = require('express');
const app = express();

app.get('/barchart', (req, res) => {
    //Fungsi callback yang menerima dua parameter, req (request) dan res (response), digunakan untuk menangani permintaan ke endpoint tersebut.
    // const chartOptions = {
    //     chart: {
    //         type: 'bar'  // Ubah tipe chart menjadi 'bar'
    //     },
    //     title: {
    //         text: 'Contoh Chart Batang Highcharts'
    //     },
    //     xAxis: {
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun']
    //     },
    //     yAxis: {
    //         title: {
    //             text: 'Nilai'
    //         }
    //     },
    //     series: [{
    //         name: 'Data 1',
    //         data: [1, 3, 2, 4, 5, 7]
    //     }, {
    //         name: 'Data 2',
    //         data: [5, 7, 6, 8, 9, 10]
    //     }]
    // };
    const chartOptions = {
        chart: {
            type: 'column', // Menggunakan 'column' untuk chart batang vertikal
            backgroundColor: '#f0f0f0'
        },
        title: {
            text: 'Chart Batang Pertama'
        },
        xAxis: {
            categories: ['Gold', 'Silver', 'Bronze'], // Contoh kategori
            title: {
                text: 'Kategori'
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Jumlah'
            }
        },
        series: [{
            name: 'Year 2020',
            data: [250, 150, 100],
            color: '#7cb5ec' // Warna biru muda
        }, {
            name: 'Year 2021',
            data: [150, 200, 150],
            color: '#434348' // Warna abu-abu tua
        }, {
            name: 'Year 2022',
            data: [100, 150, 200],
            color: '#90ed7d' // Warna hijau muda
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
    /*Membuat skrip untuk memasukkan Highcharts dan menginisialisasi chart menggunakan konfigurasi yang telah didefinisikan dalam chartOptions.
    Menggunakan JSON.stringify(chartOptions) untuk mengubah objek konfigurasi menjadi string JSON yang valid. **/

    const htmlResponse = `
        <!DOCTYPE html>
        <html>
        <head>
            <title>Chart Batang Highcharts</title>
        </head>
        <body>
            <div id="container" style="width:100%; height:400px;"></div>
            ${chartScript}
        </body>
        </html>
    `;
    /*
        Menyertakan chartScript dalam tag <body> untuk menjalankan skrip Highcharts saat halaman dimuat.
     **/

    res.send(htmlResponse); //Mengirimkan respons HTML ke klien yang meminta.
});

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