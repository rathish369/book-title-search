import React, { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [filter, setFilter] = useState("title"); // title | author
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchBooks = async () => {
    if (!query.trim()) return;
    setLoading(true);
    setError("");
    setBooks([]);

    let apiUrl = "";
    if (filter === "title") {
      apiUrl = `https://openlibrary.org/search.json?title=${query}`;
    } else if (filter === "author") {
      apiUrl = `https://openlibrary.org/search.json?author=${query}`;
    }

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setBooks(data.docs || []);
    } catch (err) {
      setError("Failed to fetch books. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") searchBooks();
  };

  return (
    <div className="app">
      <header>
        <h1>📚 Book Search App</h1>
      </header>

      {/* 🔍 Filter + Search bar side by side */}
      <div className="search-container">
        <select
          className="filter-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
        </select>

        <input
          type="text"
          placeholder={`Search by ${filter}...`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {/* 📚 Book Results */}
      <div className="book-list">
        {books.length > 0 ? (
          books.slice(0, 20).map((book, index) => {
            const coverUrl = book.cover_i
              ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
              : "https://via.placeholder.com/150x200?text=No+Cover";

            return (
              <div key={index} className="book-card">
                <img
                  src={coverUrl}
                  alt={book.title}
                  className="book-cover"
                />
                <div className="book-info">
                  <h3>{book.title}</h3>
                  <p>
                    <strong>Author:</strong>{" "}
                    {book.author_name ? book.author_name.join(", ") : "Unknown"}
                  </p>
                  <p>
                    <strong>First Published:</strong>{" "}
                    {book.first_publish_year || "N/A"}
                  </p>
                </div>
              </div>
            );
          })
        ) : (
          !loading &&
          !error && <p>Start searching for books by title or author!</p>
        )}
      </div>

      {/* 📌 Footer */}
      <footer className="footer">
        <p>
          © {new Date().getFullYear()} Book Search App | Powered by{" "}
          <a href="https://openlibrary.org/" target="_blank" rel="noreferrer">
            Open Library API
          </a>
        </p>
        <p className="footer-small">
          Built with ❤️ using React by <strong>rathish</strong>
        </p>
      </footer>
    </div>
  );
}

export default App;
