// Your code here
document.addEventListener('DOMContentLoaded', function () {
    // Make a GET request to fetch movie data
    fetch('db.json')
      .then(response => response.json())
      .then(data => {
        // Assuming the first movie is at index 0
        const movie = data[0];
        
        // Extract movie details
        const poster = movie.poster;
        const title = movie.title;
        const runtime = movie.runtime;
        const showtime = movie.showtime;
        const capacity = movie.theater_capacity;
        const ticketsSold = movie.tickets_sold;
        
        // Calculate available tickets
        const availableTickets = capacity - ticketsSold;
        
        // Display movie details
        document.getElementById('poster').src = poster;
        document.getElementById('title').textContent = title;
        document.getElementById('runtime').textContent = runtime;  {runtime} minutes;
        document.getElementById('showtime').textContent = showtime; {showtime};
        document.getElementById('available-tickets').textContent = Available ;tickets; {availableTickets};
      })
      .catch(error => console.error('Error fetching movie data:', error));
  });

  document.addEventListener("DOMContentLoaded", function() {
    const filmsList = document.getElementById("films");
  
    // Function to fetch movie data
    async function fetchMovieData() {
      try {
        const response = await fetch("db.json"); // Replace "db.json" with the actual endpoint
        const data = await response.json();
        return data;
      } catch (error) {
        console.error("Error fetching movie data:", error);
        return [];
      }
    }
  
    // Function to populate the films list
    function populateFilmsList(films) {
      filmsList.innerHTML = ''; // Clear existing content
      films.forEach(film => {
        const li = document.createElement("li");
        li.textContent = film.title;
        li.classList.add("film", "item"); // Add classes for styling
        filmsList.appendChild(li);
      });
    }
  
    // Fetch movie data and populate the list when the page loads
    fetchMovieData()
      .then(films => {
        // Remove placeholder li element
        const placeholder = document.querySelector("#films > .placeholder");
        if (placeholder) {
          placeholder.remove();
        }
        // Populate the films list
        populateFilmsList(films);
      })
      .catch(error => {
        console.error("Error:", error);
      });
  });


//   <script>
//     document.addEventListener("DOMContentLoaded", function() {
//       // Function to make a GET request
//       function fetchData(url, callback) {
//         var xhr = new XMLHttpRequest();
//         xhr.onreadystatechange = function() {
//           if (xhr.readyState === XMLHttpRequest.DONE) {
//             if (xhr.status === 200) {
//               callback(null, JSON.parse(xhr.responseText));
//             } else {
//               callback(new Error("Failed to fetch data"));
//             }
//           }
//         };
//         xhr.open("GET", url);
//         xhr.send();
//       }

//       // Function to populate the film list
//       function populateFilmList(data) {
//         var filmsContainer = document.getElementById("films");
//         data.forEach(function(film) {
//           var li = document.createElement("li");
//           li.textContent = film.title;
//           li.classList.add("film-item"); // Optional: Add the 'film-item' class
//           filmsContainer.appendChild(li);
//         });
//       }

//       // Make GET request to retrieve film data
//       fetchData("endpoint_url", function(error, data) {
//         if (error) {
//           console.error(error);
//         } else {
//           // Remove placeholder li element if it exists
//           var placeholder = document.querySelector("#films > li");
//           if (placeholder) {
//             placeholder.remove();
//           }
//           // Populate the film list
//           populateFilmList(data);
//         }
//       });
//     });
//     <ul id="films">
//     <!-- Placeholder li element -->
//     <li class="placeholder">Loading...</li>
//   </ul>
//   </script>