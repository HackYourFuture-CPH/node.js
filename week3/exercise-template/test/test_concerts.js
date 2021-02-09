const performanceDate = new Date().toISOString().replace('T', ' ').split('.')[0].replace('Z', '');

const concerts = [
    {
        id: 1,
        title: 'Metallica in Parken',
        band: 'Metallica',
        venue: 'Parken',
        performance_date: performanceDate,
        price: 200,
    },
    {
        id: 2, 
        title: 'Beyoncé in Royal Arena',
        band: 'Beyoncé',
        venue: 'Royal Arena',
        performance_date: performanceDate,
        price: 1000,
    },
]

module.exports = concerts;