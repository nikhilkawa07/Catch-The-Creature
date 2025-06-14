function cursorAnimation() {

    var crsr = document.querySelector("#cursor")

    document.addEventListener("mousemove", function (dets) {
        gsap.to(crsr, {
            x: dets.x,
            y: dets.y
        })

    })
}

cursorAnimation() 