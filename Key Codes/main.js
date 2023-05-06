const keyInf = document.querySelector(".key-informations")

window.addEventListener("keydown", eventAction)

function eventAction(e){
    keyInf.innerHTML=
        `
        <div class="key event-key">
            ${e.key}
            <small>event.key</small>
        </div>
        <div class="key event-keycode">
            ${e.keyCode}
            <small>event.keycode</small>
        </div>
        <div class="key event-code">
            ${e.code}
            <small>event.code</small>
        </div>
        `
}