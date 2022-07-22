//read data from clicks on stars
document.addEventListener("DOMContentLoaded", function (e) {
    let output = document.querySelector('output');
    for (let pr of document.querySelectorAll('product-rating')) {
        for (let star of pr.querySelectorAll('input')) {
            star.addEventListener('click', function () {
                console.log(this.value, pr.dataset.id);
                output.innerText = `You set rating ${this.value} to Product #${pr.dataset.id}`;
            });
        }
    }
});

