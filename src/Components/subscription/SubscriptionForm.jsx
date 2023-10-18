import React, { useState } from 'react';
import Nav from "../navbar/Nav";

function SubscriptionForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    membershipType: 'monthly',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoyez les données du formulaire au serveur ou effectuez toute autre action nécessaire ici.
    console.log(formData);
  };

  return (
    <>
    <Nav/>
    <br />
        <br />
        <br />
        <br />
        <div className="container my-2">
      <h1 className="text-center">Formulaire d'abonnement à la salle de sport</h1>
      <div>
      <br />
     <div className="container">
     <div className="card col-md-6 offset-md-3 offset-md-3">
     <div className="card-body">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Prénom</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Nom de famille</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label>Type d'abonnement</label>
          <select
            name="membershipType"
            value={formData.membershipType}
            onChange={handleInputChange}
          >
            <option value="monthly">Mensuel</option>
            <option value="annual">Annuel</option>
          </select>
        </div>
        <button type="submit">S'abonner</button>
      </form>
    </div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}

export default SubscriptionForm;
