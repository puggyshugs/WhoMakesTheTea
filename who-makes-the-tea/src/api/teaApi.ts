const API_BASE_URL = "http://localhost:5027";

export async function getAllParticipants() {
  const res = await fetch(`${API_BASE_URL}/api/participant/getAll`);
  if (!res.ok) throw new Error("Failed to fetch participants");
  return res.json();
}

export async function getParticipant(name: string) {
  const res = await fetch(`${API_BASE_URL}/api/participant/get/${encodeURIComponent(name)}`);
  if (!res.ok) throw new Error("Failed to fetch participant");
  return res.json();
}

export async function createParticipant(name: string) {
  const res = await fetch(`${API_BASE_URL}/api/participant/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(name)
  });
  if (!res.ok) throw new Error("Failed to create participant");
  return res.text();
}

export async function createParticipants(names: string[]) {
  const res = await fetch(`${API_BASE_URL}/api/participant/createMultiple`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(names)
  });
  if (!res.ok) throw new Error("Failed to create participants");
  return res.text();
}

export async function selectParticipant() {
  const res = await fetch(`${API_BASE_URL}/api/selection/select`, {
    method: "GET"
  });
  if (!res.ok) throw new Error("Failed to select participant");
  return res.text();
}