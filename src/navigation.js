searchFormBtn.addEventListener('click', () => {
  location.hash = '#search=' + searchFormInput.value;
});
trendingBtn.addEventListener('click', () => {
  location.hash = '#trends'
});

let historial = [];

arrowBtn.addEventListener("click", () => {
  historial.pop();
  if (historial.length > 0) {
    location.hash = "#search=" + historial[historial.length - 1];
  } else {
    location.hash = "#home";
  }
});

window.addEventListener('DOMContentLoaded', navigator, false)
window.addEventListener('hashchange', navigator, false)

function navigator(){
  console.log({location})

  if (location.hash.startsWith("#trends")) {
    trendsPage()
  } else if (location.hash.startsWith("#search=")) {
    searchPage()
  } else if (location.hash.startsWith("#movie=")) {
    movieDetailsPage()
  } else if (location.hash.startsWith("#category=")) {
    categoriesPage()
  }else {
    homePage()
  }

  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

function homePage(){
  console.log('Home!!')

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = '';
  arrowBtn.classList.add('inactive');
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.remove('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.remove('inactive');
  categoriesPreviewSection.classList.remove('inactive')
  genericSection.classList.add('inactive')
  movieDetailSection.classList.add('inactive')

  getTrendingMoviesPreview();
  getCategoriesPreview();
}

function categoriesPage(){
  console.log("Categories!!");

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.remove('inactive');
  searchForm.classList.add('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')
  
  const [_, categoryData] = location.hash.split('=') //['#category', 'id-name'] definir variables como en ecmascript 6
  const [cataegoryId, categoryName] = categoryData.split('-')

  headerCategoryTitle.innerHTML = categoryName;
  
  getMoviesByCategory(cataegoryId)
}

function movieDetailsPage() {
  console.log("Movie!!");

  headerSection.classList.add("header-container--long");
  // headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.add("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.add("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.add("inactive");
  movieDetailSection.classList.remove("inactive");

  const [_, movieId] = location.hash.split("="); //['#movie', 'id de la pelicula'] definir variables como en ecmascript 6

  getMoviebyId(movieId);
}

function searchPage(){
  console.log("Search!!");

  headerSection.classList.remove('header-container--long')
  headerSection.style.background = '';
  arrowBtn.classList.remove('inactive');
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add('inactive');
  headerCategoryTitle.classList.add('inactive');
  searchForm.classList.remove('inactive')

  trendingPreviewSection.classList.add('inactive');
  categoriesPreviewSection.classList.add('inactive')
  genericSection.classList.remove('inactive')
  movieDetailSection.classList.add('inactive')

  const [_, query] = location.hash.split("="); //['#search', 'buscador'] definir variables como en ecmascript 6
  
  getMoviesBySearch(query)
}

function trendsPage(){
  console.log("TRENDS!!");

  headerSection.classList.remove("header-container--long");
  headerSection.style.background = "";
  arrowBtn.classList.remove("inactive");
  arrowBtn.classList.remove("header-arrow--white");
  headerTitle.classList.add("inactive");
  headerCategoryTitle.classList.remove("inactive");
  searchForm.classList.add("inactive");

  trendingPreviewSection.classList.add("inactive");
  categoriesPreviewSection.classList.add("inactive");
  genericSection.classList.remove("inactive");
  movieDetailSection.classList.add("inactive");

  headerCategoryTitle.innerHTML = "Tendencias";
  getTrendingMovies();
}