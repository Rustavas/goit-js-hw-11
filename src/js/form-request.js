export default class ApiRequest {

  constructor(){
    this.searchQuery ='';
  }
  fetchRequest(searchQuery){
    console.log(this)
    const options = {
      headers: {
        Autorization:'35530318-c832a4dcd48fc070f5c50cd79'
      }
    };
    const url = 
    `https://pixabay.com/api/?key=35530318-c832a4dcd48fc070f5c50cd79&q=${this.searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&page=1&per_page=16`
    fetch(url)
    .then(response => response.json())
    .then(response => console.log(response));
  }

  get query(){
    return this.searchQuery;
  }
  set query(newQuery){
    this.searchQuery = newQuery;
  }
}