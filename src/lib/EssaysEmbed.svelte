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
  

  <div bind:this={windowElement} class="window" style="position: absolute; top: {top}; left: {left}; background: white">
    <div class="title-bar">
      <div class="title-bar-text"><img src="/essays.ico" style="width: 16px; vertical-align: middle;"/>Document Viewer</div>
      <div class="title-bar-controls">
          <button aria-label="Minimize" on:click={close}></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" on:click={close}></button>
        </div>
    </div>
    <div class="window-body">
        <div class="essay-embed">
            <div>
                <iframe src="https://unoptimal.com/essays{embedUrl}" width="900px" height="600px">
                </iframe>
              </div>
              
        </div>
    </div>
  </div>
  