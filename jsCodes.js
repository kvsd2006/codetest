window.onload = function() {
    var url = "https://kvsd2006.github.io/codetest/sales.json";//先测试本地文件
    var request = new XMLHttpRequest();
    request.open("GET", url);
    request.onload = function() {
        if (request.status == 200) {
            updateSales(request.responseText);
        }
    };
    alert("send start!");
    request.send(null);
    alert("send end!");
    alert(request.responseText);
}
function updateSales(responseText) {
    var salesDiv = document.getElementById("sales");
    salesDiv.innerHTML = "writing data";
    salesDiv.innerHTML = responseText;
    alert(responseText);
    salesDiv.innerHTML = responseText;
}
