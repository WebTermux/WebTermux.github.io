function $(a) {return document.querySelector(a);}

var input = $(".console"),
    display = $(".display");
    
    display.onclick = function() {
        input.focus();
    };
    
display.innerText = "Welcome to WebTermux App\nAuthor: Raj Ghosh\nVersion: beta v0.0.11\n\n";

input.onkeydown = function(e) {
    var value = input.value;

    

    if(e.keyCode===13){
        display.innerText += ">> " + value + "\n";
        input.value = "";
        display.scrollBy(0, 9999999);
        if(value.match(/\.clear/g)) { //Clear Function
            display.innerText = "Welcome to WebTermux App\nAuthor: Raj Ghosh\nVersion: beta v0.0.11\n\n>> " + "\n";

        } else if(value.match(/\.help/g)) { //Help Function

            display.innerText += "\tThese are the all available commands you can use.\n\n.help - Print all available commands.\n.clear - Clear Terminal.\n.alert <text> - To show alert message\n.google <search keyword> - To search google from the terminal\n.cal <value> - To calculate a given value\n.url <example.com> - To open a url in new window\n.yt <serch keyword> - To search videos on youtube"+"\n\n";

        } else if(value.match(/\.alert /g)) { //Alert Function

            var message = value.replace(/\.alert /g, "");
            alert(message);

        } else if(value.match(/\.cal /g)) { //Cal Function
            var calCulate = value.replace(/\.cal /g, "");
            display.innerText += eval(calCulate)+"\n";

        } else if(value.match(/\.google /g)) { //Google Function
            
            var search = value.replace(/\.google /g, "https://www.google.com/search?q=");
            window.open(search, "_blank");

        } else if(value.match(/\.url /g)){ //Url Function
            var url = value.replace(/\.url /g, "https://");
            window.open(url, "_blank");
        } else if(value.match(/\.yt /g)){
            var ytSearch = `https://www.youtube.com/results?search_query=${value.replace(/\.yt /g, "")}`;
            window.open(ytSearch, "_blank");
        } else {
            
            if(value === ""){
                display.innerText += "";
            }else {
                display.innerText += "{" + value + "} is not recognised by our system, type .help to print all available commands\n";
            }
            
        }
    }
};