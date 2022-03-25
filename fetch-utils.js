const SUPABASE_URL = "https://ssxakkpfbjzvrgocpuuc.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNzeGFra3BmYmp6dnJnb2NwdXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQzNDE0NTIsImV4cCI6MTk1OTkxNzQ1Mn0.lfoPNYViTUBekcr17yp0PjI0LrIHRsj2vIqdfVvJuRM";

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

function checkError({ data, error }) {
  return error ? console.error(error) : data;
}

export async function getMovies() {
  // return the list of all movies
  const resp = await client.from("movies").select("*");
  return checkError(resp);
  // console.log(resp);
}

export async function getMoviesWithDirector() {
  // return the list of all the movies with their director
  const resp = await client.from("movies").select("*, directors(*)");
  return checkError(resp);
}

export async function getDirectorNames() {
  // return the list of the director's names
  const resp = await client.from("directors").select("name");
  return checkError(resp);
}

export async function getMovieById(id) {
  // return the movie with the given id
  const resp = await client.from("movies").select("*").eq("id", id).single();
  return checkError(resp);
}

export async function getMovieByTitle(title) {
  // return the movie with the given title
  const resp = await client
    .from("movies")
    .select("*")
    .eq("title", title)
    .single();
  return checkError(resp);
}

export async function getOldestMovie() {
  // return the oldest movie (assume the database is not sorted)
  const resp = await client
    .from("movies")
    .select("*")
    .order("year")
    .limit(1)
    .single();
  return checkError(resp);
}

export async function getMoviesAfter(year) {
  // return movies made after the year passed in
}

export async function getHighestGrossingMovie() {
  // return movie with the highest box office total
}
