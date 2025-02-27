
const apiKey = "86555c9f35684ace8c4f6d4e5332fa21"; 
const host = 'https://api.spoonacular.com';

export const request = async (query:string, cuisine:string, maxReadyTime:string) => {
      const url = `${host}/recipes/complexSearch?apiKey=${apiKey}&query=${query}&cuisine=${cuisine}&maxReadyTime=${maxReadyTime}`;;
      try {
        const res = await fetch(url);
        if (!res.ok) {
          return { recipes: []  }; 
        }
        const data = await res.json();
        return { recipes: data.results || [] };
      } 
       catch (error) {
        console.error(error);
        return {  recipes: [], error: true };
      }
};

export const idRequest = async (id:string) => {
  const url = `${host}/recipes/${id}/information?apiKey=${apiKey}`
  try {
    const res = await fetch(url);
    if (!res.ok) {
      return { information: null  }; 
    }
    const data = await res.json();
    return { information: data || null };
  }
   catch (error) {
    console.error(error);
    return {  information: null, error: true };
  }
}
