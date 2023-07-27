<script>
  import { makeDraggable } from '../helpers/draggable.js';
  import { moveWindow } from '../helpers/windows.js';
  import { onMount } from 'svelte';

  export let close;
  export let id;
  export let top;
  export let left;
  export let title;
  export let video;
  export let description;
  export let image;
  export let link;

  let windowElement;

  onMount(() => {
    makeDraggable(windowElement, (left, top) => {
      moveWindow(id, left, top);
    }, '.title-bar-controls');
  });

</script>

<div bind:this={windowElement} class="window" style="width: 450px; position: absolute; top: {top}; left: {left}; background: white">
    <div class="title-bar">
        <div class="title-bar-text">{title}.html</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" on:click={close}></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" on:click={close}></button>
        </div>
    </div>
    <div class="window-body">
            <h3>{title}</h3>
            {#if image}
              <img class="project-image" src="../projects/{image}" alt="">
            {/if}
            {#if video}
            <video class="project-video" autoplay loop muted playsinline>
              <source src="../projects/{video}" type="video/mp4">
              Your browser does not support the video tag.
            </video>
            {/if}
            <p>{description}</p>
            {#if link}
              <p>View the project <a href={link} target='_blank'>here</a>.</p>
            {/if}
    </div>
</div>

<style>
    .project-video {
    max-width: 100%;
    max-height: 100%;
  }

    .project-image {
    max-width: 100%;
    max-height: 100%;
  }
  h3{
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 0;  
        padding: 10 0 10 0;  
        font-size: 2em; 
    }
</style>