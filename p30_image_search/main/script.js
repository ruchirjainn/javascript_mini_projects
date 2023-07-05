const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreButton = document.getElementById("show-more-btn");

const accessKey = "0QV2id0u-l7Ye5GifSTWZby5hjH9V8McqP1U1JmeSic";
let keyword = ""
let page = 1;

async function searchImage() {
    keyword = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

    // const results=data.results[0].urls.full;
    // console.log(results);

    if (page == 1) {
        searchResult.innerHTML = "";
    }

    const results = data.results;

    results.map((result, index) => {
        const image = document.createElement("img");
        image.src = results[index].urls.small;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;

        imageLink.target = "_blank";

        imageLink.appendChild(image);

        searchResult.appendChild(imageLink);
    });

    showMoreButton.style.display = "block";
}

searchForm.addEventListener("submit", function (event) {
    event.preventDefault();
    page = 1;
    searchImage();
});

showMoreButton.addEventListener("click", function () {
    page++;
    searchImage();
});