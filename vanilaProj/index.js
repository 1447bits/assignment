const main = document.getElementById("main")

var disp_data = "";
var fetched_data;

// play loading until fetch
main.innerHTML = "Loading...";

fetch("https://reqres.in/api/users?page=1")

    .then(response => response.json())
    .then(data => {
        
        fetched_data = data;
        
        disp_data = JSON.stringify(data);

        // load the main App
        loadApp()
    })
    .catch(error => {
        // Handle any errors that occur during the fetch
        console.error('Error:', error);

    });

function loadApp() {
    main.innerHTML = disp_data;
}

