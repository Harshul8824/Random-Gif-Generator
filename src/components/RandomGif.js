
export default function RandomGif(){
    let Gif = "";
    function clickHandler(){

    }
    return(
        <div className="randomgif random">
            <div>Random Gif</div>
            <img src={Gif} alt="random image"></img>
            <button onClick={clickHandler}>Generate</button>
        </div>
    )
}