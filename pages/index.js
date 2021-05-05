import Heading from "../components/meta/heading";

function Home(){

  return(
    <div>
      <Heading />
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        textAlign: "center"
      }}>
        <img src="https://i.pinimg.com/originals/63/f3/10/63f310075497906d8be02552eaeab810.gif" />
        <h1>PAGE UNDER CONSTRUCTION</h1>
      </div>
    </div>
  )
}

export default Home;