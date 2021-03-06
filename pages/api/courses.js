// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({
    courses: [
      {
        name: 'Oak Shadows',
        day: 'Thursday Practice',
        teeTime: '<strong>Tee Times:</strong> 1:00, 1:08 and 1:16',
        image: 'oak-shadows.jpg',
        par: '72',
        length: '6384',
        rating: '70.2',
        slope: '125',
      },
      {
        name: 'Stonecrest',
        day: 'Friday Practice',
        teeTime: '<strong>Tee Times:</strong> 12:00pm, 12:10pm and 12:20pm',
        image: 'stonecrest.jpg',
        par: '72',
        length: '6469',
        rating: '70.5',
        slope: '129',
      },
      {
        name: 'Hidden Cove Golf Course',
        day: 'Day One',
        teeTime: '<strong>Tee Times:</strong> 9:00am and 1:30pm',
        image: 'yatesville.jpg',
        par: '72',
        length: '6469',
        rating: '70.5',
        slope: '129',
        eventOne: 'Two Man Alternate Shot - 1 point each',
        eventTwo: 'Two Man Best Ball - 1 point each',
      },
      {
        name: 'Eagle Ridge',
        day: 'Final Day',
        teeTime: '<strong>Tee Times:</strong> 8:30am and 1:15pm',
        image: 'eagles-ridge.jpg',
        par: '71',
        length: '6177',
        rating: '68.5',
        slope: '124',
        eventOne: 'Two Man Scramble - 1 point each',
        eventTwo: 'Singles - 1.5 points each',
      },
    ],
  });
}
