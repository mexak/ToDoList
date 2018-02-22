var removeButton = 'forget'
var completeButton = 'done'

// After clicking on input, change border color to blue
document.getElementById('item').addEventListener('click', function() {
document.getElementById('item').style.borderColor = '#5A00FC';
document.getElementById('item').style.borderWidth = 'medium';

});

// If there is any input, add it to the list after clicking the button
document.getElementById('add').addEventListener('click', function() {
  var value = document.getElementById('item').value;
  if (value) addItemTodo(value);
});


function addItemTodo(text) {
  var list = document.getElementById('todo');

  var item = document.createElement('li');
  item.innerText = text;

  var buttons = document.createElement('div');
  buttons.classList.add('buttons');

  var remove = document.createElement('button');
  remove.classList.add('remove');
  remove.innerHTML = removeButton;

  var complete = document.createElement('button');
  complete.classList.add('complete');
  complete.innerHTML = completeButton;

  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);

  list.appendChild(item);
    }
