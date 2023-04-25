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
window.addEventListener("scroll", handleScroll);
refs.gallery.addEventListener("click", disableClick)

function disableClick(e){
  if(e.target.nodeName === "img"){
    e.preventDefault();
  }
}
function onSearch (e){
  e.preventDefault();  
  apiService.query = e.currentTarget.elements.searchQuery.value
  apiService.resetPage();
  clearGallery();
  getSearchApiMarkup(); 
}; 

function createMarkup({largeImageURL, tags, likes, views, comments, downloads, webformatURL
}){
  return `<div class="photo-card">
  <a href="${largeImageURL}">
  <img src="${webformatURL}" 
  alt="${tags}" loading="lazy" /></a>
  <div class="info">
    <p class="info-item">
      <b>Likes: <br>${likes}</b>
    </p>
    <p class="info-item">
      <b>Views: <br>${views}</b>
    </p>
    <p class="info-item">
      <b>Comments: <br>${comments}</b>
    </p>
    <p class="info-item">
      <b>downloads: <br>${downloads}</b>
    </p>
  </div>
</div>`
};

function getSearchApiMarkup(){
  return getFetchSearch().then(markup =>{ 
    updateGallery(markup);
      const { height: cardHeight } = document
  .querySelector(".gallery")
  .firstElementChild.getBoundingClientRect();

window.scrollBy({
  top: cardHeight * 2,
  behavior: "smooth",
});
  })
  .catch(err => {
    console.log(err)
  })  
}

function getFetchSearch(){
  return apiService.fetchRequest()
  .then(({hits, totalHits}) => {
    console.log(hits)
    if (hits.length === 0){
      console.log(hits)
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return
    }
       Notify.success(`'Hooray! We found ${totalHits} images.'`);
      return hits.reduce((markup, hit) => markup + createMarkup(hit), "");       
  })      
}

function getLoadMoreApiMarkup(){
  return getFetchLoadMore().then(markup =>{ 
    updateGallery(markup);
  
  });
}

function getFetchLoadMore(){
  return apiService.fetchRequest()
  .then(({hits, totalHits}) => {
    if(totalHits / (hits.length * apiService.page) <= 1 ){
      Notify.failure('We are sorry, but you have reached the end of search results.')
      return hits.reduce((markup, hit) => markup + createMarkup(hit), "");
    } 
    return hits.reduce((markup, hit) => markup + createMarkup(hit), "");      
  })
  .catch(err => {
    console.log(err)
  }); 
}
  
function updateGallery(markup){
  refs.gallery.insertAdjacentHTML('beforeend', markup)
  lightbox.refresh()
}
function clearGallery(){
  refs.gallery.innerHTML = "";
}
function handleScroll() {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    getLoadMoreApiMarkup();
    
  }
}

const lightbox = new SimpleLightbox('.gallery a', { 
  captions: true,
  captionDelay: 250,
  captionPosition: 'bottom',
  captionsData: 'alt', 
  });
