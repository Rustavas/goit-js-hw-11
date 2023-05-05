 
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



weekly-trends.css 




  weekly-trends.js 



// fetchTrendingWeek()
fetchTrendingWeek.js 



root.js 


// api.js 
// export const URL_TREND_WEEK = 'trending/movie/week';