import axios from "axios";

const searchImages = async(term) =>{
    const url = 'https://api.unsplash.com/search/photos/?client_id=BYOYxOgjS8V07Wt1hob5mtZfjeFeK_yNwGA6pppqzno'

    const response = await axios.get(url, {
        params:{
            query: term
        }
    })

    console.log(response)
    return response.data.results
}

export default searchImages