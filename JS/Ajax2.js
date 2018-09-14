$("#searchMe").on("click", function () {
    var greenland = $("#searchInput").val();
    $.getJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22" + greenland + "%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys", function (data) {
        console.log(data);
        var a = data.query.results.channel.item.forecast[0];
        $("#address").text(greenland);
        $("#data").text(a.date);
        $("#week").text(a.day);
        $("#hig-wearther").text(a.high+"F");
        $("#low-wearther").text(a.low+"F");
        $("#wearther").text(a.text);
        var d = '';
        for (var b = 1; b < 7; b++) {
            var c = data.query.results.channel.item.forecast[b];
            d +=  "<p class='display-next'>" + "日期：" + c.date + "<br>" + "星期：" + c.day + "<br>" + "温度：" + c.high + "F~" + c.low + "F<br>" + "天气：" + c.text + "</p>";
        }
        $("#firstDay").html(d);
        $("#searchInput").val(null);
    })
    

})