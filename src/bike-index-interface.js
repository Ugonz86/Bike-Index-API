import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';
import { BikeIndex } from './bike-index-service';

$(document).ready(function() {
  $('#locationButton').click(function() {

    const city = $('#location').val();
    $('#location').val("");

    (async () => {
      // The API call is business logic.
      let bikeIndexVariable = new BikeIndex();
      const response = await bikeIndexVariable.getBikeIndexByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $('.showList').prepend(`The bikes stolen recently in <em><strong>${city}</strong></em> are: `);
      response.bikes.forEach ((bike) => {
        const id = bike.id;
        const stolen_location = bike.stolen_location;
        const frame_model = bike.frame_model;
        const frame_colors = bike.frame_colors;
        $('#listDisplay').append(`<li>id: ${id}, stolen location: ${stolen_location}, frame model: ${frame_model}, frame_colors: ${frame_colors}</li>`);
        $("#resultDiv").slideDown("ease");
        $("#searchDiv").hide("ease");
      });
    }
  });
});
