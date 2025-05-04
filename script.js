


    function getColor(d) {
     return d == "Whooping Crane" ? '#4b958d' :
           d == "Monarch Butterfly"  ? '#33d87e' :
           d == "American Bison"  ? '#337cd8' :
    
                      '#FFEDA0';
}

    var whoopingcranepath = L.curve(['M',[59.43951722801632, -112.87640124584433],
        'C',[59.43951722801632, -112.87640124584433],
            [42.37162984497836, -104.15012824979199],
            [28.30887305153302, -96.80433478650598],

    ],
            {color:'#4b958d ',fill:false});


    var monarchpath = L.curve(['M',[19.03543943725278, -99.39733372266757],
        'C',[19.03543943725278, -99.39733372266757],
            [34.046118218658314, -100.68199746131042],
            [44.62728762616233, -94.4731525652699],

    ],
            {color:'#33d87e',fill:false});

    var americanbisonpath = L.curve(['M',[44.71292697400824, -110.58171536559219],
        'C',[44.71292697400824, -110.58171536559219],
            [48.459124433466, -105.66595472504018],
            [45.89741566228373, -88.74282211564459],
            
    ],

             {color:'#337cd8 ',fill:false});

    var paths = L.layerGroup([whoopingcranepath, monarchpath, americanbisonpath]);
    var paths1 = L.layerGroup([whoopingcranepath]);
    var paths2 = L.layerGroup([monarchpath]);
    var paths3 = L.layerGroup([americanbisonpath]);
    var nopaths = L.layerGroup([]);



    var map = L.map('map',{layers:[paths,paths1,paths2,paths3]}).setView([48.984687, -110.108168], 3);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 5,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var baseMaps = {
        "Show Paths": paths,
        "Hide Paths": nopaths,
    };
    
    var overlayMaps = {
        "Whooping Crane Path": paths1,
        "Monarch Butterfly Path": paths2,
        "American Bison Path": paths3,
        
        

    };
    var layerControl = L.control.layers(baseMaps, overlayMaps).addTo(map);

     var legend = L.control({position: 'bottomright'});

             legend.onAdd = function (map) {
             
                 var div = L.DomUtil.create('div', 'info legend'),
                     grades = ["Whooping Crane","Monarch Butterfly","American Bison"],
                     labels = [];
             
               
                 for (var i = 0; i < grades.length; i++) {
                     div.innerHTML += 
                         '<i style="background:' + getColor(grades[i]) + '"></i> ' +
                         grades[i] +"<br>";
                 }
             
                 return div;
             };
             
             legend.addTo(map);

            
             function showCrane(){
                infoText.innerHTML = "WHOOPING CRANE";

             }
             function showMonarch(){
                infoText.innerHTML = "MONARCH BUTTERFLY";
             }
             function showAmericanBison(){
                infoText.innerHTML = "AMERICAN BISON";
            
             }
             function hideText(){
                infoText.innerHTML = "";
             }

