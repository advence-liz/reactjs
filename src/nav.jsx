<Fun> </Fun>

const Listing = React.createClass({
  // ...
  render() {
    return <div>{this.state.hello}</div>;
  }
});
/**
 * Creates a new Person.
 * @class
 */
function Person() {
}

var p = new Person();


/** Class representing a point. 
 * @class
 * @memberof  es6
 * 
*/
class Point {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  constructor(x, y) {
    // ...
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  getX() {
    // ...
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY() {
    // ...
  }

  /**
   * Convert a string containing two comma-separated numbers into a point.
   * @param {string} str - The string containing two comma-separated numbers.
   * @return {Point} A Point object.
   */
  static fromString(str) {
    // ...
  }
}



/** Class representing a point. 
 * @class
 * @param {number} x - The x value.
 * @param {number} y - The y value.
 * @memberof  es5
 * 
*/
function PointES5() {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   */
  this.constructor = function (x, y) {
    // ...
  }

  /**
   * Get the x value.
   * @return {number} The x value.
   */
  this.getX = function () {
    // ...
  }

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  this.getY = function () {
    // ...
  }

}

/**
 * Convert a string containing two comma-separated numbers into a point.
 * @param {string} str - The string containing two comma-separated numbers.
 * @return {Point} A Point object.
 */

PointES5.fromString = function (str) {

}

/** Class representing a point. 
 * @class
 * @memberof  es5
 * 
*/

 var PointOBJ= {
  /**
   * Create a point.
   * @param {number} x - The x value.
   * @param {number} y - The y value.
   * @memberof es6#
   */
  constructor : function (x, y) {
    // ...
  },
  /**
   * name
   * @prop
   * @memberof es6#
   */
 name:"liz",
  /**
   * Get the x value.
   * @public
   * @return {number} The x value.
   */
  getX :function () {
    // ...
  },

  /**
   * Get the y value.
   * @return {number} The y value.
   */
  getY : function () {
    // ...
  }

}
