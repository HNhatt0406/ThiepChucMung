// Tạo hiệu ứng hoa rơi
const createFlower = () => {
    const flower = document.createElement("div");
    flower.className = "flower";
    flower.style.left = Math.random() * 100 + "vw"; // Vị trí ngang ngẫu nhiên
    flower.style.animationDuration = Math.random() * 3 + 5 + "s"; // Thời gian rơi ngẫu nhiên
    document.getElementById("effect").appendChild(flower);

    // Xóa hoa sau khi rơi xong
    setTimeout(() => flower.remove(), 8000);
};

// Lặp lại hiệu ứng
setInterval(createFlower, 300);
