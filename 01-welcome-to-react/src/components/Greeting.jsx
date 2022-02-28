
const Greeting = ({ name, position='developer', yearsOld }) => {
  return (
    <>
      <h1>Hello {name}</h1>
      <p>You are an incredible {position}</p>
      <p>And you are {yearsOld < 18 ? "young" : "old"}</p>
    </>
  );
}

export default Greeting;