const arr = [
    {
        carrier: "TG",
        price: 1,
        segments: [
            {origin: 'MOW', destination: 'HKT', date: '2022-01-16T16:21:00.000Z', duration: 667}
        ]
    },
    {
        carrier: "TG",
        price: 2,
        segments: [
            {origin: 'MOW', destination: 'HKT', date: '2022-01-16T16:21:00.000Z', duration: 100},
            
        ]
    },
    {
        carrier: "TG",
        price: 3,
        segments: [
            {origin: 'MOW', destination: 'HKT', date: '2022-01-16T16:21:00.000Z', duration: 1000},
            
        ]
    }
]

const newArr = arr.reduce((a, b) => {
    console.log(a);
    a = {...a.segments, ...b.segments}
    return a
})

console.log(newArr)