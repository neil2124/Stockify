/**
 * @copyright Neil Mascarenhas 2023
 * @author  <nmascarenhas2001@gmail.com>
 */

"use strict";

/**
 * Import
 */

import { urlEncode } from "./urlEncode.js";


/**
 * Update url
 * @param {Object} filterObj Filter object
 * @param {String} searchType Search type eg. 'videos' or 'photos'
 */

export const updateUrl = (filterObj, searchType) => {
  setTimeout(() => {
    const /** {String} */ root = window.location.origin;
    const /** {String} */ searchQuery = urlEncode(filterObj);
    
    // Always include /Stockify for GitHub Pages deployment
    const basePath = '/Stockify';
    
    // Use window.location.href instead of window.location
    window.location.href = `${root}${basePath}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
}