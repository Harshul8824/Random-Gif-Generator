
export default function DesiredGif(){
    let desGif = "";
    function clickHandler(){

    }
    return(
        <div className="randomgif desired" >
            <div>Desired Gif</div>
            <img src={desGif} alt="desired image"></img>
            <button onClick={clickHandler}>Generate</button>
        </div>
    )
}