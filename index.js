let userChoice;
function ComputerChoice(){
    let Choice=Math.random();
    if(Choice<=0.33){
        return 'Rock';
    }
    else if(Choice>0.33 && Choice<=0.66) return 'Paper';
    else return 'Scissor';
}

function calculateScore(result){
    let score=JSON.parse(localStorage.getItem('score')) || {
        'win':0,
        'Lose':0,
        'Tie':0
    }
    if(result==='You Win'){
        score.win++;
    }
    else if(result==='Computer Win'){
        score.Lose++;
    }
    else score.Tie++;
    localStorage.setItem('score',JSON.stringify(score));
}
function calculateResult(userChoice,computerChoice){
    let result;
    if(userChoice==='Rock'){
        if(computerChoice==='Rock') result='Tie';
        else if(computerChoice==='Paper') result= 'Computer Win';
        else result= 'You Win';
    }
    else if(userChoice==='Papper'){
        if(computerChoice==='Rock') result= 'You Win';
        else if(computerChoice==='Paper') result= 'Tie'; 
        else result= 'Computer Win';
    }
    else {
        if(computerChoice==='Rock') result= 'Computer Win';
        else if(computerChoice==='Paper') result= 'You Win'; 
        else result= 'Tie'; 
    }
    calculateScore(result);
    return `You selected ${userChoice} and computer selected ${computerChoice} , ${result}`
}
function buttonClicked(Choice){
    const resultElement=document.querySelector('.result');
    const scoreElement=document.querySelector('.score');
    userChoice=Choice;
    let computerChoice=ComputerChoice();

    let result=calculateResult(userChoice,computerChoice);
    let score=JSON.parse(localStorage.getItem('score')) || {
        'win':0,
        'Lose':0,
        'Tie':0
    };
    scoreElement.innerHTML=`Score : Win ${score.win} , Lose ${score.Lose} , Tie ${score.Tie} `
    resultElement.innerHTML=result;
  
}

function resetScore(){
    const resultElement=document.querySelector('.result');
    const scoreElement=document.querySelector('.score');
    localStorage.removeItem('score');
    resultElement.innerHTML='';
    scoreElement.innerHTML=`Score : Win 0 , Lose 0 , Tie 0 `
}

// function typing(event){
//     const typed=document.querySelector('.inputMessage');
//     if(event.key==='Enter') typed.innerHTML='';
//     typed.innerHTML+=event.key;
// }