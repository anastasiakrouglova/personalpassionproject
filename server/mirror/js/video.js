{
    let socket;
    const $video = document.querySelector('video')

    async function findData() {
        const response = await fetch('https://mirrorcontrol.herokuapp.com/api/workouts');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }

  const init = () => {
      findData();
      socket = io.connect('https://mirrorcontrol.herokuapp.com');

      socket.on(`playvideo`, (data) => {
        $video.play();
    });

    socket.on(`pauzevideo`, (data) => {
        $video.pause();
    });
  };
  init();
}