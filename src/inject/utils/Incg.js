var React = require('react');
var MutationSummary = require('mutation-summary');

var Incg = {
  // Renders payload component to "floating" DOM node
  render: function(payload) {
    // Create container to hold our custom component and append to body
    var container = document.createElement('div');
    container.className = 'incg-div-container incg-css-reset';
    document.body.appendChild(container);

    // Render our component to the DOM
    React.render(payload, container);
  },

  createPayload: function(comp, anchorSelector) {
    // For now, just assume the selector passed in is a css id
    var anchor = document.getElementById(anchorSelector);

    var temp = {};
    if (comp.hasOwnProperty('onAnchorMutate')) {
      temp.onAnchorMutate = comp.onAnchorMutate;
      delete comp.onAnchorMutate;
    }

    var Component = React.createClass(comp);

    return React.createClass({
      componentDidMount: function() {
        if (temp.hasOwnProperty('onAnchorMutate')) {
          var observer = new MutationSummary({
            callback: temp.onAnchorMutate.bind(this.refs.payload),
            rootNode: anchor,
            queries: [{all: true}]
          });
        }
      },

      render: function() {
        return (
            <Component {...this.props} ref="payload" />
        );
      }
    });
  }
};

module.exports = Incg;
