import React from 'react';
import ReactDOM from 'react-dom';
import RootComponent from './RootComponent';
import mapboxgl from 'mapbox-gl';

ReactDOM.render(<RootComponent/>, document.querySelector('#react_root'));

mapboxgl.accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';

locale = 'fr';

window.mb = new mapboxgl.Map({
  attributionControl: false,
  container: 'scene_container',
  style: mapstyle,
  hash: false,
  maxZoom: 20,
  locale,
  zoom: 5,
  center: [7, 42],
  width: '100vw',
  height: '100vh',
});

mb.resize();

onMapLoaded = e => {
  e.map.resize();
}