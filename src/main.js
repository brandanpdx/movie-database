import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { Movie } from './movie-database'

async function order(input) {
  let movie = new Movie(input);
  await movie.getFetch();
  if (movie.ok == false) {
    $('.errors').append('error! page not found! :)')
  }
  if( movie.input === '') {
    $('.errors').append('error! please input a URL :)')
  }

  await movieInfo(movie);
}

function movieInfo(movie) {
  $('#title').text
  console.log(movie)

}

$(document).ready(function(){
  $('#movie').submit(function(event){
    event.preventDefault();
    let userInput = $('#movieInput').val();

    order(userInput);


  })

})