const form = document.querySelector('#searchForm');

form.addEventListener("submit", async function(e){
e.preventDefault()  
  const searchTerm = form.elements.query.value;
  const res = await axios.get("http://api.tvmaze.com/search/shows?q=" + searchTerm) //searchTerm is the name of the var above holding the value of whatever was put into the input.
  makeImages(res.data) //This calls the function on the button press.
  
}) 

const makeImages = (shows) => {
    for (let result of shows){
        const img = document.createElement("IMG"); //Creates a new img element.
img.src= result.show.image.medium; //Sets the img src. 
document.body.append(img) //This adds the generate elements (the images) onto the page, next to whatever else is on the page. 
    }
}