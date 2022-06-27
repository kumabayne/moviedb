const path = require('path');
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.get('/api', (req, res) => {
  const today = formatDate(new Date());
  const twoWeeksAgo = formatDate(new Date() - 12096e5);

  function formatDate(date) {
    const tempDate = new Date(date);
    const year = `${tempDate.getFullYear()}`;
    let month = `${tempDate.getMonth() + 1}`;
    let day = `${tempDate.getDate()}`;

    if (month.length < 2) month = `0${month}`;
    if (day.length < 2) day = `0${day}`;

    return [year, month, day].join('-');
  }

  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=${process.env.API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&primary_release_date.gte=${twoWeeksAgo}&primary_release_date.lte=${today}&with_watch_monetization_types=flatrate`
  )
    .then((response) => response.json())
    .then((results) => res.json(results));
  // res.json({ message: 'Testing automatic deployment!' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
