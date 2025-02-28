
//we add axios package this work is like the fetch but some key defference so in fetch we manually convert the data into JSON format but in case of axios the data is automatic convert in json format
//second one deff is axios supports request cancellation using CancelToken.

import DesiredGif from "./components/DesiredGif";
import RandomGif from "./components/RandomGif";

// fetch does not have built-in cancellation; you must use AbortController.
export default function App() {
  return <div className="background">
    <div className="gifheading">Random Gif</div> 
    <div className="gifContainer">
    <RandomGif />
    <DesiredGif />
    </div>
  </div>
}
