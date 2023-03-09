

async function fetcher () {
  const r = await fetch("http://localhost:8080/questions/getAll");
  return await r.json();
}

export default fetcher;