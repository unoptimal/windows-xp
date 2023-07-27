<script>
    import { makeDraggable } from '../helpers/draggable.js';
    import { moveWindow  } from '../helpers/windows.js';
    import { onMount } from 'svelte';
  
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

    let essayLinks = [
    { id: 'essay0', title: 'ALL_ESSAYS.txt', embedUrl: '', duration:'N/A', dateModified:'N/A'},
    { id: 'essay1', title: 'An introduction to backpage content.txt', embedUrl: '/backpage', duration:'4 min read', dateModified:'2/22/2023'},
    { id: 'essay2', title: 'Cultivating the right itches.txt', embedUrl: '/itch', duration:'5 min read', dateModified:'12/8/2022'},
    { id: 'essay3', title: 'How I find interesting content online.txt', embedUrl: '/find', duration:'4 min read', dateModified:'9/28/2022'},
    { id: 'essay4', title: 'There are no rules.txt', embedUrl: '/rules', duration:'8 min read', dateModified:'9/23/2022'},
    { id: 'essay5', title: 'Reflections on a year of college.txt', embedUrl: '/college-reflections', duration:'15 min read', dateModified:'5/12/2022'},
    { id: 'essay6', title: 'Set your future self up.txt', embedUrl: '/set-up', duration:'2 min read', dateModified:'12/19/2021'},
    { id: 'essay7', title: `It's hard for them too.txt`, embedUrl: '/hard', duration:'2 min read', dateModified:'12/1/2021'},
    { id: 'essay8', title: 'Stop arbitrarily limiting yourself.txt', embedUrl: '/limiting', duration:'3 min read', dateModified:'10/28/2021'},
    { id: 'essay9', title: 'Some thoughts on video essays.txt', embedUrl: '/video', duration:'6 min read', dateModified:'9/24/2021'},
    { id: 'essay10', title: 'The Death of High School Passion: You.txt', embedUrl: '/passion-5', duration:'8 min read', dateModified:'8/31/2020'},
    { id: 'essay11', title: 'The Death of High School Passion: The Reality of Passion.txt', embedUrl: '/passion-4', duration:'12 min read', dateModified:'8/22/2020'},
    { id: 'essay12', title: 'The Death of High School Passion: Atypical Crossroads.txt', embedUrl: '/passion-3', duration:'13 min read', dateModified:'8/15/2020'},
    { id: 'essay13', title: 'The Death of High School Passion: The Stale Metagame.txt', embedUrl: '/passion-2', duration:'9 min read', dateModified:'8/8/2020'},
    { id: 'essay14', title: 'The Death of High School Passion: Preface.txt', embedUrl: '/passion-1', duration:'2 min read', dateModified:'8/1/2020'}
    ];
  
    function openEssay(essay) {
      if (essay.id === 'essay0') {
      window.open('https://unoptimal.com/essays', '_blank');
    } else {
        openWindow('essaysEmbed', { embedUrl: essay.embedUrl });
    }
  }

  </script>
  
  <div bind:this={windowElement} class="window" style="position: absolute; top: {top}; left: {left}; width:640px; background: white;">
    <div class="title-bar">
      <div class="title-bar-text"><img src="/essays.ico" style="width: 16px; vertical-align: middle;"/>Selected Essays</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" on:click={() => close(id)}></button>
        <button aria-label="Maximize" ></button>
        <button aria-label="Close" on:click={() => close(id)}></button>
    </div>
    </div>

    <div class="menu-bar">
      <div class="menu-wrapper">
        <ul class="menu">
          <li style='margin-left: 2px'><p>Title</p></li>
          <li><p>Length</p></li>
          <li><p>Date Modified</p></li>
        </ul>
        <div class="file-list">
          {#each essayLinks as essay (essay.id)}
            <div class="file-list-item" on:dblclick={() => openEssay(essay)}>
              <div>{essay.title}</div>
              <div>{essay.duration}</div>
              <div>{essay.dateModified}</div>
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