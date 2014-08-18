
// Return the list.
Template.item_list.helpers({

  item: function() {
    return groceries.find();
  }

});


// Add food items.
Template.add_item.events({
  
  'click #add-button' : function(e) {
    e.preventDefault();

    if ($('#food-name').val().length) {
      groceries.insert({
        food_item: $('#food-name').val()
      });
      $('#food-name').val('');
    }
  }

});

// Delete food item.
Template.item_list.events({

  // Highlight the row.
  'click #food-list-item' : function(e) {
    $(e.target).toggleClass('selected');
  },

  // Complete the task.
  'click .glyphicon-ok' : function(e) {
    $(e.target).parent().toggleClass('completed');
    $(e.target).parent().removeClass('selected');
  },

  // Delete the item.
  'click .glyphicon-remove' : function() {
    groceries.remove(this._id);
  }

});

// Total item count.
Template.add_item.helpers({

  total_items: function() {
    return groceries.find().count();
  }

});