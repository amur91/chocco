let myMap;

const init = () => {
  myMap = new ymaps.Map("map", {
    center: [59.891434, 30.338970],
    zoom: 11,
    controls: []
  });

  const coords = [
    [59.949057, 30.298262],
    [59.946763, 30.263686],
    [59.938625, 30.312839],
    [59.941390, 30.347406],
  ];
  const myCollection = new ymaps.GeoObjectCollection({}, {
    draggable: false,
    iconLayout: 'default#image', 
    iconImageHref: "./assets/geotag.png",
    iconImageSize: [46, 57],
    iconImageOffset: [-35, -52],
  });

  coords.forEach(coord => {
    myCollection.add(new ymaps.Placemark(coord));
  });

  myMap.geoObjects.add(myCollection);

  myMap.behaviors.disable('scrollZoom');
}

ymaps.ready(init);