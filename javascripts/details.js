const params = new URLSearchParams(window.location.search);
const postId = params.get("id");

//Fetching details of single post.
fetch(`http://localhost:5000/api/posts/${postId}`)
  .then((response) => response.json())
  .then((post) => {
    const detailsContainer = document.getElementById("details-container");

    detailsContainer.innerHTML = `
      <img src="${post.img_URL}" alt="${post.title}" class="w-full h-[34rem] object-cover mb-6 rounded-lg" />
      <h1 class="text-3xl font-bold mb-4">${post.title}</h1>
      <p class="text-gray-300 mb-4">${post.content}</p>
      <p class="text-gray-400 text-sm">Date: ${post.created_at}</p>
    `;
  })
  .catch((error) => console.error("Error fetching post details:", error));
