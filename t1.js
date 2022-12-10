function init(){

    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });

    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        },

        getBoundingClientRect() {
            return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
          },

          pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
        });

        ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

        ScrollTrigger.refresh();
}

init();

var txt = document.querySelectorAll(".content");
txt.forEach(photu => {
    photu.addEventListener("mousemove", function(dets){
        // console.log(dets)
        this.children[0].style.opacity = .9;
    })
    photu.addEventListener("mouseout", function(dets){
        this.children[0].style.opacity = 0;
    })
})

var mode = document.querySelector("#mode");
var circle = document.querySelector("#circle")
var state = 0;
mode.addEventListener("click", function(){
    if(state === 0){
        document.body.style.backgroundColor = "black";
        document.body.style.color = "#fdefe7";
        document.querySelector("button").style.color = "#fdefe7";
        document.querySelector("button").style.border = "1px solid #fdefe7";
        document.querySelector("#mode").style.border = "1px solid orangered";
        document.querySelector("#circle").style.backgroundColor = "orangered";
        document.querySelector("#circle").style.marginLeft = "65%";
        document.querySelector("#btm").style.borderBottom = "1px solid #fdefe7";
        state = 1;
    }
    else{
        document.body.style.backgroundColor = "#fdefe7";
        document.body.style.color = "rgb(2, 44, 2)";
        document.querySelector("button").style.color = "#fdefe7";
        document.querySelector("button").style.border = "1px solid rgb(2, 44, 2)";
        document.querySelector("#mode").style.border = "1px solid rgb(2, 44, 2)";
        document.querySelector("#circle").style.backgroundColor = "rgb(2, 44, 2)";
        document.querySelector("#circle").style.marginLeft = "3px";
        document.querySelector("#btm").style.borderBottom = "1px solid rgb(2, 44, 2)";
        state = 0;
    }
})