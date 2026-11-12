// Danh sách sản phẩm
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

// Hàm render danh sách
function renderList(filteredItems) {
    const list = document.getElementById('itemList');
    list.innerHTML = '';

    if (filteredItems.length === 0) {
        list.innerHTML = '<li>Không có sản phẩm phù hợp.</li>';
        return;
    }

    filteredItems.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - ${item.price.toFixed(2)} USD`;
        list.appendChild(li);
    });
}

// Hàm xử lý tìm kiếm, lọc và sắp xếp
function handleFilter() {
    const searchQuery = document.getElementById('searchInput').value.trim().toLowerCase();

    const minPrice = parseFloat(document.getElementById('minPriceInput').value) || 0;

    const sortType = document.getElementById('sortSelect').value;

    // Sao chép danh sách ban đầu
    let filtered = [...items];

    // Tìm kiếm theo tên
    filtered = filtered.filter(item =>
        item.name.toLowerCase().includes(searchQuery)
    );

    // Lọc theo giá tối thiểu
    filtered = filtered.filter(item =>
        item.price >= minPrice
    );

    // Sắp xếp theo giá
    filtered.sort((a, b) => {
        if (sortType === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    // Hiển thị danh sách
    renderList(filtered);
}

// Khi nhập từ khóa hoặc giá
document.getElementById('searchInput')
    .addEventListener('input', handleFilter);

document.getElementById('minPriceInput')
    .addEventListener('input', handleFilter);

// Khi thay đổi kiểu sắp xếp
document.getElementById('sortSelect')
    .addEventListener('change', handleFilter);

// Ngăn form reload trang
document.getElementById('filterForm')
    .addEventListener('submit', function (e) {
        e.preventDefault();
        handleFilter();
    });

// Khi nhấn nút Làm mới
document.getElementById('filterForm')
    .addEventListener('reset', function () {
        setTimeout(handleFilter, 0);
    });

// Hiển thị ban đầu
handleFilter();
