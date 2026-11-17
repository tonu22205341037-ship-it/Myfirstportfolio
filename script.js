
// Profile Picture Upload
const imageUpload = document.getElementById("imageUpload");
const profileImage = document.getElementById("profileImage");

imageUpload.addEventListener("change", function(event) {

    const file = event.target.files[0];

    if (file) {

        if (!file.type.startsWith("image/")) {
            alert("Please select a valid image!");
            return;
        }

        const reader = new FileReader();

        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
});

// Navigation Active Link
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {
    link.addEventListener("click", function() {

        navLinks.forEach(item => {
            item.style.color = "white";
        });

        this.style.color = "#f5a623";
    });
});

console.log("Silvia Sarwar Tanu Portfolio Loaded Successfully!");
