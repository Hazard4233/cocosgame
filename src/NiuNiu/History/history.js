function gotoNiuNiuIndex() {
    window.location.href = "/src/niuniu/index.html"
}

function showKaijiangHistory() {
    document.querySelector(".history-page .touzhu-history-nav").classList.remove("history-nav-active")
    document.querySelector(".history-page .touzhu-history-nav").classList.add("history-nav-not-active")
    document.querySelector(".history-page .kaijiang-history-nav").classList.remove("history-nav-not-active")
    document.querySelector(".history-page .kaijiang-history-nav").classList.add("history-nav-active")
    document.querySelector(".history-page .kaijiang-history").style.display = "block"
    document.querySelector(".history-page .touzhu-history").style.display = "none"
    
}

function showTouzhuHistory() {
    document.querySelector(".history-page .kaijiang-history-nav").classList.remove("history-nav-active")
    document.querySelector(".history-page .kaijiang-history-nav").classList.add("history-nav-not-active")
    document.querySelector(".history-page .touzhu-history-nav").classList.remove("history-nav-not-active")
    document.querySelector(".history-page .touzhu-history-nav").classList.add("history-nav-active")
    document.querySelector(".history-page .kaijiang-history").style.display = "none"
    document.querySelector(".history-page .touzhu-history").style.display = "block"
}