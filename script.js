function search() {
  var input = document.getElementById('searchInput').value.toLowerCase();
  var searchResults = document.getElementById('searchResults');
  searchResults.innerHTML = '';

  // Array di esempio di oggetti su cui effettuare la ricerca
  var data = [
    { name: 'Prodotto 1', description: 'Descrizione del prodotto 1' },
    { name: 'Prodotto 2', description: 'Descrizione del prodotto 2' },
    { name: 'Prodotto 3', description: 'Descrizione del prodotto 3' }
    // Aggiungi altri oggetti qui
  ];

  var results = data.filter(function(item) {
    return item.name.toLowerCase().includes(input) || item.description.toLowerCase().includes(input);
  });

  if (results.length === 0) {
    searchResults.innerHTML = 'Nessun risultato trovato.';
  } else {
    results.forEach(function(item) {
      var resultDiv = document.createElement('div');
      resultDiv.innerHTML = '<h3>' + item.name + '</h3><p>' + item.description + '</p>';
      searchResults.appendChild(resultDiv);
    });
  }
}
