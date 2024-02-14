//1. Where to add 
const placelist = document.getElementById('importent_places');
//2 .what to be added
const li = document.createElement('li');
li.innerText = 'pahartoli';

//3.  Add the child
placelist.appendChild(li);


// 1 Where to add 
const main_container = document.getElementById('main-container');

//2. what to be added
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'My Food List';
section.appendChild(h1);


const ul = document.createElement('ul');
let i = 0;
while(i < 3)
{
    const li = document.createElement('li');
    li.innerText='Food item - '+(i+1);
    ul.appendChild(li);
    i++;
}
section.appendChild(ul);

main_container.append(section);



//set innerHTML directly
const sectionDress = document.createElement('section');
sectionDress.innerHTML = `
<h1>My Dress section</h1>
<ul>
    <li>Dress 1</li>
    <li>Dress 2</li>
    <li>Dress 3</li>
</ul>
`
main_container.appendChild(sectionDress)
