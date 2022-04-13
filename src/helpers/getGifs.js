export const getGifs = async(category) => {
    const apiKey = "tsFR42BWJYsZUsGgZuMhCkzA2DFzIwUA";
    const limit = 5;
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=${limit}&api_key=${apiKey}`;

    const result = await fetch(url);

    const {data} = await result.json();

    const gifs = data.map(img =>{
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })

    return gifs;
}