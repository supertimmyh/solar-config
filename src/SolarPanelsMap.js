/**
 * @typedef {Object} LatLng - Latitude and longitude coordinates.
 * @property {number} latitude - The latitude.
 * @property {number} longitude - The longitude.
 */

/**
 * @typedef {Object} LatLngBox - A box defined by two sets of latitude and longitude coordinates.
 * @property {LatLng} sw - The southwest corner of the box.
 * @property {LatLng} ne - The northeast corner of the box.
 */

/**
 * @typedef {import("@nora-soderlund/google-maps-solar-api").BuildingInsights} BuildingInsights - Building insights data.
 */

/**
 * @typedef {import("@nora-soderlund/google-maps-solar-api").DataLayers} DataLayers - Data layers.
 */

/**
 * @typedef {import("./interfaces/DataLayerOverlay").default} DataLayerOverlay - Data layer overlay.
 */

/**
 * @class
 */
import React from 'react';

class SolarPanelsMap extends React.Component {
  /**
   * @private
   * @type {google.maps.Map}
   */
  map;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  mapElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  formElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  panelElement;

  /**
   * @private
   * @type {HTMLInputElement}
   */
  panelSliderElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  panelCountConicElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  panelCountConicInnerElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  panelEnergyConicElement;

  /**
   * @private
   * @type {HTMLDivElement}
   */
  panelEnergyConicInnerElement;

  /**
   * @param {string} apiKey - The API key for authentication.
   * @param {HTMLDivElement} element - The HTML element to attach the map to.
   */
  constructor(apiKey, element) {
    element.classList.add("solar-panels");
    this.apiKey = apiKey;
    this.element = element;
    this.initMap();
    this.initForm();
    this.initPanel();
  }

  /**
   * Initialize the map.
   * @private
   */
  async initMap() {
    this.mapElement = document.createElement("div");
    this.mapElement.className = "solar-panels-map";
    this.element.append(this.mapElement);

    const { Map } = await google.maps.importLibrary("maps") as google.maps.MapsLibrary;
    await google.maps.importLibrary("geometry") as google.maps.GeometryLibrary;

    this.map = new Map(this.mapElement, {
      center: {
        lat: 57.623147493770105,
        lng: 11.931981013011718
      },
      mapTypeId: "satellite",
      tilt: 0,
      styles: [
        {
          featureType: "all",
          elementType: "labels",
          stylers: [
            { visibility: "off" }
          ]
        }
      ],
      zoom: 17,
      streetViewControl: false,
      mapTypeControl: false,
      rotateControl: false
    });
  }

  /**
   * Initialize the form.
   * @private
   */
  async initForm() {
    // Code for initializing the form
    // ...

    const autocomplete = new Autocomplete(inputElement, {
      fields: [ "geometry" ],
      types: [ "address" ]
    });

    autocomplete.addListener("place_changed", () => {
      // Code for handling place selection
      // ...
    });
  }

  /**
   * Initialize the panel.
   * @private
   */
  initPanel() {
    // Code for initializing the panel
    // ...

    this.panelSliderElement.addEventListener("input", () => {
      // Code for handling panel slider input
      // ...
    });
  }

  /**
   * Show insights for a given coordinate.
   * @param {LatLng} coordinate - The coordinate to show insights for.
   */
  async showInsightsForCoordinate(coordinate) {
    // Code for showing insights for a given coordinate
    // ...
  }

  /**
   * Set the potential segment.
   * @param {number} configIndex - The index of the configuration to set.
   */
  setPotentialSegment(configIndex) {
    // Code for setting the potential segment
    // ...
  }

  /**
   * Show the address form.
   */
  showAddressForm() {
    // Code for showing the address form
    // ...
  }
}

export default SolarPanelsMap;

if (window) {
  (window as any).SolarPanelsMap = SolarPanelsMap;
}
