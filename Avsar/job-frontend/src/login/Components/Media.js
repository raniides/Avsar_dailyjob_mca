import React from 'react';

class Media extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobAdvertisements: [
        { id: 1, title: 'Construction Worker Needed', description: 'A construction of shopping mall at Panjim ', wage: 'Rs. 800 per day', contact: '+91 9876543210', image: require('./images/contruction.jpg').default },
        { id: 2, title: 'Landscaping Laborer Wanted', description: 'Worker needed for clearing the landscape at Chorla Ghat.', wage: 'Rs. 1000 per day', contact: '+91 9876543211', image: require('./images/landscaping.jpg').default },
        { id: 3, title: 'Warehouse Associate Position Available', description: 'A warehouse storage require for managing the stocks and maintaining the store.', wage: 'Rs. 14000 per month', contact: '+91 9876543212', image: require('./images/warehouse.jpg').default },
        { id: 4, title: 'Delivery Driver Required', description: 'Food delivery driver required for delivering food in and around Vasco.', wage: 'Rs. 20 per delivery + Rs. 700 per day', contact: '+91 9876543213', image: require('./images/delivery.jpg').default },
        { id: 5, title: 'Janitorial Staff Needed', description: 'Worker required for sweeping floor at the GMC, Bambolim Hospital.', wage: 'Rs. 900 per day', contact: '+91 9876543214', image: require('./images/janitorial.jpg').default },
        { id: 6, title: 'Farm Worker Position Available', description: 'Farm worker required to plough 2 hectare area at Candolim.', wage: 'Rs. 150 per hour', contact: '+91 9876543215', image: require('./images/farm.jpg').default },
      ]
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <h1 className="mb-4">Job Advertisements in Avsar</h1>
        <div className="row">
          {this.state.jobAdvertisements.map(job => (
            <div className="col-md-4 mb-4" key={job.id}>
              <div className="card">
                <img src={job.image} className="card-img-top" alt={job.title} />
                <div className="card-body">
                  <h5 className="card-title">{job.title}</h5>
                  <p className="card-text">{job.description}</p>
                  <p className="card-text"><strong>Wage:</strong> {job.wage}</p>
                  <p className="card-text"><strong>Contact:</strong> {job.contact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Media;
