function appendFooter(appender) {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    
    const addresHeader = document.createElement('h3');
    addresHeader.textContent = "Address"
    const hr1 = document.createElement('hr');

    const addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = `531 Rosecrans Blvd <br> Cleveland Ohio `
    
    const addressBox = document.createElement('div');
    addressBox.appendChild(addresHeader);
    addressBox.appendChild(hr1);
    addressBox.appendChild(addressParagraph);

    ////

    const contactHeader = document.createElement('h3');
    contactHeader.textContent = 'Contact'
    const contactParagraph = document.createElement('p');
    contactParagraph.innerHTML = '+14 764 876 984 <br> realemail@gmail.com'

    const contactBox = document.createElement('div');
    contactBox.appendChild(contactHeader);
    contactBox.appendChild(contactParagraph);
    ////

    footer.appendChild(addressBox);
    footer.appendChild(contactBox);
    appender.appendChild(footer)
}

export default appendFooter;