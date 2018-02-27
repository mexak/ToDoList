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
//
//   complete.addEventListener('click', completeItem);
//
  buttons.appendChild(remove);
  buttons.appendChild(complete);
  item.appendChild(buttons);
//
//   list.insertBefore(item, list.childNodes[0]);
  list.insertBefore(item, list.childNodes[0]);
    }
//
//
// function removeItem() {
//   var item = this.parentNode.parentNode;
//   var parent = item.parentNode;
//
//   parent.removeChild(item);
// }
//
// function copmleteItem(){
//   var item = this.parentNode.parentNode;
//   var parent = item.parentNode;
//   var id = parent.id;
//
//   var target = (id === 'todo') ? document.getElementById('completed'):document.getElementById('todo');
//
//   parent.removeChild(item);
//   target.insertBefore(item, target.childNodes[0]);

//   if (id === 'todo'){
// // todo item to be completed
//   target = document.getElementById('completed');
//   } else {
// // todo item to be redone
//   target = document.getElementById('todo');
//
//   }
// }
