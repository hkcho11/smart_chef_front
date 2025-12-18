export async function createIngredient(payload) {
  const res = await fetch(
    "http://localhost:8000/api/fridge/ingredients",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );

  return res.json();
}
