// Function to create new item
function newItem () {
// create div to store added items
  let div = document.createElement('div')
  // grab value from user input
  let userInput = document.getElementById('input').value

  // append the user input value to the new div
  div.append(userInput)
  // append the div with the input to the list
  let list = document.getElementById('itemList')
  list.append(div)
  // clear text field after adding item
  document.getElementById('input').value = ''

  // create delete button to div
  let deleteButton = document.createElement('button')
  deleteButton.innerHTML = 'Delete'
  // append delete button to the new div
  div.append(deleteButton)
  // give delete button a class
  deleteButton.className = 'delete'
  deleteItem()
}

// function to delete item
function deleteItem () {
  // create for loop to run through all items
  let close = document.querySelectorAll('.delete')
  for (let i = 0; i < close.length; i++) {
    // run function to remove particular item when delete button is clicked
    close[i].onclick = function () {
      // remove parent of item from display when clicking on button
      this.parentElement.style.display = 'none'
    }
  }
}
