//Fetching post data
fetch("http://localhost:5000/api/posts")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Something Went Wrong");
    }
    return response.json();
  })
  .then((posts) => {
    const blogContainer = document.getElementById("blog-container");

    //Showing error if no post available in database
    if (posts.length === 0) {
      blogContainer.innerHTML = `<p class="text-white">No posts available yet.</p>`;
      return;
    }
    const blogCards = posts
      .map((post) => {
        return `
          <div class="bg-gray-800 text-white max-w-sm rounded-lg shadow-md border border-gray-700 overflow-hidden transform transition duration-200 hover:scale-105"data-id="${
            post.id
          }">
            <img src="${post.img_URL}" alt="${
          post.title
        }" class="w-full h-60 object-cover" />
            <div class="p-5">
              <h1 class="text-2xl font-semibold mb-2">${post.title}</h1>
              <p class="text-gray-300 mb-4">${post.content.slice(0, 30)}...</p>
              <p class="text-gray-400 text-sm">Date: ${post.created_at}</p>
            </div>
          </div>
        `;
      })
      .join("");

    blogContainer.innerHTML = blogCards;

    const blogCardsElements = blogContainer.querySelectorAll(".bg-gray-800");
    blogCardsElements.forEach((card) => {
      card.addEventListener("click", () => {
        const postId = card.getAttribute("data-id");
        window.location.href = `views/details.html?id=${postId}`;
      });
    });
  })
  //Showing error if not connected to database or connection lost
  .catch((error) => {
    console.error("Error Fetching Posts", error);
    const errorContainer = document.getElementById("error-container");
    errorContainer.innerHTML = `<div class="flex justify-center items-center"><p class="text-red-500">Something Went Wrong. Please try again later.</p></div>`;
  });
