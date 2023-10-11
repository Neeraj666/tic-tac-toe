import './ResetButton.css';

const ResetButton=({resetBoard})=>{

    return(
            <button className='reset_btn' onClick={resetBoard}> Reset</button>
    );
}
export default ResetButton;