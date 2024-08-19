function redirectToGreeting() {
    const name = document.getElementById('name').value;
    const relation = document.querySelector('input[name="relation"]:checked');

    if (name === '' || !relation) {
        alert('Please enter your name and select your relation.');
        return;
    }

    const relationValue = relation.value;
    const url = `greeting.html?name=${encodeURIComponent(name)}&relation=${encodeURIComponent(relationValue)}`;
    
    window.location.href = url;
}
