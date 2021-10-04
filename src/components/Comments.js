import React from "react";
function Comments({video}){
    return(
        <div style={{textAlign:"center"}}>
            <h2>{video.comments.length} Comments</h2>
            {video.comments.map((comment, index)=>
            <div key={index}>
            <h3>{comment.user}</h3>
            <p>{comment.comment}</p>
            </div>)}
        </div>
    )
}

export default Comments