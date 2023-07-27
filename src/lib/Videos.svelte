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

    let videoLinks = [
      { id: 'video0', title: 'ALL_VIDEOS.mp4', embedUrl: '@unoptimal', views:'N/A', duration:'N/A', dateModified:'N/A'},
      { id: 'video1', title: 'a psa for the dreamers.mp4', embedUrl: 'embed/A5QlLUUroiI', views:'270', duration:'00:05:49', dateModified:'7/1/2023 7:16 PM'},
      {id: 'video2', title:'the world is a very malleable place.mp4', embedUrl: 'embed/2fERmfmVb58', views:'225', duration:'00:01:41', dateModified:'4/15/2023 11:43 PM'},
      {id: 'video3', title:'every running gag in bojack horseman.mp4', embedUrl: 'embed/qeDGjrbWSOw', views:'450,982', duration:'00:18:37', dateModified:'2/10/2023 9:01 PM'},
      {id: 'video4', title:'what is grandeur.mp4', embedUrl: 'embed/kIpOuMnGpt4', views:'355', duration:'00:01:11', dateModified:'11/18/2022 6:27 PM'},
      {id: 'video5', title:'beauty is in the details.mp4', embedUrl: 'embed/W0W8V01mR6M', views:'548', duration:'00:02:53', dateModified:'11/6/2022 1:13 AM'},
      {id: 'video6', title:'meta_student_day_in_the_life.mp4', embedUrl: 'embed/8p7pphdSOYk', views:'955', duration:'00:05:27', dateModified:'10/28/2022 4:42 PM'},
      // {id: 'video7', title:'doing_things.mp4', embedUrl: 'e1ThobuSzAI', views:'175', duration:'00:01:41', dateModified:'10/8/2022 1:34 PM'},
      {id: 'video8', title:'it all starts with spontaneity.mp4', embedUrl: 'embed/hsfLmZ7vk7A', views:'210', duration:'00:02:36', dateModified:'1/15/2022 11:31 PM'},
      // {id: 'video9', title:'spontaneity_rough.mp4', embedUrl: 'PlGpO938eV4', views:'128', duration:'00:02:28', dateModified:'1/11/2022 7:11 PM'},
      // {id: 'video10', title:'spontaneity_three.mp4', embedUrl: '-OmY0dgca3o', views:'42', duration:'00:02:20', dateModified:'1/8/2022 6:23 PM'},
      // {id: 'video11', title:'spontaneity_two.mp4', embedUrl: 'aJMU0DyItQk', views:'49', duration:'00:03:32', dateModified:'1/7/2022 8:42 PM'},
      // {id: 'video12', title:'spontaneity_one.mp4', embedUrl: '4a4GKfhorOA', views:'96', duration:'00:03:47', dateModified:'1/6/2022 5:23 PM'},
      {id: 'video13', title:'sometimes i forget im dying.mp4', embedUrl: 'embed/EUkfs_Q4nms', views:'431', duration:'00:04:20', dateModified:'10/15/2021 6:48 PM'},
      // {id: 'video14', title:'not_deep.mp4', embedUrl: 'Xta5zHHD6Oc', views:'207', duration:'00:03:14', dateModified:'10/1/2021 6:01 PM'},
      // {id: 'video15', title:'threading_the_needle.mp4', embedUrl: 'vIzbYKnrTsg', views:'162', duration:'00:06:44', dateModified:'7/31/2021 7:42 PM'},
      // {id: 'video16', title:'dunk_everything.mp4', embedUrl: '1VACR5SufyY', views:'108', duration:'00:03:45', dateModified:'6/21/2021 5:02 PM'},
      {id: 'video17', title:'dont dread together.mp4', embedUrl: 'embed/Bg7hTJ_EMvg', views:'284', duration:'00:05:53', dateModified:'5/8/2021 9:02 PM'},
      {id: 'video18', title:'college_application_nutshell.mp4', embedUrl: 'embed/EGMkrnQMNjg', views:'64,386', duration:'00:08:54', dateModified:'3/5/2021 2:55 PM'},
      // {id: 'video19', title:'superpowers.mp4', embedUrl: 'vTMzjkMOvBE', views:'112', duration:'00:07:59', dateModified:'1/28/2021 9:04 PM'},
    ];
  
    function openVideo(video) {
      if (video.id === 'video0') {
      window.open('https://www.youtube.com/@unoptimal', '_blank');
    } else {
      openWindow('videosEmbed', { embedUrl: video.embedUrl });
    }
  }    
  </script>
  
  <div bind:this={windowElement} class="window" style="position: absolute; top: {top}; left: {left}; width:600px; background: white;">
    <div class="title-bar">
      <div class="title-bar-text"><img src="/src/assets/video.ico" style="width: 16px; vertical-align: middle;"/>Selected Videos</div>
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
          <li><p>Views</p></li>
          <li><p>Duration</p></li>
          <li><p>Date Modified</p></li>
        </ul>
        <div class="file-list">
          {#each videoLinks as video (video.id)}
            <div class="file-list-item" on:dblclick={() => openVideo(video)}>
              <div>{video.title}</div>
              <div>{video.views}</div>
              <div>{video.duration}</div>
              <div>{video.dateModified}</div>
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
  grid-template-columns: 2fr 1fr 1fr 1fr; /* Distribute the space evenly among columns */
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
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

.file-list-item:hover {
  background-color: #316ac5;
}
  </style>