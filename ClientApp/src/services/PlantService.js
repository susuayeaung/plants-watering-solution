export async function getAllPlants() {

    const response = await fetch('/api/plants');
    return await response.json();
}

export async function createPlant(data) {
    const response = await fetch(`/api/plant`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
      })
    return await response.json();
}