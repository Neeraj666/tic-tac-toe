import React,{useState} from 'react';
import './App.css';
import Heading from './Components/Heading';
import Board from './Components/Board';
import ScoreBoard from './Components/ScoreBoard';
import ResetButton from './Components/ResetButton';

const App=()=>{
    const[board,setBoard]=useState(Array(9).fill(null));
    const[xPlaying, setXPlaying]=useState(true);     //x player
    const[scores, setScores]=useState({xScore:0, oScore:0});   //score status
    const[gameOver, setGameOver]=useState(false);

    const WIN_CONDITIONS =[                
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
    ]

    const handleBoxClick = (boxIdx) =>{
        const updateBoard = board.map((value,i)=>{
            if(i === boxIdx){
                return xPlaying=== true ? 'X' : '0';
            }
            else{
                return value;
            }
        })

        const winner = checkWinner(updateBoard);

        if(winner){
            if(winner === '0'){
                let {oScore} = scores;
                oScore += 1
                setScores({...scores, oScore})
            }
            else{
                let {xScore} = scores;
                xScore += 1
                setScores({...scores, xScore})
            }
        }

        // console.log(scores);

        setBoard(updateBoard);
        setXPlaying(!xPlaying);   //true ,then false ===xPlaying
    }

    const checkWinner=(board)=>{
        for(let i=0; i<WIN_CONDITIONS.length; i++){
            const [x,y,z] = WIN_CONDITIONS[i];

            if(board[x] && board[x] === board[y] && board[y] === board[z]){
                setGameOver(true);
                return board[x];
            }
        }
    }

    const resetBoard=()=>{    //Reset the value of game
        setGameOver(false);
        setBoard(Array(9).fill(null))
    }

    return(
        <div className='App'>
            <Heading />
            <ScoreBoard scores={scores} xPlaying={xPlaying}/>
            <Board  board={board} onClick={gameOver ? resetBoard :  handleBoxClick} />
            <ResetButton resetBoard={resetBoard}/>

        </div>
    );
}
export default App;


//Note :
// Line no 6 : Array(9).fill(null) means phile har array me null hoga.
// hanldeBoxClick ki id and boxIdx ki id same hogi to return 'X' hoga
