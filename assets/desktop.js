let time = document.querySelector(".time")
time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))

let timeSetter = setInterval(() => {
    time.innerHTML = new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true }).format(new Date())
    time.setAttribute("title", new Intl.DateTimeFormat('en-IN', { hour: 'numeric', minute: 'numeric', hour12: true, year: 'numeric', month: 'long', day: 'numeric' }).format(new Date()))
}, 60000);

document.querySelector(".desktop").onclick = function () {
    document.querySelectorAll(".icon").forEach((e) => {
        e.classList.remove("selected")
    })
}

document.querySelectorAll(".icon").forEach((icon) => {
    icon.onclick = function () {
        setTimeout(() => {
            document.querySelectorAll(".icon").forEach((e) => {
                e.classList.remove("selected")
            })
            this.classList.add("selected")
        }, 1);
    }
})

document.querySelector(".max").onclick = function () {
    document.querySelector(".window").classList.toggle("maximized")
}

document.querySelector(".min").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".readme").onclick = function () {
    document.querySelector(".readme").classList.toggle("active")
    document.querySelector(".window").classList.toggle("minimized")
}

document.querySelector(".cls").onclick = function () {
    document.querySelector(".readme").style.display = "none"
    document.querySelector(".window").style.display = "none"
}

document.querySelector(".docs").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("")
}

document.querySelector(".my-computer").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("")
}

document.querySelector(".my-network").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    window.open("")
}

document.querySelector(".note-pad").ondblclick = function () {
    setTimeout( ()=> { this.classList.remove("selected") }, 2 )
    document.querySelector(".readme").style.display = "initial"
    document.querySelector(".window").style.display = "initial"
    document.querySelector(".readme").classList.add("active")
    document.querySelector(".window").classList.remove("minimized")
}

document.querySelector("textarea").value = `Bilal Hameed

Contact Information:
- Email: bilalggood@gmail.com
- Phone: +923165502120
- LinkedIn: linkedin.com/in/bilalsec
- GitHub: https://github.com/LinuxSploit

Summary:
I am a cybersecurity enthusiast and a certified Google Cybersecurity Professional, with a strong background in Golang and Linux. I enjoy solving complex problems and learning new technologies and tools. I have a BS in Computer Science from Virtual University of Pakistan, where I gained solid foundations in programming, data structures, algorithms, and networks. As a freelancer on Fiverr, I develop web applications using Express.js and Apollo GraphQL, delivering high-quality and secure solutions for clients across various industries and domains. I have completed multiple projects, ranging from e-commerce platforms to chatbots, with positive feedback and ratings.

Experience:

- Freelance Software Engineer
  Fiverr
  Jun 2022 - Present (1 year 11 months)
  Freelancer on Fiverr with a strong background in web application development and back-end development.

Education:

- Virtual University of Pakistan
  Bachelor of Science, Computer Science
  2019 - 2023

Licenses & Certifications:

- Programming with Google Go Specialization - University of California, Irvine
  Certification Link: https://www.coursera.org/account/accomplishments/specialization/YP4ZKKM9YCV9
  
- Google Cybersecurity Certificate - Google
  Certification Link: https://www.coursera.org/account/accomplishments/specialization/6Q74DL4DEBWE

- gRPC in Go - LinkedIn

Skills:

- Apollo GraphQL
- Express.js
- JavaScript
- SQL
- Intrusion Detection
- Security Information and Event Management (SIEM)
- Python (Programming Language)
- Linux
- Information Security
- Go (Programming Language)
`


dragWindow(document.querySelector(".window"));
function dragWindow(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;

    document.querySelector(".title-bar").onmousedown = dragging

    function dragging(e) {
        e = e || window.event;
        e.preventDefault();

        pos3 = e.clientX;
        pos4 = e.clientY;

        document.onmouseup = stopDragging;
        document.onmousemove = draggedWindow;
    }

    function draggedWindow(e) {
        e = e || window.event;
        e.preventDefault();

        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;

        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function stopDragging() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}