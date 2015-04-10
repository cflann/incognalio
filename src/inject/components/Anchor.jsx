var React = require('react');

var Anchor = React.createClass({

  getInitialState: function() {
    return {
      highlighted: true
    };
  },

  toggleHighlight: function(e) {
    this.setState({
      highlighted: !this.state.highlighted
    });
  },

  render: function() {
    var classString = this.state.highlighted ? 'highlighted' : '';

    return (
      <span className={classString} onClick={this.toggleHighlight} dangerouslySetInnerHTML={this.props.inner}></span>
    );
  }

});

module.exports = Anchor;
