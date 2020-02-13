export class Movie {
  constructor(moviename) {
    this.moviename = moviename;
    this.jsonifiedResponse = '';
  }

  async getFetch() {
    try { 
      let movie = await fetch(`http://www.omdbapi.com/?apikey=${process.env.APIKEY}&t=${this.moviename}`, {
      }); 
      let jsonifiedResponse;
      if (movie.ok && movie.status == 200) {
        jsonifiedResponse = await movie.json();
      } else {
        jsonifiedResponse = false;
      }
      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      console.log('error');
    }
  }
} 
