window.onload = function () {
    init();
}
function init() {
    let name =["women 1m springboard+preliminaries","men 1m springboard+preliminaries",
        "women 1m springboard+finals","men 1m springboard+finals","men 3m synchronised2+finals",
        "women 10m platform+preliminaries","men 3m springboard+preliminaries","women 10m platform+semifinals",
        "men 3m springboard+semifinals","women 10m platform+finals","Men 3m springboard+finals",
        "women 3m springboard+preliminaries","women 3m springboard+semifinals","women 3m springboard+finals",
        "women 10m synchronised+finals","men 10m synchronised+finals","men 10m platform+preliminaries",
        "men 10m platform+semifinals","women 3m synchronised+finals","men 10m platform+finals"
    ]
    for (let i = 0;i < name.length;i++){
        document.getElementById(name[i]).onclick = ()=>{
            location.href = `../matchDetail/matchDetail.html?${name[i]}`;
    }

    }
}