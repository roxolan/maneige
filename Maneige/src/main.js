
main();

function main() {
  console.log('cheaning it, lying up front');
}

function requireAll(r) { r.keys().forEach(r); }
requireAll(require.context('./components/', true, /\.js$/));
