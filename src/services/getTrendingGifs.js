

export const getTrendingGifs = () =>{

  const apiURL =  `https://api.giphy.com/v1/gifs/trending?api_key=dSgcSo7ecFdPA1YXGOUl9X5P4boSmj4y&limit=10&rating=g`

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