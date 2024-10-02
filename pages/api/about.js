import Navbar from "@/components/Navbar";

export const getServerSideProps = async () => {
  // You can fetch data or do other server-side logic here.
  return {
    props: {}, // Pass fetched data as props if needed.
  };
};

const About = () => {
  return (
    <div>
      <Navbar />
      <div className="about">
        <h1>
          Hello, this is Arshpreet Singh's Website. Next.js is a great framework
          to work with.
        </h1>
      </div>
    </div>
  );
};

export default About;
