window.onload = function() {
    var xhr = new XMLHttpRequest()
    console.log(xhr)
    var url = "https://api.covid19api.com/summary"
    xhr.open("Get", url)
    xhr.send()
    xhr.onload = function() {

        // console.log(this.response)
        var response = JSON.parse(this.response)
        console.log(response)
        handleRespone(response)
    }
}



function handleRespone(response) {
    renderDom(response.Countries)
}

function renderDom(arr) {
    var result = document.getElementById('result')
    var div = document.createElement('div')
    var ul = document.createElement('ul')


    for (var i = 0; i < arr.length; i++) {
        var li = document.createElement('li')
        li.innerHTML = "Country:" + " " + arr[i].Country + "<br/>" + "New Confirmed:" + " " + arr[i].NewConfirmed + "<br/> " + " Total Confirmed:" + " " + arr[i].TotalConfirmed + " <br/>" + " Total Deaths:" + " " + arr[i].TotalDeaths
        ul.style.border = "2px solid #0000F";
        li.style.border = "2px solid #808080";
        li.style.padding = "20px";
        li.style.margin = "20px";
        ul.append(li)


        // if (arr[i].Country === India) {
        //     console.log(arr.NewConfirmed)
        // }

    }
    div.append(ul)
    result.append(div)
}