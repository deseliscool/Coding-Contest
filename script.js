


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
                infoText.innerHTML = "The Whooping Crane is one of North America's rarest and most endangered birds, facing numerous challenges throughout its migration. These cranes migrate between their breeding grounds in Wood Buffalo National Park, Canada, and their wintering habitat along the Gulf Coast of Texas. Along the way, they encounter threats such as habitat loss, severe weather, predators, and collision risks with power lines1. Conservation efforts, including habitat protection and the use of high-visibility flight diverters, aim to mitigate these dangers. Despite these challenges, dedicated conservation programs have helped their population rebound from near extinction";

             }
             function showMonarch(){
                infoText.innerHTML = "Monarch butterflies face numerous challenges during their migration, including habitat loss, climate change, pesticide use, and dwindling food sources such as milkweed, which is crucial for their reproduction. Their migration path is one of the most remarkable in the insect world, as they travel thousands of miles between Canada or the northern United States and central Mexico. In the fall, eastern populations journey south to the oyamel fir forests in the mountains of Mexico, where they overwinter in large colonies. In the spring, they begin a multi-generational return northward, with each generation moving further until their descendants complete the cycle. This incredible migration requires precise navigation, endurance, and access to critical stopover habitats along the way, all of which are increasingly threatened by environmental pressures.";
             }
             function showAmericanBison(){
                infoText.innerHTML = "The American bison, once roaming vast grasslands in massive herds, now faces significant challenges in migration due to habitat fragmentation, human development, and conservation policies. Historically, these animals moved across the plains in search of food and water, playing a crucial role in maintaining ecosystem balance. However, modern obstacles such as fences, roads, and agricultural expansion have restricted their movement, leading to isolated populations. Conservation efforts, including reintroduction programs and protected reserves, aim to restore their natural roaming patterns, but political, social, and logistical hurdles remain. Despite these difficulties, ongoing initiatives strive to ensure that bison can reclaim their ecological role while coexisting with human activities. ";
            
             }
            
