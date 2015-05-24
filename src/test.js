var React = require('react');
var Incg = require('./inject/utils/Incg.js');

module.exports = Incg.createPayload({
  onAnchorMutate: function(summaries) {
    console.log(summaries);
  },
  render: function() {
    return (
      <div className="blue">Payload</div>
    );
  }
}, '#hello');

