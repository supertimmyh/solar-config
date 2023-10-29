/**
 * @class
 */
import React from 'react';

class DataLayerOverlay extends React.Component{
  /**
   * Create a DataLayerOverlay instance.
   *
   * @param {google.maps.LatLngBounds} bounds - The bounds for the overlay.
   * @param {HTMLCanvasElement} image - The HTML canvas element.
   * @returns {DataLayerOverlay} The DataLayerOverlay instance.
   */
  static create(bounds, image) {
    return new (class extends google.maps.OverlayView {
      /**
       * @readonly
       * @type {google.maps.LatLngBounds}
       */
      bounds;
      
      /**
       * @readonly
       * @type {HTMLCanvasElement}
       */
      image;

      /**
       * @type {HTMLDivElement|undefined}
       */
      element;

      /**
       * Constructor for the inner class.
       *
       * @param {google.maps.LatLngBounds} bounds - The bounds for the overlay.
       * @param {HTMLCanvasElement} image - The HTML canvas element.
       */
      constructor(bounds, image) {
        super();

        this.bounds = bounds;
        this.image = image;
      };

      /**
       * Called when the overlay is added to the map.
       */
      onAdd() {
        this.element = document.createElement("div");
        this.element.style.borderStyle = "none";
        this.element.style.borderWidth = "0px";
        this.element.style.position = "absolute";

        this.image.style.width = "100%";
        this.image.style.height = "100%";
        this.image.style.position = "absolute";
        this.element.append(this.image);

        const panes = this.getPanes();

        panes?.overlayLayer.appendChild(this.element);
      };

      /**
       * Called when the overlay is redrawn.
       */
      draw() {
        if (this.element) {
          const overlayProjection = this.getProjection();

          const southWest = overlayProjection.fromLatLngToDivPixel(this.bounds.getSouthWest());
          const northEast = overlayProjection.fromLatLngToDivPixel(this.bounds.getNorthEast());

          if (!southWest || !northEast)
            return;

          this.element.style.left = southWest.x + "px";
          this.element.style.top = northEast.y + "px";
          this.element.style.width = northEast.x - southWest.x + "px";
          this.element.style.height = southWest.y - northEast.y + "px";
        }
      };

      /**
       * Called when the overlay is removed from the map.
       */
      onRemove() {
        if (this.element) {
          this.element.parentNode?.removeChild(this.element);

          delete this.element;
        }
      };
    })(bounds, image);
  };
};

export default DataLayerOverlay