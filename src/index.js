import { Notify } from 'notiflix/build/notiflix-notify-aio';
// Описан в документации
import SimpleLightbox from "simplelightbox";
// Дополнительный импорт стилей
import "simplelightbox/dist/simple-lightbox.min.css";
import ApiService from './js/form-request';

const refs = {
  searchForm: document.getElementById('search-form'),
  moreBtn: document.getElementById('btnMore'),
};
const apiService = new ApiService();
refs.searchForm.addEventListener('submit', onsearch);
refs.moreBtn.addEventListener('click', onLoadMore);

function onsearch (e){
  e.preventDefault();
  // const searchQuery = 'cat'
  apiService.query = 'cat'
  apiService.fetchRequest();
  
}

function onLoadMore (e){
  apiService.fetchRequest();
}
