function filterByLength(data) {
    const input = document.getElementById('input-id');
    const result = data.filter(el => el.length > input.value);
    input.value = '';

    display(result, 'display')
}

function findSubstring(data) {
    const input = document.getElementById('input-id');
    const checkbox = document.getElementById('checkbox').checked;

    const result = data.filter(el => checkbox
        ? el.includes(input.value)
        : el.toLowerCase().includes(input.value.toLowerCase())
    );

    display(result, 'display')

    input.value = '';
}

function display(arr, domElement) {
    let result = arr.join(', ')
    document.getElementById(domElement).textContent = result
}

document.getElementById('btn-filter').addEventListener("click", () => {
    getData()
        .then(filterByLength)
});
document.getElementById('btn-find').addEventListener("click", () => {
    getData()
        .then(findSubstring)
});

