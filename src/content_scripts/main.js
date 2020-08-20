document.querySelector("body") .style["background-color"] = "yellow";
{
    "version",
    "content_scripts": [{
    "matches": ["*://*/*"],
    "js": [ "content_scripts/main.js" ]
    }]
    }