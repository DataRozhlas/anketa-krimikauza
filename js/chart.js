export function makeChart() {
    Highcharts.chart('lineup', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Nejčastěji zmiňované kauzy'
        },
        xAxis: {
            type: 'category',
            title: {
                text: null
            }
        },
        yAxis: {
            visible: false,
        },
        tooltip: {
            enabled: false,
        },
        plotOptions: {
            bar: {
                animation: false,
                dataLabels: {
                    enabled: true,
                    formatter: function() {
                        return `${this.y}`
                    }
                }
            }
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false
        },
        series: [{
            name: 'kauzy',
            data: [
                ['David Rath a spol.', 26],
                ['Jana Nagyová a spol.', 20],
                ['Kauza Metanol', 10],
                ['Lukáš Nečesaný', 6],
                ['Marek Dalík', 5],
                ['Čapí hnízdo', 4],
                ['Střelba v Uherském Brodě', 4],
                ['Vítkovští žháři', 2],
                ['Petr Kramný', 4],
                ['Ivo Rittig/Dopravní podnik', 2],
                ['ROP Severozápad', 2],
                ['Milost pro Jiřího Kajínka', 2],
                ['Poslanecké trafiky', 1],
                ['Ústavní žaloba na prezidenta', 1],
                ['Kauza Jiří Čunek', 1],
                ['Tomáš Horáček a spol.', 1],
                ['Střelba v Ostravě', 2],
                ['Nákup letadel CASA', 1],
                ['Amnestie Václava Klause', 1],
                ['Mostecká uhelná', 1],
                ['Vraždy Anny Janatkové', 1],
                ['Kauzy solárních elektráren', 1],
                ['Jaromír Balda', 2],
                ['Nehoda Romana Janouška', 1],
                ['Střet zájmů Andreje Babiše', 1],
                ['Kevin Dahlgren', 1],
                ['Abdulah Zadeh', 1],
                ['Michael Šváb a spol.', 1],
                ['Barbora Orlová', 1],
                ['Promopro', 1],
                ['Věra Marešová', 1],
                ['Zmizení Michaely Muzikářové', 1],
                ['Opencard', 1]
            ].sort( (a, b) => b[1] - a[1] )
        }]
    });
}