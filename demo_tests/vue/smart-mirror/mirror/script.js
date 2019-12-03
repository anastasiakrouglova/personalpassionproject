{
    const url = 'https://mirrorcontrol.herokuapp.com/api/workouts';

    async function findData() {
        const response = await fetch('https://mirrorcontrol.herokuapp.com/api/workouts');
        const myJson = await response.json();
        console.log(JSON.stringify(myJson));
    }
    
    {
      const init = () => {
          findData();
      };
      init();
    }

}

