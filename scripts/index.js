'use strict';

/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach((item) => store.addItem(item));
    const item = store.items[0];
    shoppingList.render();
  });
});

//store.items.push(Item.create('apples'));

