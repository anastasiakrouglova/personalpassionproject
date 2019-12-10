{
    let socket;

    const time = () => {
        let $currentTime = document.querySelector('#time');
       
        let currentDate = new Date();

        let dateHours = currentDate.getHours();
        let dateMinutes = currentDate.getMinutes();
        //let dateSeconds = currentDate.getSeconds();

        if (dateMinutes < 10) {
            $currentTime.innerHTML = dateHours + ":0" + dateMinutes;
        } else {
            $currentTime.innerHTML = dateHours + ":" + dateMinutes;
        }
        window.requestAnimationFrame(time);
    }

    async function findData() {
        const response = await fetch('https://mirrorcontrol.herokuapp.com/api/workouts');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }
    
    startVideo = (videoSrc) => {
        console.log(videoSrc);
        localStorage.setItem("storageVideo",videoSrc);
        window.location = "aftellen.html";
    }

    const init = () => {
        time()
        findData();
        socket = io.connect('https://mirrorcontrol.herokuapp.com');

        socket.on(`startplay`, (data) => {
            //console.log(data.videoSrc);
            startVideo(data.videoSrc);
        });
        

        socket.on(`connect`, () => {
            console.log(`Connected: ${socket.id}`);
        });
    };
    init();
    

}

