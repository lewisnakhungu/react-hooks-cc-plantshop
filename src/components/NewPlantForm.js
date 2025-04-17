import React, {useState} from "react";

function NewPlantForm ({setPlants}) {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });


function handleChange(e) {
  const {name, value } = e.target;
  setFormData ({...formData, [name]: value});
}

function handleSubmit (e) {
  e.preventDefault();
  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: {"Content-Type" : "Application/JSON"},
      body: JSON.stringify(formData)
    
  })
  .then((response) => response.json())
  .then((newPlant) => setPlants((prevPlants) => [...prevPlants, newPlant]));
}

return(
  <div className="new-plant-form">
    <h2>New Plant</h2>
    <form onSubmit={handleSubmit}>
    <input type = "text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>
    <input type="text"  name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
    <input
      type="number"
      name="price"
      placeholder="Price"
      value={formData.price}
      onChange={handleChange}
    />

    <button type="submit">Add Plant</button>
    
    </form> 
  </div>
)
}

export default  NewPlantForm;