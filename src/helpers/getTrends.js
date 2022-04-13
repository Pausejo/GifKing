export const getTrends = async() => {
    const apiKey = "tsFR42BWJYsZUsGgZuMhCkzA2DFzIwUA";
    const url = `https://api.giphy.com/v1/trending/searches?api_key=${apiKey}`;
    
    const result = await fetch(url);

    const {data:trends} = await result.json();

    return trends;
}