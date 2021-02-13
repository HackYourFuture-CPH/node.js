const performanceDate = new Date().toISOString().replace('T', ' ').split('.')[0].replace('Z', '');

const concerts = [
    {
        id: 1,
        title: 'Metallica in Parken',
        band: 'Metallica',
        venue: 'Parken',
        performance_date: performanceDate,
        created_date: '2021-02-12 19:43:07',
        price: 200,
    },
    {
        id: 2, 
        title: 'Beyonce in Royal Arena',
        band: 'Beyonce',
        venue: 'Royal Arena',
        performance_date: performanceDate,
        created_date: '2021-02-12 19:43:07',
        price: 1000,
    },
    {
        id: 3,
        title: 'Phish at Woodstock',
        band: 'Phish',
        venue: 'Woodstock',
        performance_date: '1965-02-12 19:43:07',
        created_date: '1965-02-12 19:43:07',
        price: 600,
    },
]

module.exports = concerts;