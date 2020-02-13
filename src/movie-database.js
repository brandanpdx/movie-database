export class Movie {
  constructor(moviename) {
    this.moviename = moviename;
    this.jsonifiedResponse = '';
  }

  async getFetch() {
    try { 
      let movie = await fetch(`http://www.omdbapi.com/?apikey=6a4013f3&t=${this.moviename}`, {
      }); 
      let jsonifiedResponse;
      if (movie.ok && movie.status == 200) {
        jsonifiedResponse = await movie.json();
      } else {
        jsonifiedResponse = false;
      }
      console.log(jsonifiedResponse);

      this.jsonifiedResponse = jsonifiedResponse;
    } catch(error) {
      console.log('error');
    }
  }
} 
