// How to request a Server...

// 1.. create a request....
var request = new XMLHttpRequest();

//  2... Open a Connection...
request.open('GET', 'https://jsonplaceholder.typicode.com/posts');

// 3..Send a connection....
request.send();


// 4..Data after Response..
request.onload = function(){

    var data = JSON.parse(this.response)
    console.log(data);

    for(var i=0; i<data.lenght; i++){
        console.log(data[i]);
    }
}