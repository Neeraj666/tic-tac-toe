import Box from "./Box";
import './Board.css';

const Board=({board, onClick})=>{

    return(
        <div className="board">
            {
                board.map((value,i)=>{ return(
                    <Box key={i} value={value} onClick={()=>value ==null &&onClick(i)} />  
                )})
            }
        </div>
    );
}
export default Board;

//Note : 
//Line no 8: onClick me box ka index ja raha hai. 
//Line no 10 : onClick me jb value == null hogi tabhi value ka index jaye ga nahi to nahi jaye ga.