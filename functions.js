// 1. list() function
function list(clients) {
  return clients.map((client, index) => 
    `<li class="list-group-item d-flex justify-content-between" data-index="${index}">
      ${client.name}
      <strong>$${client.balance}</strong>
    </li>`
  ).join('');
}

// 2. order() function
function order(clients, property) {
  return [...clients].sort((a, b) => {
    if (a[property] < b[property]) return -1;
    if (a[property] > b[property]) return 1;
    return 0;
  });
}

// 3. total() function
function total(clients) {
  return clients.reduce((sum, client) => sum + client.balance, 0);
}

// 4. info() function
function info(index) {
  return clients.find((client, i) => i === index);
}

// 5. search() function
function search(query) {
  const lowerQuery = query.toLowerCase();
  return clients.filter(client => client.name.toLowerCase().includes(lowerQuery));
}
