  window.bodies_short = function (val) {
    var arr = val.split(" ",5);
    var retval = arr.join(" ") + "...";
    return retval;
  };
