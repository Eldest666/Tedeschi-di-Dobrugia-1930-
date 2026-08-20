var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '<a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_MappalocalittedeschedellaDobrugia1930_1 = new ol.format.GeoJSON();
var features_MappalocalittedeschedellaDobrugia1930_1 = format_MappalocalittedeschedellaDobrugia1930_1.readFeatures(json_MappalocalittedeschedellaDobrugia1930_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MappalocalittedeschedellaDobrugia1930_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MappalocalittedeschedellaDobrugia1930_1.addFeatures(features_MappalocalittedeschedellaDobrugia1930_1);
var lyr_MappalocalittedeschedellaDobrugia1930_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MappalocalittedeschedellaDobrugia1930_1, 
                style: style_MappalocalittedeschedellaDobrugia1930_1,
                popuplayertitle: 'Mappa località tedesche della Dobrugia (1930)',
                interactive: true,
    title: 'Mappa località tedesche della Dobrugia (1930)<br />\
    <img src="styles/legend/MappalocalittedeschedellaDobrugia1930_1_0.png" /> 0 - 100<br />\
    <img src="styles/legend/MappalocalittedeschedellaDobrugia1930_1_1.png" /> 100 - 250<br />\
    <img src="styles/legend/MappalocalittedeschedellaDobrugia1930_1_2.png" /> 250 - 500<br />\
    <img src="styles/legend/MappalocalittedeschedellaDobrugia1930_1_3.png" /> 500 - 1000<br />\
    <img src="styles/legend/MappalocalittedeschedellaDobrugia1930_1_4.png" /> 1000 - 1500<br />' });

lyr_OSMStandard_0.setVisible(true);lyr_MappalocalittedeschedellaDobrugia1930_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_MappalocalittedeschedellaDobrugia1930_1];
lyr_MappalocalittedeschedellaDobrugia1930_1.set('fieldAliases', {'Località': 'Località', 'Toponimo tedesco': 'Toponimo tedesco', 'Plasă': 'Plasă', 'Județ': 'Județ', 'Regione storica': 'Regione storica', 'Popolazione complessiva': 'Popolazione complessiva', 'Numero abitanti romeni': 'Numero abitanti romeni', 'Percentuale abitanti romeni': 'Percentuale abitanti romeni', 'Numero abitanti tedeschi': 'Numero abitanti tedeschi', 'Percentuale abitanti tedeschi': 'Percentuale abitanti tedeschi', 'Numero abitanti di altra etnia': 'Numero abitanti di altra etnia', 'Percentuale abitanti di altra etnia': 'Percentuale abitanti di altra etnia', 'Latitudine N': 'Latitudine N', 'Longitudine E': 'Longitudine E', });
lyr_MappalocalittedeschedellaDobrugia1930_1.set('fieldImages', {'Località': 'TextEdit', 'Toponimo tedesco': 'TextEdit', 'Plasă': 'TextEdit', 'Județ': 'TextEdit', 'Regione storica': 'TextEdit', 'Popolazione complessiva': 'Range', 'Numero abitanti romeni': 'Range', 'Percentuale abitanti romeni': 'TextEdit', 'Numero abitanti tedeschi': 'Range', 'Percentuale abitanti tedeschi': 'TextEdit', 'Numero abitanti di altra etnia': 'Range', 'Percentuale abitanti di altra etnia': 'TextEdit', 'Latitudine N': 'TextEdit', 'Longitudine E': 'TextEdit', });
lyr_MappalocalittedeschedellaDobrugia1930_1.set('fieldLabels', {'Località': 'inline label - always visible', 'Toponimo tedesco': 'inline label - always visible', 'Plasă': 'inline label - always visible', 'Județ': 'inline label - always visible', 'Regione storica': 'inline label - always visible', 'Popolazione complessiva': 'inline label - always visible', 'Numero abitanti romeni': 'inline label - always visible', 'Percentuale abitanti romeni': 'inline label - always visible', 'Numero abitanti tedeschi': 'inline label - always visible', 'Percentuale abitanti tedeschi': 'inline label - always visible', 'Numero abitanti di altra etnia': 'inline label - always visible', 'Percentuale abitanti di altra etnia': 'inline label - always visible', 'Latitudine N': 'inline label - always visible', 'Longitudine E': 'inline label - always visible', });
lyr_MappalocalittedeschedellaDobrugia1930_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});