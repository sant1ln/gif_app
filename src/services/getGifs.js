const apiKey = 'dSgcSo7ecFdPA1YXGOUl9X5P4boSmj4y'


export default function getGifs({keyword = 'panic'}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=5&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response=>{
            const {data} = response
            if(Array.isArray(data)){
                const gifs = data.map(image => {
                const {images,title,id} = image
                const {url} = images.downsized_medium
                return {title,url,id}    
                })
            return gifs
            }
            
        })
}
