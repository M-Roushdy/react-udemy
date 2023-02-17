import ImageSearch from "./components/ImageSearch";

const handleSubmit = (term)=>{
        console.log('lets talk', term)
}


function App(){
    return <div><ImageSearch onSubmit={handleSubmit} /></div>
}

export default App;