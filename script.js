const hamburger = document.querySelector('.hamburger');
const navLink = document.querySelector('.nav__link');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('hide');
});

function pictureChange() {
    document.getElementById("1l").src = "./assets/grid/1l.png";
    document.getElementById("2l").src = "./assets/grid/2l.png";
    document.getElementById("3l").src = "./assets/grid/3l.png";
    document.getElementById("4l").src = "./assets/grid/4l.png";
    document.getElementById("5l").src = "./assets/grid/5l.png";
    document.getElementById("s1l").src = "./assets/grid/s1l.png";
    document.getElementById("s2l").src = "./assets/grid/s2l.png";
    document.getElementById("sk1l").src = "./assets/grid/sk1l.png";
    document.getElementById("webl").src = "./assets/grid/webl.png";
    document.getElementById("s0l").src = "./assets/grid/s00.png";
    document.getElementById("sk1").src = "./assets/grid/skill2/light/illus2l.jpg";
    document.getElementById("sk2").src = "./assets/grid/skill2/light/pythonl.jpg";
    document.getElementById("sk3").src = "./assets/grid/skill2/light/androidl.jpg";
    document.getElementById("sk4").src = "./assets/grid/skill2/light/react-jsl.jpg";
    document.getElementById("sk5").src = "./assets/grid/skill2/light/flutter2l.jpg";
    document.getElementById("sk6").src = "./assets/grid/skill2/light/dsl.jpg";
    document.getElementById("back1l").src = "./assets/grid/back1l.png";
}