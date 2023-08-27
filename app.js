document.addEventListener("DOMContentLoaded", function () {
    const content = document.querySelector(".content");
    const fontSizeSelect = document.getElementById('fontSize');

    const textFormattingButtons = document.querySelectorAll('.format-btn[data-format]');

    // Add event listener to font size select
    fontSizeSelect.addEventListener('change', () => {
        const selectedFontSize = fontSizeSelect.value;
        content.style.fontSize = selectedFontSize;
    });

    // Initialize text formatting button event listeners
    textFormattingButtons.forEach(button => {
        button.addEventListener('click', () => {
            handleTextFormatting(button);
        });
    });

    // Function to handle text formatting
    function handleTextFormatting(button) {
        const format = button.getAttribute("data-format");
        document.execCommand(format, false, null);
        content.focus();
    }

    // Add event listener for insert image button
    const insertImageButton = document.querySelector('.format-btn[data-format="insertImage"]');
    insertImageButton.addEventListener('click', () => {
        const url = prompt('Enter the image URL here:');
        if (url) {
            insertImage(url);
        }
        content.focus();
    });

    // Function to insert image
    function insertImage(url) {
        const img = document.createElement('img');
        img.src = url;
        content.appendChild(img);
    }

    // Add event listener for create link button
    const createLinkButton = document.querySelector('.format-btn[data-format="createLink"]');
    createLinkButton.addEventListener('click', () => {
        const url = prompt('Enter the link URL here:', 'http://');
        if (url) {
            document.execCommand('createLink', false, url);
        }
        content.focus();
    });
});