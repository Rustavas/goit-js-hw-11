 
// import axios from 'axios';

// const refs = {
//   weeklyTrendsPicture: document.querySelector('.weekly-trends_picture'),
// }
// // console.log(refs.weeklyTrendsPicture)
// const BASE_URL = 'https://api.themoviedb.org/3/';

//   const API_KEY = 'e228a48ce493c266d1ac0e25cdb4d9c4';
     
//   const URL_TREND_WEEK = 'trending/movie/week';

  // function getWeeklyTrends(){
  //   return fetch(`${BASE_URL}${URL_TREND_WEEK}?api_key=${API_KEY}`)
  //   .then((response) => response.json())
  // }

//  getWeeklyTrends().then(({results}) => {
//   console.log(results)
  // if (results.length === 0){
  //   console.log(error);
  // }
//   const markup = results.reduce((markup, result) =>  createMarkup(result), "")
//   updateWeeklyTrends(markup)
  
//  })
//  .catch(err){
//   console.log(err)
// };

// function createMarkup({title, vote_average, poster_path, genre_ids, release_date, media_type, backdrop_path
// }){

// return `<div>https://api.themoviedb.org/3${backdrop_path}</div>`
//  return `
//   <div class="weekly-trends_poster>
//     <img src=${poster_path} class="weekly-trends_image">
//     <h4 class="weekly-trends_title">${title}</h4>
//     <p class="weekly-trends_genre">${media_type} | ${release_date}</p>
//  </div>`;
 
// } 
// createMarkup({title, vote_average, poster_path, genre_ids, release_date, media_type})

// function updateWeeklyTrends(markup){
  //  refs.weeklyTrendsPicture.innerHtml = markup;
  //  refs.weeklyTrendsPicture.insertAdjacentHTML('beforeend', markup)
// }

  // async function fetchRequest(){
  //   try {
  //     const response = await axios.get(
  //       `${BASE_URL}${URL_TREND_WEEK}?api_key=${API_KEY}`
  //     );
      
  //     console.log(response.data.results);
  
  //     return response.data.results;
    
  //   }catch (error){
  //     console.log(error)
  //   };
  // }
  // // console.log(fetchRequest())
  // fetchRequest()

 weekly-trends.html 
<section class="weekly-trends">
  <div class="weekly-trends_caption">
    <h2 class="weekly-trends_title">Weekly trends</h2>
    <button type="button" class="weekly-trends_btn">See all</button>
  </div>
  <div id="weekly-trends" class="weekly-trends_poster"></div>
</section>


weekly-trends.css 
.weekly-trends{
 
  width: auto;
  min-width: 280px;
  min-height: 489px;
  padding-top: 40px;
  background-color: #282828;
  margin: auto;
  // background: linear-gradient(180deg, rgba(0, 0, 0, 0) 63.48%, rgba(0, 0, 0, 0.9) 92.16%);

  @include mobile {
    width: 440px;
  }
  @include tablet {
    width: 704px;
    padding-top: 52px;
  }
  @include desktop {
    width: 1336px;
    padding-top: 80px;
  }
}
.weekly-trends_caption{
  display: flex; 
  vertical-align: center;
  align-items: center;
}
.weekly-trends_title{
  margin-top: 0;
  margin-right: auto;
  margin-bottom: 0;
  margin-left: 0;

  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19;
  text-transform: uppercase;
  color: #FFFFFF;
}
.weekly-trends_btn{
  margin-top: 0;
  margin-right: 0;
  margin-bottom: 0;
  margin-left: auto;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  line-height: 1.19px;
  color: #F87719;
  background: transparent;
  border: none;
  
}
.weekly-trends_poster{
    width: 100%;
    height: auto;
    border-radius: 5px;
    
    @include tablet {
      width: 224px;
      height: 325px;
    }
    @include desktop {
      width: 395px;
      height: 574px;
    }
  }

  weekly-trends.js 
  import axios from 'axios';
import { API_KEY, BASE_URL, URL_TREND_WEEK} from '../constants/api';
import { ROOT_WEEKLY_TRENDS_CONTAINER } from '../constants/root';
import {fetchTrendingWeek} from '../utils/fetchTrendWeek'


// fetchTrendingWeek()
fetchTrendingWeek.js 

// Function to fetch weekly trends  movies from TMDB API
export async function fetchTrendingWeek() {
  try {
    const response = await axios.get(
      `${BASE_URL}${URL_TREND_WEEK}?api_key=${API_KEY}`
    );
    return response.data.results;
  } catch (error) {
    console.error(error);
    // renderOnError();
  }
}

root.js 
export const ROOT_WEEKLY_TRENDS_CONTAINER = document.getElementById('weekly-trends');

// api.js 
// export const URL_TREND_WEEK = 'trending/movie/week';