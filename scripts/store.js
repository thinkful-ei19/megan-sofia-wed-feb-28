'use strict';

/* global Item */

// eslint-disable-next-line no-unused-vars
const store = (function(){
  const addItem = function(item) {
    this.items.push(item);
    // try {
    //   Item.validateName(name);
    //   this.items.push(Item.create(name));
    // } catch(e) {
    //   console.log(e.message);
    // }
  };

  const findById = function(id) {
    return this.items.find(item => item.id === id);
  };

  //const findAndToggleChecked = function(id) {
  //  const item = this.findById(id);
  //  item.checked = !item.checked;
  //};

  // const findAndDelete = function(id) {
  //   this.items = this.items.filter(item => item.id !== id);
  // };

  //const findAndUpdateName = function(id, name) {
  //  try {
  //    Item.validateName(name);
  //    const item = this.findById(id);
  //    item.name = name;
  //  } catch(e) {
  //    console.log('Cannot update name: ' + e.message);
  //  }
  //};

  const toggleCheckedFilter = function() {
    this.hideCheckedItems = !this.hideCheckedItems;
  };

  const setSearchTerm = function(term) {
    this.searchTerm = term;
  };

  const findAndUpdate = function (id, newData){
    console.log(this.findById(id));
    return Object.assign(this.findById(id), newData); 
  };

  const findAndDelete = function (id){
    const idItem = this.findById(id);
    this.items.splice(idItem, 1);
  }

  return {
    items: [],
    hideCheckedItems: false,
    searchTerm: '',

    findAndUpdate,
    findAndDelete,
    addItem,
    findById,
    //findAndUpdateName
    // findAndDelete,
    //findAndToggleChecked,
    toggleCheckedFilter,
    setSearchTerm,
  };
  
}());
