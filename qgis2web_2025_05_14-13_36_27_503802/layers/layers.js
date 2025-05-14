var wms_layers = [];

var format__0 = new ol.format.GeoJSON();
var features__0 = format__0.readFeatures(json__0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__0.addFeatures(features__0);
var lyr__0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__0, 
                style: style__0,
                popuplayertitle: '농기원',
                interactive: true,
                title: '<img src="styles/legend/_0.png" /> 농기원'
            });

lyr__0.setVisible(true);
var layersList = [lyr__0];
lyr__0.set('fieldAliases', {'pnu': 'pnu', 'jibun': 'jibun', 'bchk': 'bchk', 'sgg_oid': 'sgg_oid', 'col_adm_se': 'col_adm_se', '춘천시 시': '춘천시 시', '춘천시 �1': '춘천시 �1', '춘천시 �2': '춘천시 �2', '춘천시 �3': '춘천시 �3', '춘천시 �4': '춘천시 �4', '춘천시 �5': '춘천시 �5', '춘천시 �6': '춘천시 �6', '춘천시 �7': '춘천시 �7', '춘천시 �8': '춘천시 �8', '춘천시 �9': '춘천시 �9', });
lyr__0.set('fieldImages', {'pnu': '', 'jibun': '', 'bchk': '', 'sgg_oid': '', 'col_adm_se': '', '춘천시 시': '', '춘천시 �1': '', '춘천시 �2': '', '춘천시 �3': '', '춘천시 �4': '', '춘천시 �5': '', '춘천시 �6': '', '춘천시 �7': '', '춘천시 �8': '', '춘천시 �9': '', });
lyr__0.set('fieldLabels', {'pnu': 'no label', 'jibun': 'no label', 'bchk': 'no label', 'sgg_oid': 'no label', 'col_adm_se': 'no label', '춘천시 시': 'no label', '춘천시 �1': 'no label', '춘천시 �2': 'no label', '춘천시 �3': 'no label', '춘천시 �4': 'no label', '춘천시 �5': 'no label', '춘천시 �6': 'no label', '춘천시 �7': 'no label', '춘천시 �8': 'no label', '춘천시 �9': 'no label', });
lyr__0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});