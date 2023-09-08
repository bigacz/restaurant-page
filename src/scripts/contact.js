function appendContact() {
    const content = document.getElementById('content')

    const contact = document.createElement('div');
    contact.classList.add('contact');
    
    
    content.appendChild(contact);
}

export default appendContact;