var pages = [
  { title: 'Homepage', url: '/index.html' },
  { title: 'TWO', url: '/two.html' },
  { title: 'Contattaci', url: '/contact.html' }
  // Aggiungi altre pagine qui
];

function search() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  var results = pages.filter(function(page) {
    return page.title.toLowerCase().includes(input);
  });

  if (results.length === 0) {
    searchResults.innerHTML = 'Nessun risultato trovato.';
  } else {
    results.forEach(function(page) {
      var resultDiv = document.createElement('div');
      resultDiv.innerHTML = '<a href="' + page.url + '">' + page.title + '</a>';
      searchResults.appendChild(resultDiv);
    });
  }
}
