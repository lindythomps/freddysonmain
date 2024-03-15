// // Find and assign your constant.
// const clickButton = document.querySelector('.menu-icon');

// Create a click event for it that toggles a CSS class. 

// clickButton.addEventListener('click', () => {
// 	// when that icon is clicked we are going to grab the nav element. 
// 	document.querySelector('nav').classList.toggle('show-nav');
// });

document.querySelector('.toggle-btn').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show-nav');
});