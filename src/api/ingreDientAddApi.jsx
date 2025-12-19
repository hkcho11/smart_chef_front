const BASE_URL = "http://localhost:8000/api/fridge/ingredients";

export async function createIngredient(payload) {
   const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error("재료 생성 실패");
  }

  return res.json();
}

export async function deleteIngredient(ingredientId) {
  const res = await fetch(`${BASE_URL}/${ingredientId}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    throw new Error("재료 삭제 실패");
  }

  return res.json();
}