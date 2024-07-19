import './App.css'
import { useQuery, gql } from '@apollo/client';


function App() {

  const GET_LOCATIONS = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }`;

  interface Location {
    id: number;
    name: string;
    description: string;
    photo: string;
  }
  
  interface Data {
    locations: Location[];
  }

  const RenderLocations = (data: Data) => {
    return data.locations.map(({ id, name, description, photo }) => (
      <div key={id}>
        <h3>{name}</h3>
        <img width="400" height="250" alt="location-reference" src={`${photo}`} />
        <br />
        <b>About this location:</b>
        <p>{description}</p>
        <br />
      </div>
    ));
  }

  function DisplayLocations() {
    const { loading, error, data } = useQuery(GET_LOCATIONS);
  
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
  
    return RenderLocations(data)
  }
  
  return (
    <div>
      <h2>My first Apollo app 🚀</h2>
      <br/>
      <DisplayLocations />
    </div>
  )
}

export default App
