const postsData = [
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 56
    },
    {
        username: "Akarsh",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 125
    },
    {
        username: "Sarthak",
        dp: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 789
    },
    {
        username: "vedant",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 23
    },
    {
        username: "HARSHITA",
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        likes: 58
    },
    // Add more posts as needed
];


// write your code here to create card
var clutter = 0;



var postsContainer = document.querySelector("#postsContainer");



postsData.forEach((elem,idx)=>{
    clutter += ` <div class="post-container"><img
    src=${elem.dp}
    alt="Display Picture">
    <h3>${elem.username}</h3><span class="like-icon">❤</span><button>Like</button>
    <p id="like-count-0" class="like-count"><span>${elem.likes}</span> Likes</p>
</div>`
}

)
postsContainer.innerHTML =clutter;



var mainclass = document.querySelectorAll(".post-container"); 
var totallikes = document.querySelectorAll(".like-count span"); 

console.log(totallikes);
var count=[];



mainclass.forEach((dets,idx)=>{
    // console.log(dets.childNodes[4]);
    // console.log(postsData[idx].likes);

        dets.childNodes[4].addEventListener("click",function(){
            // dets.childNodes[4].innerHTML = "Dislike";
             count[idx] =postsData[idx].likes+1;
            dets.childNodes[6].innerHTML = `${count[idx]} likes`;


        })}

       )