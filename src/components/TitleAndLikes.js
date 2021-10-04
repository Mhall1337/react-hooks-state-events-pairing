import React, {useState} from "react";
function TitleAndLikes({video, handleComments}){
    const [upvotes, setUpvotes] = useState(video.upvotes)
    const [downVotes, setDownVotes] = useState(video.downvotes)

    function handleUpVotes(){
        setUpvotes(upvotes + 1)
    }
    function handDownVotes(){
        setDownVotes(downVotes + 1)
    }

    return(
        <div style={{textAlign:"center"}}>
            <h1>{video.title}</h1>
            <p>{video.views} Views | Uploaded {video.createdAt}</p>
            <button onClick={handleUpVotes}>{upvotes} 👍</button>
            <button onClick={handDownVotes}>{downVotes}👎</button>
            <br></br>
            <button onClick={handleComments}>Hide Comments</button>
            <hr></hr>
        </div>
    )
}
export default TitleAndLikes