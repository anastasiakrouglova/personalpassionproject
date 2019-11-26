{
    const url = 'http://localhost:3000/api/workouts';

    async function findData() {
        const response = await fetch('http://localhost:3000/api/workouts');
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

