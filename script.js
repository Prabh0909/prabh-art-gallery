function openImage(image) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("largeImage").src = image;
}

function closeImage() {
    document.getElementById("lightbox").style.display = "none";
}
const artworks = [
    {
        title: "Landscape",
        image: "images/56Landscape51__57044.jpg",
        price: "₹8,000"
    },
    {
        title: "Landscape II",
        image: "images/56Landscape53__75642 (1).jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled I",
        image: "images/20250708_130513.jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled II",
        image: "images/20250717_111635.jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled III",
        image: "images/20250717_165032.jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled IV",
        image: "images/20250728_173655 (1).jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled V",
        image: "images/20250825_173344.jpg",
        price: "₹8,000"
    },
    {
        title: "Untitled VI",
        image: "images/20250911_153158.jpg",
        price: "₹8,000"
    }
];

function openDetails(number) {

    const artwork = artworks[number - 1];

    document.getElementById("details-image").src = artwork.image;
    document.getElementById("details-title").textContent = artwork.title;
    document.getElementById("details-price").textContent = artwork.price;

    document.getElementById("details-popup").style.display = "flex";
}

function closeDetails() {
    document.getElementById("details-popup").style.display = "none";
}