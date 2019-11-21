export class BikeIndex {
  async getBikeIndexByCity(city) {
    try {
      let response = await fetch(`https://cors-anywhere.herokuapp.com/bikeindex.org:443/api/v3/search?page=1&per_page=5&location=${city}&distance=25&stolenness=proximity`);
      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    } catch(error) {
      error("There was an error handling your request: " + error.message);
    }
  }
}
