<script>
  import { onMount } from 'svelte';
  import { windows } from './stores.js'; 
  import About from './lib/About.svelte';
  import Projects from './lib/Projects.svelte';
  import ProjectsEmbed from './lib/ProjectsEmbed.svelte';
  import Videos from './lib/Videos.svelte';
  import VideosEmbed from './lib/VideosEmbed.svelte';
  import { createWindow, closeWindow } from './helpers/windows.js'; 
  import Essays from './lib/Essays.svelte';
  import EssaysEmbed from './lib/EssaysEmbed.svelte';
  

  function openWindow(type, props = {}) {
    createWindow(type, props);
  }

  let audio;
  let clickAudio = new Audio("click.mp3");
  let isPlaying = false;
  function handleClick() {
    if (clickAudio) {
        clickAudio.play();
    }

    if (!isPlaying && audio) {
        audio.play();
        isPlaying = true;
    }
  }

  onMount(() => {
      window.addEventListener('click', handleClick);

      audio = new Audio("ambient.mp3");

      audio.addEventListener('ended', () => {
          audio.play();
      });

      openWindow('about');
      openWindow('projects');
      openWindow('videos');
      openWindow('essays');
  });

</script>


    <main>
      <div class="left-icons">
        <div class="icon icon1">
          <img src="windows-xp/src/assets/notepad.png" alt="About" on:dblclick={() => openWindow('about')}>
          <p>about.txt</p>
        </div>
        <div class="icon icon2">
          <img src="windows-xp/src/assets/projects.png" alt="Projects Icon" on:dblclick={() => openWindow('projects')}>
          <p>Selected Projects</p>
        </div>
        <div class="icon icon3">
          <img src="windows-xp/src/assets/videos.png" alt="Videos Icon" on:dblclick={() => openWindow('videos')}>
          <p>Selected Videos</p>
        </div>
        <div class="icon icon4">
          <img src="windows-xp/src/assets/essays.png" alt="Videos Icon" on:dblclick={() => openWindow('essays')}>
          <p>Selected Essays</p>
        </div>
      </div>
    
      <div class="right-logo">
        <a href='https://unoptimal.com/' target='_blank'><img src="windows-xp/src/assets/logo.png" alt=""></a>
        <p>go to main site!</p>
      </div>


    {#each $windows as window (window.id)}
    {#if window.type === 'about'}
    <About {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} openWindow={openWindow} />
      {/if}
    {#if window.type === 'projects'}
    <Projects {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} openWindow={openWindow} />
      {/if}
      {#if window.type === 'projectsEmbed'}
      <ProjectsEmbed {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} />
    {/if}
    {#if window.type === 'videos'}
    <Videos {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} openWindow={openWindow} />
      {/if}
    {#if window.type === 'videosEmbed'}
      <VideosEmbed {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} />
    {/if}
    {#if window.type === 'essays'}
    <Essays {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} openWindow={openWindow} />
      {/if}
    {#if window.type === 'essaysEmbed'}
      <EssaysEmbed {...window.props} id={window.id} top={window.top} left={window.left} close={() => closeWindow(window.id)} />
    {/if}
  {/each}
  </main>

  <style>
    main {
      display: grid;
      grid-template-columns: auto auto;
      justify-content: space-between;
      align-items: start;
      padding: 20px;
    }
    
    .left-icons {
      display: flex;
      flex-direction: column;
      margin-top: 20px;
    }
    
    .icon {
      width: 100px;
      text-align: center;
      margin-bottom: 20px;
    }
    
    .icon img {
      width: 100%;
      height: auto;
    }
    
    .icon p {
      color: white;
      margin-right:5px;
    }
    
    .right-logo {
      text-align: right;
      align-self: start;
    }
    
    .right-logo img {
      width: 100px;
      height: auto;
    }
    
    .right-logo p {
      color: white;
      margin-right: 5px;
    }
    </style>