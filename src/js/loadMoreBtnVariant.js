import { formToJSON } from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
import ApiService from './js/form-request';
import LoadMoreBtn from './js/loadMore';

const refs = {
  searchForm: document.getElementById('search-form'),
  gallery: document.querySelector('.gallery'),
};
const apiService = new ApiService();
const loadMoreBtn = new LoadMoreBtn({
  selector: "#btnMore",
  isHidden: true,
});

refs.searchForm.addEventListener('submit', onSearch);
loadMoreBtn.button. addEventListener('click', onLoadMore);

function onSearch (e){
  e.preventDefault();  
  apiService.query = e.currentTarget.elements.searchQuery.value
  apiService.resetPage();
  clearGallery();
  fetchApiMarkup(); 
  loadMoreBtn.show() 
};

function onLoadMore (e){ 
  getLoadMoreApiMarkup();   
}; 

function createMarkup({previewURL, largeImageURL, tags, likes, views, comments, downloads}){
  return `<div class="photo-card">
  <img src="${largeImageURL}" alt="${tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes: ${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: ${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: ${comments}</b>
    </p>
    <p class="info-item">
      <b>downloads: ${downloads}</b>
    </p>
  </div>
</div>`
};

function fetchApiMarkup(){
  // loadMoreBtn.disable(); 
  return getApiMarkup().then(markup =>{ 
    updateGallery(markup);
    loadMoreBtn.enable(); 
  })
  .catch(err => {
    loadMoreBtn.hide();
    console.log(err)
  })  
}

function getApiMarkup(){
  return apiService.fetchRequest()
  .then(({hits, totalHits}) => {
    console.log(hits)
    if (hits.length === 0){
      console.log(hits)
      loadMoreBtn.hide();
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return
    }
       Notify.success(`'Hooray! We found ${totalHits} images.'`);
      return hits.reduce((markup, hit) => markup + createMarkup(hit), "");       
  })      
}

function getLoadMoreApiMarkup(){
  loadMoreBtn.disable(); 
  return getFetchLoadMore().then(markup =>{ 
    updateGallery(markup);
    loadMoreBtn.enable();
  });
}

function getFetchLoadMore(){
  return apiService.fetchRequest()
  .then(({hits, totalHits}) => {    
    return hits.reduce((markup, hit) => markup + createMarkup(hit), "");      
  })
  .catch(err => {
    loadMoreBtn.hide();
    console.log(err)
  }); 
}
  
function updateGallery(markup){
  refs.gallery.insertAdjacentHTML('beforeend', markup)
}
function clearGallery(){
  refs.gallery.innerHTML = "";
}

// ==========================================
function showLastPage(){
  return apiService.fetchRequest()
  .then(({hits, totalHits}) => {
    if(totalHits / (hits.array * pageNumber <= 1 )){
      Notify.failure('We are sorry, but you have reached the end of search results.')
    }
        
  })
}
// ==========================================

// const { height: cardHeight } = document
//   .querySelector(".gallery")
//   .firstElementChild.getBoundingClientRect();

// window.scrollBy({
//   top: cardHeight * 2,
//   behavior: "smooth",
// });



// let lightbox = new SimpleLightbox('.gallery a', { 
//   captions: true,
//   captionDelay: 250,
//   captionPosition: 'bottom',
//   captionsData: 'alt', 
//   });
