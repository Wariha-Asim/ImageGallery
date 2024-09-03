const galleryImages = document.querySelectorAll("img");
const overlay = document.createElement("div");
const fullImg = document.createElement("img");
const closeBtn = document.createElement("span");

overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
overlay.style.display = "none";
overlay.style.justifyContent = "center";
overlay.style.alignItems = "center";
overlay.style.zIndex = "1000";
overlay.style.backdropFilter = 'blur(10px)';
overlay.style.transition = "opacity 0.3s ease";

fullImg.style.maxWidth = "90%";
fullImg.style.maxHeight = "90%";
fullImg.style.borderRadius = "10px";

closeBtn.textContent = "X";
closeBtn.style.position = "absolute";
closeBtn.style.top = "20px";
closeBtn.style.right = "20px";
closeBtn.style.fontSize = "30px";
closeBtn.style.color = "white";
closeBtn.style.cursor = "pointer";

overlay.appendChild(fullImg);
overlay.appendChild(closeBtn);
document.body.appendChild(overlay);

galleryImages.forEach(img => {
    img.onclick = function() {
        fullImg.src = img.src;
        overlay.style.display = "flex";
        overlay.style.opacity = "1";
    };
});

overlay.onclick = function() {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
};

closeBtn.onclick = function() {
    overlay.style.opacity = "0";
    setTimeout(() => {
        overlay.style.display = "none";
    }, 300);
};
