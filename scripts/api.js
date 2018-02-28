'use strict';

const api = (function () {
  const BASE_URL = 'https://thinkful-list-api.herokuapp.com/sm';

  let getItems = function(callback){
    $.getJSON( `${BASE_URL}/items`, callback);
  };


  const createItem = function(name, callback){
    const newItem = JSON.stringify({name:name});

    $.ajax({
      url : `${BASE_URL}/items`,
      method: 'POST',
      contentType: 'application/JSON',
      data: newItem,
      success: callback
    });


  };

  return {
    getItems,
    createItem
  };


})();