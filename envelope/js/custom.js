let template = Handlebars.compile(document.getElementById('__next').innerHTML);

// Function to get query parameters
function getQueryParams() {
  var params = {};
  try {
    var url = new URL(window.location.href);
    var search = url.search;
    search.substr(1).split('&').forEach(function(pair) {
    var keyValues = pair.split('=');
    params[keyValues[0]] = decodeURIComponent(keyValues[1]);
    });
  } catch (e) {
      console.log(e);
  }
  return params;
}

let data = getQueryParams();
let content = template(data);
document.getElementById('__next').innerHTML = content;