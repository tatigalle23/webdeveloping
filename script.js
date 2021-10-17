var counter = 0;

document.addEventListener("DOMContentLoaded", function() {
    // 여기 있는 내용 실행

    const sb = document.querySelector(".first");
    sb.addEventListener("click", function() {
        counter += 1;
        if (counter >= 5) {
            alert("count is more than 5!");
        }
    })
});