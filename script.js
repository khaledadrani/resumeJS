window.onload = function(){
    
    let left_resume = document.createElement('div');
    left_resume.classList.add('left_resume');

    // let left_resume_css = "width: 300px;background: #0bb5f4;color: #b1eaff;"

    // left_resume.setAttribute("style", left_resume_css);

    let left_resume_css = {
        "width": "300px",
        "background":"#0bb5f4",
        "color":"#b1eaff"
    }

    for (var key in left_resume_css) {
        if (left_resume_css.hasOwnProperty(key) && left_resume.style.hasOwnProperty(key)) {
            console.log(key);
            left_resume.style[key] = left_resume_css[key];
        }
    }

    let resume = document.querySelector('.resume');
    resume.appendChild(left_resume);



}



