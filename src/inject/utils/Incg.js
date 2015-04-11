var React = require('react');

var Incg = {
  render: function(component, anchorSelector) {
    // Create container to hold our custom component and append to body
    var container = document.createElement('div');
    container.className = 'incg-div-container incg-css-reset';
    document.body.append(container);

    // For now, just assume the selector passed in is a css id
    var anchor = document.body.getElementById(anchorSelector);

    // Render our component to the DOM
    var ComponentFactory = React.createFactory(component);
    var comp = ComponentFactory({anchor: anchor});
    React.render(comp, container);
  }
};

module.exports = Incg;
