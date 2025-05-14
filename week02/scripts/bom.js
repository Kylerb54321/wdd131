const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
  // Trim input and check if it's not empty
  if (input.value.trim() !== '') {
    // Create list item
    const li = document.createElement('li');
    li.textContent = input.value;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Delete functionality
    deleteButton.addEventListener('click', function () {
      list.removeChild(li);
      input.focus();
    });

    // Append delete button to the list item
    li.append(deleteButton);
    // Append list item to the list
    list.append(li);

    // Clear the input
    input.value = '';
  }

  // Always focus back on the input
  input.focus();
});
