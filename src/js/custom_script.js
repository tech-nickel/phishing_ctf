  window.bodies_short = function (val) {
    var arr = val.split(" ",5);
    var retval = arr.join(" ") + "...";
    return retval;
  };

  window.bodies_html = function (val) {
    var arr = val.split(/\r?\n|\r|\n/g);
    var arr_new = [];
    for (var i = 0; i < arr.length; i++) {
      arr_new.push("&lt;p&gt;" + arr[i] + "&lt;/p&gt;")
    }
    var retval = arr_new.join("\r\n");
    return retval;
  };