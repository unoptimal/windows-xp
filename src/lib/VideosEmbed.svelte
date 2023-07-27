<script>
  import { makeDraggable } from '../helpers/draggable.js';
  import { moveWindow } from '../helpers/windows.js';
  import { onMount } from 'svelte';

  export let close;
  export let id;
  export let top;
  export let left;
  export let embedUrl;

  let windowElement;

  onMount(() => {
    makeDraggable(windowElement, (left, top) => {
      moveWindow(id, left, top);
    }, '.title-bar-controls');
  });
</script>

<style>
  .youtube-embed {
      width: 600px;
      height: 315px;
  }
  .youtube-embed iframe {
      width: 100%;
      height: 100%;
      display: block; /* to remove space at the bottom */
  }
</style>

<div bind:this={windowElement} class="window" style="position: absolute; top: {top}; left: {left}; background: white">
  <div class="title-bar">
    <div class="title-bar-text"><img src="/src/assets/video.ico" style="width: 16px; vertical-align: middle;"/>Video Player</div>
    <div class="title-bar-controls">
        <button aria-label="Minimize" on:click={close}></button>
        <button aria-label="Maximize"></button>
        <button aria-label="Close" on:click={close}></button>
      </div>
  </div>
  <div class="window-body">
      <div class="youtube-embed">
          <iframe 
              src='https://www.youtube.com/{embedUrl}'
              frameborder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowfullscreen>
          </iframe>
      </div>
  </div>
</div>
