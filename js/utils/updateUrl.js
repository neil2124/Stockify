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
    
    // Add /Stockify to the path only if it's not already in the origin
    const basePath = root.includes('/Stockify') ? '' : '/Stockify';
    window.location = `${root}${basePath}/pages/${searchType}/${searchType}.html?${searchQuery}`;
  }, 500);
}