$(function() {
  // load the widget configuration
  var config = new WidgetConfig();
  config.on("config-initialized", function(event, data) {
    //$("#output").text(config.preferences["Article Number"]);
    //load the page
    $.get(config.preferences["Feed"], "", function(data, textStatus, jqXHR) {
      var randomIndex = get_random(data);
      console.log(randomIndex);
      $("#quote").text(data[randomIndex][0]);
      $("#source").text(data[randomIndex][1]);
    });
  });
  config.on("config-error", function() {
    $("#output").text("Error loading preferences");
  });
  config.init();
});

function get_random(myList) {
  return Math.floor(Math.random() * 72);
}
