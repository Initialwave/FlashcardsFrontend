

function fetcher () {
  return fetch("http://localhost:8080/questions/getAll")
    .then(r => r.json())
}

export default fetcher;