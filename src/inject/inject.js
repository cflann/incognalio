var React = require('react');
var rangy = require('rangy');
var Anchor = require('./components/Anchor.jsx');
var Test = require('../test.js');
var Incg = require('./utils/Incg.js');

console.log('script injected');

Incg.render(<Test />);

// window.onload = function() {
/*document.body.onmouseup = function(e) {
  // e.preventDefault();
  console.log('mouse up!', window.rangy);

  // grab selection and contents
  var selection = rangy.getSelection();
  var nativeSelection = document.getSelection();
  var sRange = nativeSelection.getRangeAt(0);
  console.log(selection.toHtml());
  var contents = selection.toHtml();
  var __html = {
    __html: contents
  };

  // check if selection is empty (or has already been selected?)
  if (contents.indexOf('wrapper') > -1 || contents.length === 0) {
    return;
  }

  // create and place wrapper element
  var wrapper = document.createElement('span');
  wrapper.className = 'wrapper';
  sRange.deleteContents();
  sRange.insertNode(wrapper);

  var a = React.render(<Anchor inner={__html} />, wrapper);
  rangy.getSelection(wrapper);
};
  */
