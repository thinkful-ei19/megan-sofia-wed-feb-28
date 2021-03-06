'use strict';
/* global store*/


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


  const updateItem = function(id, updateData, callback){
    $.ajax( {
      url : `${BASE_URL}/items/${id}`,
      method : 'PATCH',
      contentType : 'application/json',
      data : JSON.stringify(updateData),
      success : callback

    });
  };

  const deleteItem = function(id, callback){
    $.ajax( {
      url : `${BASE_URL}/items/${id}`,
      method : 'DELETE',
      contentType : 'application/json',
      success : callback
    });
  };

  return {
    getItems,
    createItem,
    updateItem,
    deleteItem
  };


})();