import ClientComponent from "./client-component";
import ServerComponent from "./server-component";

const About = () => {
  return (
    <div className="page">
      <h1>About</h1>

      <ClientComponent>
        <ServerComponent />
      </ClientComponent>

      {/* TODO: Server Client iç içe kullanım */}
    </div>
  );
};

export default About;
