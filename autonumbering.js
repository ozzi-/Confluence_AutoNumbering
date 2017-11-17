function addNumbering() {
  var indices = [];
  AJS.$('h1,h2,h3,h4,h5,h6').each(function(i,e) {
    var html = this.outerHTML;
    if((html.indexOf('id="logo"') === -1) && (html.indexOf('id="') !== -1)){
      var hIndex = parseInt(this.nodeName.substring(1)) - 1;
      if (indices.length - 1 > hIndex) {
        indices= indices.slice(0, hIndex + 1 );
      }
      if (indices[hIndex] == undefined) {
        indices[hIndex] = 0;
      }
      indices[hIndex]++;
      AJS.$(this).prepend(indices.join(".")+" ");
    }
  });
}

AJS.$(document).ready(function() {
  var tags = document.getElementById("labels-section").innerHTML;
  if(tags.indexOf("%automaticnumbering%")!==-1){
    addNumbering();
  }
});
