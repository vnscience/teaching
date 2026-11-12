// Product list
const items = [
    { name: 'Apple', price: 1.2 },
    { name: 'Banana', price: 0.5 },
    { name: 'Cherry', price: 2.0 },
    { name: 'Date', price: 1.5 },
    { name: 'Elderberry', price: 3.0 },
    { name: 'Orange', price: 1.8 },
    { name: 'Mango', price: 2.5 },
    { name: 'Grape', price: 2.2 },
    { name: 'Pineapple', price: 3.5 },
    { name: 'Watermelon', price: 4.0 },
    { name: 'Strawberry', price: 2.8 },
    { name: 'Blueberry', price: 3.2 },
    { name: 'Peach', price: 1.7 },
    { name: 'Pear', price: 1.4 },
    { name: 'Kiwi', price: 2.1 },
    { name: 'Lemon', price: 0.8 },
    { name: 'Coconut', price: 2.6 },
    { name: 'Papaya', price: 1.9 },
    { name: 'Guava', price: 1.3 },
    { name: 'Dragon Fruit', price: 2.4 },
    { name: 'Avocado', price: 3.1 },
    { name: 'Lychee', price: 2.9 },
    { name: 'Plum', price: 1.6 },
    { name: 'Raspberry', price: 3.4 },
    { name: 'Melon', price: 3.7 }
];

// Render Product List Function
function renderList(filteredItems) {
    const list = document.getElementById('itemList');
    list.innerHTML = '';

    if (filteredItems.length === 0) {
        list.innerHTML = '<li>No available product!</li>';
        return;
    }

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)} USD`;
        list.appendChild(li);
    });
}

// Function for searching, filtering and sorting
function handleFilter() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    const minPrice = parseFloat(document.getElementById('minPriceInput').value) || 0;

    const sortType = document.getElementById('sortSelect').value;

    // Copy the original list item
    let filtered = [...items];

    // Search by product name
    filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );

    // Filter by minimum price
    filtered = filtered.filter(item =>
        item.price >= minPrice
    );

    // Sort by price
    filtered.sort((a, b) => {
        if (sortType === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    // Render list item
    renderList(filtered);
}

// When inputing search kw or min price
document.getElementById('searchInput')
    .addEventListener('input', handleFilter);

document.getElementById('minPriceInput')
    .addEventListener('input', handleFilter);

// When changing sorting-type
document.getElementById('sortSelect')
    .addEventListener('change', handleFilter);

// Prevent form reload automatically
document.getElementById('filterForm')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        handleFilter();
    });

// When hitting the reset button
document.getElementById('filterForm')
    .addEventListener('reset', function () {
        setTimeout(handleFilter, 0);
    });

// Render list item on page load
handleFilter();
