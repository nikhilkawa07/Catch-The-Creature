var t1 = gsap.timeline({repeat:-1,yoyo:true})


t1.to("#box1", {
    x:1000,
    backgroundColor:"salmon",
    duration:1,
    delay:0.5
    
})

t1.to("#box2", {
    x:1000,
    backgroundColor:"red",
    duration:1,
    
    
})

t1.to("#box3", {
    x:1000,
    backgroundColor:"blue",
    duration:1,
    
    
})