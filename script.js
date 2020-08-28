function reservation(data) {
    let name = document.getElementById("name").value;
    //console.log(nama)
    let date = document.getElementById("date").value;
    document.getElementById("finish").innerHTML = `<h3>Thank you</h3>
    <p>name : ${name}</p>
    <p>Date of Arrival ${date}</p>
    <p>We can't wait to see you !</p>`
    document.getElementById("finish").style.display = "block"
    document.getElementById("form").style.display = "none"
    document.getElementById("button").style.display = "none"
}





