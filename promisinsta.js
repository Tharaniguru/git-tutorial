async function commentcode(){
    return new Promise((commentposted)=>{
        commentposted("a new comment is posted")
    })
}


async function likecode(){
    return new Promise((like)=>{
        like("like the post")
    })
}


async function createpost (){  // anyone in the insta can create the post
    var post=new Promise((cpost)=>{
        cpost("post created successfully")
    })
    


    var [posts,comment,like] = await Promise.all([post,commentcode(),likecode()])
    console.log(posts,comment,like)
}
createpost()