const http = require("http");

let books = [
  { id: 1, cim: "1984", szerzo: "George Orwell", mufaj: "F", kolcsonozheto: 1 },
  { id: 2, cim: "A kis herceg", szerzo: "Antoine de Saint-Exupéry", mufaj: "G", kolcsonozheto: 1 },
  { id: 3, cim: "Sapiens", szerzo: "Yuval Noah Harari", mufaj: "T", kolcsonozheto: 0 }
];

const server = http.createServer((req, res) => {
  // CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }

  // GET könyvek
  if (req.url === "/konyvek" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(books));
  }

  // POST új könyv
  else if (req.url === "/konyv" && req.method === "POST") {
    let body = "";

    req.on("data", chunk => {
      body += chunk.toString();
    });

    req.on("end", () => {
      const newBook = JSON.parse(body);
      books.push(newBook);

      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Sikeres hozzáadás" }));
    });
  }

  else {
    res.writeHead(404);
    res.end();
  }
});

server.listen(8000, () => {
  console.log("Server fut a http://localhost:8000 címen");
});