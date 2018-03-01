var removeButton = 'forget'
var completeButton = 'done'

// After clicking on input, change brder color to pink
// document.getElementById('item').addEventListener('click', function() {
// document.getElementById('item').style.borderColor = 'pink';
// document.getElementById('item').style.borderWidth = '2px';
// document.getElementById('item').style.boxShadow = '0 0 2px 2px pink';
//
// });
//
// });

// If there is any input, add it to the list after clicking the button
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) {
    addItemTodo(value);
    document.getElementById('item').value = '';
  }
});

// Execute above function when the user releases Enter on the keyboard
var value = document.getElementById('item');

value.addEventListener('keyup', function(event) {
  event.preventDefault();
  if (event.keyCode === 13) {
    document.getElementById('add').click();
  }
});

function removeItem() {
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;

  parent.removeChild(item);
}

function completeItem(){
  var item = this.parentNode.parentNode;
  var parent = item.parentNode;
  var id = parent.id;
// Should item be added to the completed list or re-added to todo list
  var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

function addItemTodo(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeButton;

  // Click event that removes item
  remove.addEventListener('click', removeItem);

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeButton;
// Click event for completing the item

  complete.addEventListener('click', completeItem);

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.insertBefore(item, list.childNodes[0]);
}
