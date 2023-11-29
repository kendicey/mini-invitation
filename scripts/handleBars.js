const source = document.getElementById('invitation-template').innerHTML;

const template = Handlebars.compile(source);

const context = {
    recipient: 'Alex',
    host: 'PureVibe',
    eventDetails: [
        "Date: 31th December, 2023", 
        "Time: 12 noon", 
        "Address: 1234 Main Street, Vancouver", 
        "RSVP: (778) 321-1234"
    ]
};

const compiledHTML = template(context);

const fill = document.getElementById('invitation');
fill.innerHTML = compiledHTML;