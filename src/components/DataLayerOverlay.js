import React, { useRef, useEffect } from 'react';

/**
 * @typedef {Object} LatLngLiteral
 * @property {number} lat
 * @property {number} lng
 */

/**
 * @typedef {Object} BoundsLiteral
 * @property {LatLngLiteral} southWest
 * @property {LatLngLiteral} northEast
 */

/**
 * @typedef {Object} DataLayerOverlayProps
 * @property {BoundsLiteral} bounds
 * @property {HTMLImageElement} image
 */

/**
 * @param {DataLayerOverlayProps} props
 */
function DataLayerOverlay({ bounds, image }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlayView = new google.maps.OverlayView();

    overlayView.onAdd = () => {
      const div = document.createElement('div');
      div.style.position = 'absolute';
      div.style.top = 0;
      div.style.left = 0;
      div.style.width = '100%';
      div.style.height = '100%';
      div.appendChild(image);
      overlayRef.current.appendChild(div);
    };

    overlayView.draw = () => {
      const projection = overlayView.getProjection();
      const sw = projection.fromLatLngToDivPixel(bounds.southWest);
      const ne = projection.fromLatLngToDivPixel(bounds.northEast);
      const div = overlayRef.current.firstChild;
      div.style.transform = `translate(${sw.x}px, ${ne.y}px)`;
    };

    overlayView.onRemove = () => {
      overlayRef.current.removeChild(overlayRef.current.firstChild);
    };

    overlayView.setMap(google.maps.Map);

    return () => {
      overlayView.setMap(null);
    };
  }, [bounds, image]);

  return <div ref={overlayRef} style={{ width: '100%', height: '100%' }} />;
};

export default DataLayerOverlay;