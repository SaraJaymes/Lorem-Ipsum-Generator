function generar() {
    document.getElementById("caja").innerHTML="";

var lorem = "lorem ipsum dolor sit amet consectetur adipiscing elit pellentesque posuere sit amet elit sed cursus nullam malesuada libero euismod eros accumsan at congue arcu fermentum aenean et pharetra velit nullam in tempor justo in ac augue elementum diam fermentum ullamcorper maecenas accumsan sit amet quam eu lacinia nullam in nibh nisi fusce interdum lectus in maximus iaculis felis tortor dictum massa id gravida quam augue et tortor phasellus id lacus vitae metus egestas hendrerit id eu lectus proin vel tincidunt nunc ut aliquam leo cras dignissim quam a odio fringilla a sagittis ante faucibus suspendisse ullamcorper id metus quis dignissim sed aliquet lectus sed lorem tristique fringilla nunc nec ante risus aenean nisi dui vehicula sit amet finibus eleifend ullamcorper quis nisl ut porta magna at facilisis egestas curabitur vestibulum tincidunt lectus morbi rhoncus nec elit eget egestas aliquam ut augue id eros mollis tincidunt sed et metus morbi vel mauris rutrum mi magna et venenatis felis rutrum vehicula praesent volutpat mi ut ante maximus dignissim mauris viverra aliquet urna in dapibus est tincidunt ut suspendisse eget magna imperdiet sodales purus ac pharetra dolor morbi est tellus hendrerit nec lacinia eu malesuada sed justo ut porttitor commodo tincidunt nam eu";
lorem_ipsum = lorem.split(" ");
var paragrafs = parseInt(prompt("Tria el nombre de paràgrafs"));
var paraules = parseInt(prompt("Tria el nombre de paraules"));


for (n=0; n<paragrafs; n++) {
    var loremprint = "<p>lorem ipsum ";

    for (i=2; i<paraules; i++){
        loremprint = loremprint +" "+ lorem_ipsum [Math.floor(Math.random()*(lorem_ipsum.length-1))];
        console.log(loremprint);
    }
    loremprint = loremprint + ".</p>";
    document.getElementById("caja").innerHTML += "<div>"+loremprint+"<div>";
    
}
}
