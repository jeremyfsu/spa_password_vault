var Settings = (function () {});

var Settings = {
  read: function() {
    var context = {};
    $('#content').html(Handlebars.templates['settings.html'](context));
    if(window.localStorage.getItem("vault_settings") != null) {
      var settings = JSON.parse(window.localStorage.getItem("vault_settings"));
      $('input#key').val(settings.key);
      $('input#secret').val(settings.secret);
      $('input#bucket').val(settings.bucket);
    }
  },

  store: function() {
    settings = {
      key: $('input#key').val(),
      secret: $('input#secret').val(),
      bucket: $('input#bucket').val()
    };
    window.localStorage.setItem("vault_settings", JSON.stringify(settings));
    alert("Settings saved");
    window.location.assign('/');
  }
};
