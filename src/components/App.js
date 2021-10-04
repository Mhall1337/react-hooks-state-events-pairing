import React, {useState} from "react";
import video from "../data/video.js";
import Comments from "./Comments.js";
import TitleAndLikes from "./TitleAndLikes.js";

function App() {
  let [addRemoveComments, setAddRemoveComments] = useState(true)

  function handleComments(){
    setAddRemoveComments(addRemoveComments = !addRemoveComments)
  }

  return (
    <React.Fragment>
      <div className="App">
        <iframe
          width="919"
          height="525"
          src={video.embedUrl}
          frameBorder="0"
          allowFullScreen
          title="Thinking in React"
        />
      </div>
      <TitleAndLikes handleComments={handleComments} video={video}/>
      { addRemoveComments ? <Comments video={video}/> : ""}
    </React.Fragment>
  );
}

export default App;
