document.getElementById("searchBox").addEventListener("keydown", function(e) {
  if (e.key === "Enter") {
    const query = e.target.value;
    window.location.href = "https://www.bing.com/search?q=" + encodeURIComponent(query);
  }
});
