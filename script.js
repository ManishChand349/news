const navigationOptions = [
     {
          name: 'home',
          color: '#2507ad'
     },
     {
          name: 'likes',
          color: '#f00c0c'
     },
     {
          name: 'search',
          color: '#1e2e1e'
     },
     {
          name: 'profile',
          color: '#d880f2'
     }
];

const links = document.querySelectorAll('nav a');

function handleClick(e){
     e.preventDefault();
     links.forEach(link =>{
          if(link.classList.contains('active')){
               link.classList.remove('active');
          }
     });

     const name = this.textContent.trim().toLowerCase();
     const { color } = navigationOptions.find(item => item.name === name);

     const style = window.getComputedStyle(this);
     const hoverColor = style.getPropertyValue('--hover-c');
     if(color !== hoverColor){
          this.style.setProperty('--hover-bg', `${color}20`);
          this.style.setProperty('--hover-c', color);
     }

     this.classList.add('active');
     document.querySelector('body').style.background = color;
}

 links.forEach(link => link.addEventListener('click', handleClick))
