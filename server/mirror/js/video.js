{
    let socket;
    const $video = document.querySelector('video')

    async function findData() {
        const response = await fetch('http://localhost:3000/api/workouts');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }

  const init = () => {
      findData();
      socket = io.connect('localhost:3000');

      socket.on(`playvideo`, (data) => {
        $video.play();
    });

    socket.on(`pauzevideo`, (data) => {
        $video.pause();
    });
  };
  init();
}