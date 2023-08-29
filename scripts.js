$(document).ready(function() {
    $.getJSON('links.json', function(data) {
        for (var section in data) {
          var sectionElm = $('<section></section>');
          var titleDiv = $(`<div class='section-title'>${section}</div>`);
          var links = $('<div class="section-links"></div>');
      
          for (var i in data[section]) {
            var link = $(`<a href="${data[section][i].url}">` + data[section][i].name + '</a>');
            links.append(link);
          }
      
          sectionElm.append(titleDiv);
          sectionElm.append(links);
          $('#container').append(sectionElm);
        }
    });
  });