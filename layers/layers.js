var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_PrediosProcs_WGS84_0 = new ol.format.GeoJSON();
var features_PrediosProcs_WGS84_0 = format_PrediosProcs_WGS84_0.readFeatures(json_PrediosProcs_WGS84_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrediosProcs_WGS84_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_PrediosProcs_WGS84_0.addFeatures(features_PrediosProcs_WGS84_0);var lyr_PrediosProcs_WGS84_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PrediosProcs_WGS84_0, 
                style: style_PrediosProcs_WGS84_0,
                title: '<img src="styles/legend/PrediosProcs_WGS84_0.png" /> PrediosProcs_WGS84'
            });

lyr_PrediosProcs_WGS84_0.setVisible(true);
var layersList = [baseLayer,lyr_PrediosProcs_WGS84_0];
lyr_PrediosProcs_WGS84_0.set('fieldAliases', {'CD_PRED': 'CD_PRED', 'ID_PREDIO': 'ID_PREDIO', 'ID_EXPEDIE': 'ID_EXPEDIE', 'COD_DUP': 'COD_DUP', 'REQ_PRED': 'REQ_PRED', 'ESTADO_ADQ': 'ESTADO_ADQ', 'EST_TIT': 'EST_TIT', 'FECHA_ESTT': 'FECHA_ESTT', 'AREA_AFECT': 'AREA_AFECT', 'AVALUO': 'AVALUO', 'FECHA_AVAL': 'FECHA_AVAL', 'CENSO': 'CENSO', 'FECHA_CENS': 'FECHA_CENS', 'OFERTA': 'OFERTA', 'FECHA_OFER': 'FECHA_OFER', 'ID_EXPED_O': 'ID_EXPED_O', 'TIPO_ADQ': 'TIPO_ADQ', 'MODO_ADQ': 'MODO_ADQ', 'ID_EXPED_A': 'ID_EXPED_A', 'ID_CONSUL': 'ID_CONSUL', });
lyr_PrediosProcs_WGS84_0.set('fieldImages', {'CD_PRED': 'Hidden', 'ID_PREDIO': 'TextEdit', 'ID_EXPEDIE': 'TextEdit', 'COD_DUP': 'Hidden', 'REQ_PRED': 'TextEdit', 'ESTADO_ADQ': 'Hidden', 'EST_TIT': 'TextEdit', 'FECHA_ESTT': 'TextEdit', 'AREA_AFECT': 'Hidden', 'AVALUO': 'Hidden', 'FECHA_AVAL': 'Hidden', 'CENSO': 'TextEdit', 'FECHA_CENS': 'TextEdit', 'OFERTA': 'Hidden', 'FECHA_OFER': 'Hidden', 'ID_EXPED_O': 'Hidden', 'TIPO_ADQ': 'Hidden', 'MODO_ADQ': 'Hidden', 'ID_EXPED_A': 'Hidden', 'ID_CONSUL': 'Hidden', });
lyr_PrediosProcs_WGS84_0.set('fieldLabels', {'ID_PREDIO': 'no label', 'ID_EXPEDIE': 'no label', 'REQ_PRED': 'no label', 'EST_TIT': 'no label', 'FECHA_ESTT': 'no label', 'CENSO': 'no label', 'FECHA_CENS': 'no label', });
lyr_PrediosProcs_WGS84_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});