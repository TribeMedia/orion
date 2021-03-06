Package.describe({
  name: 'orionjs:lang-es',
  version: '1.5.0',
  summary: 'Orion spanish language',
  git: 'https://github.com/orionjs/orion',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');

  api.use('orionjs:lang-en@1.5.0');
  api.imply('orionjs:lang-en');

  api.addFiles('es.js');
});
