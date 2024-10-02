import Navbar from "@/components/Navbar";

export const getServerSideProps = async () => {
  // You can fetch data or do other server-side logic here.
  return {
    props: {}, // Pass fetched data as props if needed.
  };
};

const skills = () => {
  return (
    <div>
      <Navbar />
      <div className="skills">
        <h1>Languages: Java, JavaScript, HTML/ CSS, DSA, SQL</h1>
        <h1>
          Frameworks/Libraries: Java, JavaScript, HTML/ CSS, DSA, SQL React.js,
          Tailwind, Bootstrap, MERN Stack, SpringBoot
        </h1>
        <h1>Cloud/Databases: MySQL, MongoDB, PostgresSQL</h1>
        <h1>Utilities: VS Code, Git, GitHub, Intellij, ChatGPT</h1>
        <h1>Soft Skills: Problem Solving, Effective Communication</h1>
      </div>
    </div>
  );
};

export default skills;
