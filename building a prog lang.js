topEnv["array"] = function(val) {
  return [...val];
};

topEnv["length"] = function(ar) {
  return ar.length;
};

topEnv["element"] = function(ar, i) {
  return ar[i];
};