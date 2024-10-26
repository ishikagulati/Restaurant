
import { data } from "../restApi.json";
import Navbar from './Navbar'
import Footer from './Footer'
const Team = () => {
  return (
    <Navbar/>
    <section className="team" id="team">
      <div className="container">
        <div className="heading_section">
          <h1 className="heading">OUR TEAM</h1>
          <p>
          Meet the culinary and tech enthusiasts who bring flavor to every dish and innovation to every order, ensuring an exceptional dining experience.
          </p>
        </div>
        <div className="team_container">
          {data[0].team.map((element) => {
            return (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.name} />
                <h3>{element.name}</h3>
                <p>{element.designation}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
    <Footer/>
    
  );
};

export default Team;
