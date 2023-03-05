const startButton = () => {
    const sec = document.getElementById('sec');
    const min = document.getElementById('min');
    const hour = document.getElementById('hour');
    counting();
    document.getElementById('startButton').setAttribute('disabled','');
};

const counting = () => {

    const timer = setInterval(function(){
        let index = parseInt(sec.innerText);
        index++;
        sec.innerText = index;
        if(parseInt(sec.innerText) == 61){
            sec.innerText = 1;
            min.innerText = parseInt(min.innerText)+1;
        };
        if(parseInt(min.innerText)== 61){
            min.innerText = 1;
            hour.innerText = parseInt(hour.innerText)+1;
        };

        document.getElementById('stopButton').addEventListener('click',function(){
            clearInterval(timer);
            document.getElementById('startButton').removeAttribute('disabled');
        });

        document.getElementById('resetButton').addEventListener('click',function(){
            clearInterval(timer);
            sec.innerText = '00';
            min.innerText = '00';
            hour.innerText = '00';
            document.getElementById('startButton').removeAttribute('disabled');
        });
    } ,1000);
};
