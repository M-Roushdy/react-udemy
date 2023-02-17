import axios from "axios";

const searchImages = async(term)=>{
    const resopnse = await axios.get('https://api.unsplash.com/search/photos', {
        headers:{
            Authorization: 'Client-ID WNL0XGFSvKNiWGEBo0f4A82bf5ycN2qJ03M2WZ0q8eI',
        },
        params:{
            query: term,
        },
    });
    return resopnse.data.results
}


export default searchImages;