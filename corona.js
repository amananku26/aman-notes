window.onload = function() {
    var xhr = new XMLHttpRequest()
    console.log(xhr)
    var url = "https://api.covid19api.com/summary"
    xhr.open("Get", url)
    xhr.send()
    xhr.onload = function() {

        var response = JSON.parse(this.response)
        console.log(response)
        handleRespone(response)
    }
}


function handleRespone(response) {
    renderDom(response.Countries)
    console.log(response.Countries[0].Country)

    var pp = document.getElementById('vbtn')
    pp.addEventListener('click', function() {
        var name = document.getElementById('country1').value
        console.log(name)
        var show1 = document.getElementById('cname')
        var nc = document.getElementById('nc')
        var nd = document.getElementById('nd')
        var nr = document.getElementById('nr')
        var tc = document.getElementById('tc')
        var td = document.getElementById('td')
        for (var i = 0; i < response.Countries.length; i++) {
            if (response.Countries[i].Country == name) {
                console.log(typeof response.Countries[i].Country)
                show1.innerHTML = response.Countries[i].Country
                nc.innerHTML = response.Countries[i].NewConfirmed
                nd.innerHTML = response.Countries[i].NewDeaths
                nr.innerHTML = response.Countries[i].NewRecovered
                tc.innerHTML = response.Countries[i].TotalConfirmed
                td.innerHTML = response.Countries[i].TotalDeaths
            }
        }
    })


}

function renderDom(arr) {
    var result = document.getElementById('result')
    var div = document.createElement('div')
    var ul = document.createElement('ul')


    for (var i = 0; i < arr.length; i++) {
        var div3 = document.createElement('div')
        div3.innerHTML = "Country:" + " " + arr[i].Country + "<br/>" +
            "New Confirmed:" + " " + arr[i].NewConfirmed + "<br/> " + " Total Confirmed:" +
            " " + arr[i].TotalConfirmed + " <br/>" + " Total Deaths:" + " " + arr[i].TotalDeaths +
            "<br/>"
        ul.style.border = "2px solid #0000F";
        div3.style.border = "2px solid #808080";
        div3.style.padding = "20px";
        div3.style.marginBottom = "20px";

        div3.style.backgroundColor = "#05ffb0";
        ul.append(div3)

    }
    div.append(ul)
    result.append(div)
}