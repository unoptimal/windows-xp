<script>
  import { onMount } from 'svelte';
  import { moveWindow } from '../helpers/windows.js';
  import { makeDraggable } from '../helpers/draggable.js';
  

  export let close;
  export let id;
  export let top;
  export let left;
  export let openWindow;

  let windowElement;

  onMount(() => {
    makeDraggable(windowElement, (left, top) => {
      moveWindow(id, left, top);
    }, '.title-bar-controls');

  });

  let projects = [
    {id: 'proj00', title:'ALL PROJECTS', description:'N/A', 'type': 'N/A', 'dateModified': 'N/A'},
    { id: 'proj0', title: 'Snail is Inevitable', link:'https://chrome.google.com/webstore/detail/snail-is-inevitable/nfeomodjclpbblbenogffoaifdkdnnoh', image:'/snail/snail.PNG', 'type': 'chrome extension', 'dateModified': '7/14/2023', description:'A chrome extension that emulates the snail hypothetical. But instead of your life, the snail goes after your cursor.'},
    { id: 'proj1', title: 'Touching Grass', video:'/grass/grass.mp4','type': 'plant + arduino', 'dateModified': '7/5/2023', description:'This is how I touch grass.',},
    { id: 'proj2', title: 'Experimental Email Signatures', link:'https://chrome.google.com/webstore/detail/experimental-email-signat/cjbhjgbckhmebddcogijipjmbekkmkbg', image:'/email/email.PNG', 'type': 'chrome extension', 'dateModified': '7/3/2023', description:'Inspired by a tweet of funny email signatures, I made a chrome extension that lets you input a random signature into your emails.',},
    {id: 'proj3', title:'Salted Circus Cashews', link:'https://www.instagram.com/p/Ct-LxdVpGxQ/', image:'/cashews/circus cashews.png', type: 'pringles + photoshop', 'dateModified': '6/27/2023', description:'I made the circus cashews can from the introduction of Someone Who Will Love You in All Your Damaged Glory and slapped it onto a Pringles can.'},
    {id: 'proj4', title:'The Onion Test', 'type': 'data scraping + game', image:'/onion/onion.PNG', link:'https://unoptimal.github.io/the-onion-test/', dateModified: '6/5/2023', description:`A little game that asks you two questions: 'Was this headline written by The Onion?'' and: 'How sure are you about that?'`},
    {id: 'proj5', title:'Josh Hart High Five Tracker', 'type': 'data scraping', 'dateModified': '3/31/2023', video:'/josh/josh.mp4', link: 'https://unoptimal.github.io/josh-hart-high-fives/', description:'NBA Player Josh Hart seemingly cannot a high five from his peers. I gathered every recorded instance I could find online.',},
    {id: 'proj6', title:'I tracked every running gag in Bojack Horseman', image:'bojack/bojack.png', link:'https://unoptimal.github.io/bojack/', 'type': 'data viz', 'dateModified': '2/10/2023', description:'I tracked every running gag in Bojack Horseman and mapped it onto an interactive timeline.', },
    {id: 'proj7', title:'The Journey of a Pencil', image:'/pencil/pencil.PNG', link: 'https://pencil-journey.vercel.app/',  'type': 'scrollytelling', 'dateModified': '12/17/2022', description:'I made a visual journey of how a pencil is made. Inspired by the titular I, Pencil.',},
    {id: 'proj8', title:'Grandeur', 'type': 'web design + video', link:'https://grandeur-six.vercel.app/', 'dateModified': '11/18/2022', image: '/grandeur/grandeur.PNG', description:'Reimagining college as a SaaS website.'},
  ];

  function openProject(projects) {
    if (projects.id === 'proj00') {
      window.open('https://unoptimal.com/code', '_blank');
    }
    openWindow('projectsEmbed', { title: projects.title, description: projects.description, image:projects.image, link: projects.link, video: projects.video });
  }
</script>

<div bind:this={windowElement} class="window" style="width: 550px; position: absolute; top: {top}; left: {left}; background: white">
  <div class="title-bar">
    <div class="title-bar-text"><img src="/projects.ico" style="width: 16px; vertical-align: middle;" />Selected Projects</div>
    <div class="title-bar-controls">
      <button aria-label="Minimize" on:click={() => close(id)}></button>
      <button aria-label="Maximize"></button>
      <button aria-label="Close" on:click={() => close(id)}></button>
  </div>
  </div>

  <div class="menu-bar">
    <div class="menu-wrapper">
      <ul class="menu">
        <li style='margin-left: 2px'><p>Title</p></li>
        <li><p>Type</p></li>
        <li><p>Date Modified</p></li>
      </ul>
      <div class="file-list">
        {#each projects as project (project.id)}
        <div class="file-list-item" on:dblclick={() => openProject(project)}>
            <div>{project.title}.html</div>
            <div>{project.type}</div>
            <div>{project.dateModified}</div>
          </div>
        {/each}
        </div>
  </div>
</div>
</div>
  

<style>
  .title-bar-text img {
      margin-right: 2px;
  }
.menu-bar {
  padding: 0 2px;
  box-sizing: border-box;
  width: calc(99.5%); /* Adjust width by subtracting the desired margin */
  margin-left: .2%;
}

.menu {
display: grid;
grid-template-columns: 2fr 1fr 1fr;
background: #ede9d2;
border-bottom: 1px solid black;
list-style: none;
margin: 0;
padding: 0;
}

.menu li {
text-align: left;
padding: 0 2px;   /* add some padding */
}


  .menu li p {
      margin: 0;
  }
  
  .menu p {
      color: black;
      text-decoration: none;
  }

.file-list {
display: flex;
flex-direction: column;
}

.file-list-item {
display: grid;
padding-left:5px;
grid-template-columns: 2fr 1fr 1fr;
}

.file-list-item:hover {
background-color: #316ac5;
}
</style>