{
    let $count = document.querySelector('#count');

    const counter = () => {
        let countDown = 5

            setInterval(() => {
                if (countDown > 0) {
                    countDown --;
                    $count.innerHTML = countDown; 
                } else {
                    window.location = "workout.html";   
                }
            }, 1000)   
    }

const init = () => {
    localStorage.getItem("storageVideo");
    //console.log(localStorage.getItem("storageVideo"));
    counter()
  };
  init();
}