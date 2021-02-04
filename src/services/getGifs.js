const apiKey = 'dSgcSo7ecFdPA1YXGOUl9X5P4boSmj4y'
const max = 10

export default function getGifs({keyword = 'trending'}={}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${max}&offset=0&rating=g&lang=en`

    return fetch(apiURL)
        .then(res => res.json())
        .then(response=>{
            const {data} = response
            if(Array.isArray(data)){
                const gifs = data.map(image => {
                const {images,title,id} = image
                const {url} = images.fixed_height
                return {title,url,id}    
                })
            return gifs
            }
            
        })
}



