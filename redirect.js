(function(){
  var NEW_SITE = 'https://app.cavitecitycoffeeclub.com';
  var OLD_BASE = '/coffee-shop-system';
  var path = location.pathname;
  if(path.indexOf(OLD_BASE + '/') !== 0 && path !== OLD_BASE){ path = '/'; }
  else path = path.slice(OLD_BASE.length) || '/';
  if(!/^\/(?!\/)[A-Za-z0-9._~\/-]*$/.test(path)) path = '/';
  var q = /^\?[A-Za-z0-9_=&%.-]*$/.test(location.search) ? location.search : '';
  var to = NEW_SITE + path + q;
  var a = document.getElementById('go');
  if(a) a.href = to;
  location.replace(to);
})();
