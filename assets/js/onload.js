window.onload = () => {
    randomSplash();

    document.getElementById("meme-1").addEventListener("mouseover", function(){
        this.innerHTML='cook meth';
    }, false);
    document.getElementById("meme-1").addEventListener("mouseout", function(){
        this.innerHTML='cook';
    },false);
}