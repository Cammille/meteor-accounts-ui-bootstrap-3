Package.describe({
  summary: "Login widgets styled with bootstrap dropdown"
});

Package.on_use(function (api) {
  api.use(['accounts-urls', 'accounts-base', 'underscore', 'templating'], 'client');
  api.add_files([
    'login_buttons.css',
    'login_buttons.html',
    'login_buttons.js'], 'client');
});