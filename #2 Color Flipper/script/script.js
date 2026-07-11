const btn = document.getElementById("btn-switch")
let colorName = document.getElementById("color-name")

let color = [
    "#FF0000", 
    "#0000FF", 
    "#008000", 
    "#FFFF00", 
    "#FFA500",
    "#800080",
    "#FFC0CB",
    "#A52A2A",
    "#000000",
    "#FFFFFF",
    "#808080",
    "#00FFFF",
    "#FF00FF",
    "#00FF00",
    "#000080",
    "#008080",
    "#FFD700",
    "#C0C0C0",
    "#FF7F50",
    "#EE82EE",
    "#800000",
    "#808000",
    "#4B0082",
    "#40E0D0",
    "#F5F5DC",
    "#FA8072",
    "#D2691E",
    "#7FFFD4",
    "#DC143C",
    "#F0E68C",
    "#DDA0DD",
    "#87CEEB",
    "#E6E6FA",
    "#DA70D6",
    "#7FFF00",
    "#D2B48C",
    "#BC8F8F",
    "#FFE4B5",
    "#2E8B57",
    "#4682B4",
    "#FFDAB9",
    "#00BFFF",
    "#A0522D",
    "#006400",
    "#B22222",
    "#708090",
    "#D8BFD8",
    "#228B22",
    "#F5DEB3",
    "#FF6347"
];

btn.addEventListener("click", () => {
    colorName = color;
});

function setBg() {
    document.body.color = Math.floor(Math.random(), colorName)
}
