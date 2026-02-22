const inp = document.getElementById("inp");
const btn = document.getElementById("btn");
const res = document.getElementById("res");

let age;

btn.onclick = function() {

    age = inp.value;
    age = Number(age);

    if (age < 0 || inp.value == "") {
        res.textContent = "Invalid input. Please enter a valid age.";
    } else if (age <= 4) {
        res.textContent = "You are a toddler.";
    } else if (age > 4 && age < 13) {
        res.textContent = "You are a child.";
    } else if (age >= 13 && age < 18) {
        res.textContent = "You are a teenager.";
    } else if (age == 21) {
        res.textContent = "You are exactly 21. Big Milestone!";
    } else if (age >= 18 && age < 65) {
        res.textContent = "You are an adult.";
    } else if (age >= 65) {
        res.textContent = "You are a senior.";
    } else {
        res.textContent = "Invalid input.";
    }
};
