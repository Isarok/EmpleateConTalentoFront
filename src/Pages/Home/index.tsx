import Nav from "../../components/Nav";
import Banner from "../../components/Banner";
import backgroundImage from "../../assets/BackgroundImg.jpeg"; 
// import Games from "../../components/GameCategories"

const Home = () => {
  return (
    <main
      className="w-full h-auto"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <Nav />
      <div className="p-20 w-full h-auto"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}>
        <div className="max-w-screen-xl mx-auto">
          <Banner />
          {/* <Games /> */}
        </div>
      </div>
    </main>
  );
};

export default Home;