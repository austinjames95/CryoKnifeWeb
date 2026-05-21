document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('footer');
  if (!el) return;
  fetch('site/footer/footer.html')
    .then(function (r) { return r.text(); })
    .then(function (html) { el.innerHTML = html; });
});
