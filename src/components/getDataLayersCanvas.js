import GeoTIFF from 'geotiff';

/**
 * @typedef {Object} DataLayers
 * @property {string} rgbUrl - The URL of the RGB data layer.
 * @property {string} maskUrl - The URL of the mask data layer.
 */

/**
 * @param {string} apiKey - The API key for authentication.
 * @param {DataLayers} dataLayers - The data layers.
 * @returns {Promise<HTMLCanvasElement>} The RGB canvas.
 */
export async function getDataLayerRgbCanvas(apiKey, dataLayers) {
  const tiffImageBuffer = await getTiff(apiKey, dataLayers.rgbUrl);

  const tiff = await GeoTIFF.fromArrayBuffer(tiffImageBuffer);
  const tiffImage = await tiff.getImage();
  const tiffData = await tiffImage.readRasters();

  const canvas = document.createElement("canvas");

  canvas.width = tiffData.width;
  canvas.height = tiffData.height;

  const context = canvas.getContext("2d");

  for (let row = 0; row < tiffData.height; row++) {
    for (let column = 0; column < tiffData.width; column++) {
      const index = row * tiffData.width + column;

      context.fillStyle = `rgb(${tiffData[0][index]}, ${tiffData[1][index]}, ${tiffData[2][index]})`;
      context.fillRect(column, row, 1, 1);
    }
  }

  return canvas;
}

/**
 * @param {string} apiKey - The API key for authentication.
 * @param {DataLayers} dataLayers - The data layers.
 * @returns {Promise<HTMLCanvasElement>} The mask canvas.
 */
export async function getDataLayerMaskCanvas(apiKey, dataLayers) {
  const tiffImageBuffer = await getTiff(apiKey, dataLayers.maskUrl);

  const tiff = await GeoTIFF.fromArrayBuffer(tiffImageBuffer);
  const tiffImage = await tiff.getImage();
  const tiffData = await tiffImage.readRasters();

  const canvas = document.createElement("canvas");

  canvas.width = tiffData.width;
  canvas.height = tiffData.height;

  const context = canvas.getContext("2d");

  for (let row = 0; row < tiffData.height; row++) {
    for (let column = 0; column < tiffData.width; column++) {
      const index = row * tiffData.width + column;

      context.fillStyle = `rgb(${tiffData[0][index]}, ${tiffData[0][index]}, ${tiffData[0][index]})`;
      context.fillRect(column, row, 1, 1);
    }
  }

  return canvas;
}

/**
 * @param {string} apiKey - The API key for authentication.
 * @param {string} url - The URL of the TIFF image.
 * @returns {Promise<ArrayBuffer>} The TIFF image buffer.
 */
async function getTiff(apiKey, url) {
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
    },
  });

  return response.arrayBuffer();
}