// select toggle btn wrapper
const toggleBtnIcons = document.querySelector('.toggle-icon');
// select both the toggle btns as well the bars and the times
const toggleBtnBars = document.querySelector('.times');
const toggleBtntimes = document.querySelector('.bars');
// select the links-container and the nav links
const linksContainer = document.querySelector('.links-container');
const navContainer = document.querySelector('.nav-links');
// then select the social icons
const showIcons = document.querySelector('.social-icons'); // This variable is declared but not used in the provided code.

// Now, Let's set our function 

function toggleIcons(){
    const linkContainerHeight = linksContainer.getBoundingClientRect().height;
    const navContainerHeight = navContainer.getBoundingClientRect().height;

    if(linkContainerHeight === 0){
        linksContainer.style.height = `${navContainerHeight}px`;
        toggleBtnBars.style.display = "block"; // This refers to '.times' (the 'X' icon)
        toggleBtntimes.style.display = "none";  // This refers to '.bars' (the 'hamburger' icon)
    }
    else if(linkContainerHeight === navContainerHeight){  
        linksContainer.style.height = 0;
        toggleBtntimes.style.display = "block"; // This refers to '.bars' (the 'hamburger' icon)
        toggleBtnBars.style.display = "none"; // This refers to '.times' (the 'X' icon)
    }
}
toggleBtnIcons.addEventListener('click', toggleIcons);