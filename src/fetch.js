const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMzhmYjdhMTFjMzg2NzQ1NTYwOWMzNDAyZDNkOTRhNyIsInN1YiI6IjYzZjc2ODk0NjhiMWVhMDA4NjY4ZWEzYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Ox_CM6NqrUArhnLWd0Q2vGEB1A2YR8UpMVS8BZ6zsng'
    }
  };
  
  fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


