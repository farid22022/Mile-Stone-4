const sections = document.querySelectorAll('section');
for(const section of sections)
{
    section.style.border = '2px solid steelblue';
    section.style.marginBottom = '5px';
    section.style.borderRadius = '15px';
    section.style.padding = '7px';
    section.style.backgroundColor = 'lightgray'
}

const placeContainer = document.getElementById('place_contanier');
placeContainer.style.backgroundColor = 'yellow';