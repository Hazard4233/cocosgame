function gotoNiuNiuIndex() {
    window.location.href = "/src/niuniu/index.html"
}

function showHowPlay() {
    document.querySelector(".help-page .help-page-main .how-play-nav").classList.add("c-f7b844")
    document.querySelector(".help-page .help-page-main .how-play-nav").classList.remove("c-fff")
    document.querySelector(".help-page .help-page-main .tradition-play-nav").classList.add("c-fff")
    document.querySelector(".help-page .help-page-main .tradition-play-nav").classList.remove("c-f7b844")
    document.querySelector(".help-page .help-page-main .how-play").style.display = "block"
    document.querySelector(".help-page .help-page-main .tradition-play").style.display = "none"

}

function showTraditionPlay() {
    document.querySelector(".help-page .help-page-main .how-play-nav").classList.remove("c-f7b844")
    document.querySelector(".help-page .help-page-main .how-play-nav").classList.add("c-fff")
    document.querySelector(".help-page .help-page-main .tradition-play-nav").classList.remove("c-fff")
    document.querySelector(".help-page .help-page-main .tradition-play-nav").classList.add("c-f7b844")
    document.querySelector(".help-page .help-page-main .how-play").style.display = "none"
    document.querySelector(".help-page .help-page-main .tradition-play").style.display = "block"
}