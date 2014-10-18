
// Return the list.
Template.item_list.helpers({

  item: function() {
    return groceries.find({}, {
      sort: {sort: 1}
    });
  }

});

// Add food items.
Template.add_item.events({

  'click #add-button' : function(e) {
    e.preventDefault();

    if ($('#food-name').val().length) {

      // Create sort field sequence value.
      var total = groceries.find().count();
      if (total == 0) {
        var seq = total;
      } else {
        var seq = total++;
      }

      groceries.insert({
        food_item: $('#food-name').val(),
        sort: seq
      });
      $('#food-name').val('');
    }
  }

});

// Make sortable.
Template.item_list.rendered = function() {
  /*
  this.$('#sortable').sortable({

    stop: function(e, ui) {

      target = ui.item.get(0);
      before = ui.item.prev().get(0);
      after = ui.item.next().get(0);

      if (!before) {
        newSort = Blaze.getData(after).sort -1;
      } else if (!after) {
        newSort = Blaze.getData(before).sort +1;
      } else {
        newSort = (Blaze.getData(after).sort +
                  Blaze.getData(before).sort) / 2;
      }

      groceries.update(
        {_id: Blaze.getData(target)._id},
        {$set: {sort: newSort}}
      );
    }
  })
  */

}

// Select and delete food item.
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
