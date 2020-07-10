import React from "react";

function FormComponent(props) {
    return (
      <main>
        <form>
          <input 
            name="firstName"
            value={props.data.firstName}
            onChange={props.data.handleChange}
            placeholder="First Name"
          />

          <br />

          <input 
            name="lastName"
            value={props.data.lastName}
            onChange={props.data.handleChange}
            placeholder="Last Name"
          />

          <br />

          <input 
            name="age"
            value={props.data.age}
            onChange={props.data.handleChange}
            placeholder="Age"
          />

          <br />

          <label>
            <input 
              type="radio"
              name="gender" 
              value="male"
              checked={props.data.gender === "male"}
              onChange={props.data.handleChange}
            /> Male
          </label>

          <br />

          <label>
            <input 
              type="radio"
              name="gender" 
              value="female"
              checked={props.data.gender === "female"}
              onChange={props.data.handleChange}
            /> Female
          </label>

          <br />

          <select 
            value={props.data.destination}
            name="destination"
            onChange={props.data.handleChange}  
          >
            <option value="">-- Please Choose a destination --</option>
            <option value="germany">Germany</option>
            <option value="norway">Norway</option>
            <option value="north pole">North Pole</option>
            <option value="south pole">South Pole</option>
          </select>

          <br />

          <label>
            <input 
              type="checkbox"
              name="isVegan"
              onChange={props.data.handleChange}
              checked={props.data.isVegan}
            /> Vegan
          </label>

          <br />

          <label>
            <input 
              type="checkbox"
              name="isKosher"
              onChange={props.data.handleChange}
              checked={props.data.isKosher}
            /> Vegan
          </label>

          <br />

          <label>
            <input 
              type="checkbox"
              name="isLactoseFree"
              onChange={props.data.handleChange}
              checked={props.data.isLactoseFree}
            /> Lactose Free
          </label>

          <br />

          <button>Submit</button>
        </form>
        <hr />
        <h2>Entered information:</h2>
        <p>Your name: {props.data.firstName} {props.data.lastName}</p>
        <p>Your age: {props.data.age}</p>
        <p>Your gender: {props.data.gender}</p>
        <p>Your destination: {props.data.destination}</p>
        <p>
          Your dietary restrictions:
          Vegan: {props.data.isVegan ? "Yes" : "No" } <br />
          Kosher: {props.data.isKosher ? "Yes" : "No" } <br />
          Lactose Free: {props.data.isLactoseFree ? "Yes" : "No" } <br />
        </p>
      </main>
    )
}

export default FormComponent;