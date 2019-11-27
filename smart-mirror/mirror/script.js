{
    const url = 'http://localhost:3000/api/workouts';

    let socket;
    let videoStarted = false;


    async function findData() {
        const response = await fetch('http://localhost:3000/api/workouts');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }
    {
        startVideo = () => {
            console.log('in startfunctie');
        }

      const init = () => {
          findData();

          socket = io.connect('localhost:3000');

          socket.on(`startplay`, (data) => {
            console.log(data);
              console.log('lalalalalal');
              startVideo();
          });

          socket.on(`connect`, () => {
              console.log(`Connected: ${socket.id}`);
          });

          if (videoStarted === true) {
              console.log('VIDEO WORDT GESTAAAAAART')
          } else {
              console.log('VIDEO is nog niet gestart')
          }
      };
      init();
    }

}

