
// Return the list.
Template.item_list.helpers({

  item: function() {
    return groceries.find();
  }
});


// Add food items.
Template.add_item.events({

  'click #add-button' : function() {
    groceries.insert({
      food_item: $('#food-name').val()
    });
    $('#food-name').val('');
  }
});

// Delete food item.
Template.item_list.events({

  'click .glyphicon-remove' : function() {
    groceries.remove(this._id);
  },

  'click #food-list-item' : function(e) {
    $(e.target).toggleClass("selected");
    
  }

});