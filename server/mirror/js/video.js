{
    let socket;
  const $video = document.querySelector('video');
  const $bpm = document.querySelector('#statusText');

    async function findData() {
        const response = await fetch('https://mirrorcontrol.herokuapp.com/api/workouts');
        const myJson = await response.json();
        //console.log(JSON.stringify(myJson));
    }

  const init = () => {
      findData();
    socket = io.connect('https://mirrorcontrol.herokuapp.com');
    
    socket.on(`videosrc`, (data) => {
      console.log('dit is videoID:' + data);
    });

    socket.on(`playvideo`, (data) => {
        console.log(data);
        $video.play();
      });

      socket.on(`pauzevideo`, (data) => {
        $video.pause();
      });
    
      socket.on(`sendbluetooth`, (data) => {
        console.log('dit is je hartslag ' + data.heartRate);
        $bpm.innerHTML = data.heartRate
      })
    
    
      
  };
  init();
}