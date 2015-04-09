console.log('script injected');

// window.onload = function() {
document.body.onmouseup = function(e) {
  e.preventDefault();
  console.log('mouse up!');
  var selection = document.getSelection();
  var sRange;
  if (selection) {
    sRange = selection.getRangeAt(0);
    console.log(sRange);
    var wrapper = document.createElement('span');
    wrapper.className = 'highlighted';
    wrapper.appendChild(sRange.extractContents());
    sRange.insertNode(wrapper);
  }
};
