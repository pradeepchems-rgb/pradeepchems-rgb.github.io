function greet(lang) {
    const message = document.getElementById('display-message');
    
    const verbs = {
        'Tamil': 'Nambu (Trust)',
        'Malayalam': 'Snehikkuka (Love)',
        'Telugu': 'Cheyu (Do)',
        'Kannada': 'Madu (Do)',
        'Hindi': 'Karo (Do)'
    };

    message.innerHTML = `In ${lang}, the power verb is: <br> <span style="color:#e67e22">${verbs[lang]}</span>`;
}