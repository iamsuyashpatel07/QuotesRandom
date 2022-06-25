var XHR = new XMLHttpRequest();
XHR.onreadystatechange = function() {
    if (XHR.readyState == 4) {
        if (XHR.status == 200) {
            var data = JSON.parse(XHR.responseText);
            const quoteText = data.content;
            const quoteElement = document.getElementById('quote');

            quoteElement.innerHTML = quoteText;
        } else {
            const quoteElement = document.getElementById('quote');

            quoteElement.innerHTML = "Your Internet Connection is Down!!!";
        }
    }
}
var url = "https://api.quotable.io/random";
XHR.open("GET", url);
XHR.send();