function showSuggestions(value){
    if(value.length === 0){
        console.log("empty")
        document.getElementById("suggestions").innerHTML = "";
        return;
    }

    fetchSuggestions(value).then(suggestions => {
        let suggestionBox = document.getElementById("suggestions");
        suggestionBox.innerHTML = "";

        suggestions.forEach(suggestion => {
            let div = document.createElement("div");
            div.innerHTML = suggestion;
            div.style.backgroundColor = 'white';
            div.style.color = 'black';
            div.onclick = function(){
                document.getElementById("location").value = suggestion;
                suggestionBox.innerHTML = "";
            };
            suggestionBox.appendChild(div);
        });
    });

}

function fetchSuggestions(query){
    return new Promise((resolve, reject) => {
        const dummySuggestions = [
            "Nowheresville, XX 00000",
            "Morris, IL 60450"
        ]

        let filteredValue = dummySuggestions.filter(suggestion => suggestion.includes(query));

        resolve(filteredValue);
    });
}