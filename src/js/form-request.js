import axios from 'axios';
export default class ApiRequest {
  static END_POINT = 'https://pixabay.com/api/';
  static API_KEY = '35530318-c832a4dcd48fc070f5c50cd79';
  constructor(){
    this.searchQuery ='';
    this.page = 1;
    this.numberPerPage = 40;
  }
  async fetchRequest(searchQuery){
     
    const url = 
    `${ApiRequest.END_POINT}?key=${ApiRequest.API_KEY}&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=${this.page}&per_page=${this.numberPerPage}`
    
    const {data} = await axios.get(url)
    this.incrementPage();
    return data;
  }

  incrementPage(){
    this.page +=  1;
  }
  resetPage(){
    this.page = 1;
  }
  get query(){
    return this.searchQuery;
  }
  set query(newQuery){
    this.searchQuery = newQuery;
  }
}