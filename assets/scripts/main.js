function $(a) {return document.querySelector(a);}

var input = $(".console"),
    display = $(".display");
    
    display.onclick = function() {
        input.focus();
    };
    
display.innerText = "Welcome to JavaScript Web-Terminal App\nAuthor: Raj Ghosh\nVersion: beta v0.0.1a\n\n";

input.onkeyup = function(e) {
    var value = input.value;

    

    if(e.keyCode===13){

        display.innerText += ">> " + value + "\n";
        input.value = "";
        
        if(value.match(/\.clear/g)) {
            display.innerText = "Welcome to JavaScript Web-Terminal App\nAuthor: Raj Ghosh\nVersion: beta v0.0.1a\n\n>> " + "\n";

        } else if(value.match(/\.help/g)) {

            display.innerText += "\tThese are the all available commands you can use.\n\n.help - Print all available commands.\n.clear - Clear Terminal.\n.alert <value> - To show alert message\n.google <value> - To search google from the terminal\n.cal <value> - To calculate a given value\n.url <value.com> - To open a url in new window"+"\n\n";

        } else if(value.match(/\.alert /g)) {

            var message = value.replace(/\.alert /g, "");
            alert(message);

        } else if(value.match(/\.cal /g)) {
            var calCulate = value.replace(/\.cal /g, "");
            display.innerText += eval(calCulate)+"\n";

        } else if(value.match(/\.google /g)) {
            
            var search = value.replace(/\.google /g, "https://www.google.com/search?q=");
            window.open(search, "_blank");

        } else if(value.match(/\.url /g)){
            var url = value.replace(/\.url /g, "https://");
            window.open(url, "_blank");
        } else {
            
            if(value === ""){
                display.innerText += "";
            }else {
                display.innerText += "{" + value + "} is not recognised by our system, type .help to print all available commands\n";
            }
            
        }
    }
};