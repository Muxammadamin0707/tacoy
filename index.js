let body = document.querySelector("body");

let data = [34, 67, 49, 20, 23, 56, 90, 1000, 78, 54, 50];

data.map((element) => {
    let p = document.createElement("p");
    if (element > 50) {
        p.style = "background-color: green; color: white; text-align: center; font-size: 26px; padding: 5px 0; font-family: Arial, Helvetica, sans-serif; font-weight: 650;";
    } else {
        p.style = "background-color: red; color: white; text-align: center; font-size: 26px; padding: 5px 0;font-family: Arial, Helvetica, sans-serif; font-weight: 650;";
    }
    
    p.textContent = element;

    body.appendChild(p);
})