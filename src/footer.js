function appendFooter(appender) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const addresHeader = document.createElement('h3');
    addresHeader.textContent = "Address:"
    const addressParagraph = document.createElement('p');
    
    const addressBox = document.createElement('div');
    addressBox.appendChild(addresHeader);
    addressBox.appendChild(addressParagraph);

    footer.appendChild(addressBox);
    appender.appendChild(footer)
}

export default appendFooter;