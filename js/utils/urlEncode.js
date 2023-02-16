/**
* @copyright Neil Mascarenhas 2023
* @author sadee <nmascarenhas2001@gmail.com>
*/

"use strict";

/**
 * Convert Object to Url
 * @param {Object} urlObj url object
 * @returns url string
 */

export const urlEncode = urlObj => {
  return Object.entries(urlObj).join("&").replace(/,/g, "=").replace(/#/g, "%23");
}