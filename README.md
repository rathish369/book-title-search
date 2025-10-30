# book-title-search
using titles and book names we can find book online used react and js css
1. Imports=>React: Library for UI building. - useState: Hook for managing state. - Bootstrap: For styling and
responsive design. - App.css: Custom styling file.
2. useState Hooks=>query: Stores the user input. - books: Stores book data from API. - loading: Shows spinner when
loading. - searchType: Search filter (title, author,)
3. searchBooks Function=> Checks if input is empty. - Fetches data from Open Library API. - Converts data to JSON. -
Updates 'books' state. - Stops spinner after loading.

 4. Search Section=>Includes dropdown (type), input box, and Search button.
  
 5. Books Display Section=> Loops through book list and displays: • Cover image • Title and author • Link to Open Library page
6. Footer=>
Dark bar at the bottom with © 2025 Book Finder text.
  7. CSS Styling=>- Ensures full height layout. - Fixes footer at bottom. - Adds padding and background color.
result=>
Built with React + css Uses Open Library API ■ Features: Search, Spinner, Cards,
Sticky Foote
