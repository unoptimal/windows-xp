<script>
    import { onMount } from 'svelte';
    import { makeDraggable } from '../helpers/draggable.js';
    import { moveWindow } from '../helpers/windows.js';
    import { createWindow } from '../helpers/windows.js'; 

  
    export let close;
    export let top;
    export let left;
    export let id;
  
    let windowElement;

    onMount(() => {
    makeDraggable(windowElement, (left, top) => {
    moveWindow(id, left, top);
  }, '.title-bar-controls');
});
  </script>

<div bind:this={windowElement} class="window" style="width: 400px; position: absolute; top: {top}; left: {left}; background: white">
  <div class="title-bar">
      <div class="title-bar-text"><img src="/src/assets/notepad.png" style="width: 16px; vertical-align: middle;" /> about.txt - Notepad</div>
      <div class="title-bar-controls">
        <button aria-label="Minimize" on:click={close}></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" on:click={close}></button>
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-wrapper">
        <ul class="menu">
          <li><p>File</p></li>
          <li><p>Edit</p></li>
          <li><p>Format</p></li>
          <li><p>View</p></li>
          <li><p>Help</p></li>
        </ul>
      </div>
    </div>
    <div class="window-body">
      <div class="textarea" style="width: 80%; height: 200px; padding: 0px; background: white;">
        <p>hi! i'm unoptimal. i like making <span on:click={() => createWindow('projects')} style='color:blue'>whimsical and playful</span> things. </p>
        <p>this is a windows xp rendition of my <a href='https://unoptimal.com/'>website</a>. feel free to click and drag things around :)</p>
        <p>last modified: 7/26/23</p>
      </div>
    </div>
</div>

<style>
    .title-bar-text img {
        margin-right: 2px;
    }

    .window-body{
        margin-top: -10px;
    }
    
    .menu-bar {
    background: #ede9d2;
    padding: 0 2px;
    border-bottom: 1px solid black;
    box-sizing: border-box;
    width: calc(98.5%); /* Adjust width by subtracting the desired margin */
    margin-left: .75%;
}

    
    .menu {
        display: flex;
        list-style: none;
        margin: 0;
        padding: 0;
    }
    
    .menu li {
        margin-right: 0;  /* remove margin */
        padding: 0 2px;   /* add some padding instead */
    }
    
    .menu li p {
        margin: 0;
    }
    
    .menu p {
        color: black;
        text-decoration: none;
    }
    
    .textarea {
        box-sizing: border-box;
        user-select: none;
    }

    a{
      text-decoration: none;
    }
</style>

