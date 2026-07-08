const myBtn = document.getElementById("myBtn");

resumeBtn.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "web developer resume.pdf";
    link.download = "Annamikya_Nigam_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
