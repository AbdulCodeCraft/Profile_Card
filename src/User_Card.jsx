const UserData = [
  {
    name : "Abdul Rahman",
    city : "Ramanathapuram,",
    role : "Front-end Developer",
    profile : "public/new.jpeg",
    online : true,
    skills : ["HTML","CSS","Javascript","ReactJS"],
  },
  {
    name : "Darvin Kumar",
    city : "Chennai",
    role : "Back-end Developer",
    profile : "public/new2.jpg",
    online : false,
    skills : ["HTML","CSS","Javascript","ReactJS"],
  },
 
 
]
function User(props){
  
   return <div className="card_container">
    <span className={props.online? "pro online" : "pro offline"}>{props.online?"ONLINE" : "OFFLINE"}</span>
    <img src={props.profile}  />
    <h3>{props.name}</h3>
    <h2>{props.city}</h2>
    <h2>{props.role}</h2>
    <div>
      <button>Message</button>
      <button>Follow</button>
    </div>
    <ul>
    {props.skills.map((skill,index)=>(
      <li key={index}>{skill}</li>
    ))}
    </ul>

   </div>;
}
export const User_Card = () => {
  return (
    // <div>
    //   <User 
    //   name = "Abdul Rahman"
    //   city = "Ramanathapuram"
    //   role = "Frontend Developer"
    //   online = {true}
    //   profile = "public/new.jpeg"
    //   skills={["HTML","CSS","Javascript","ReactJS"]}
    //   />
    // </div>
   
    
    <>
      {UserData.map((user, index) => (
        <User
          key={index}
          name={user.name}
          city={user.city}
          role={user.role}
          profile={user.profile}
          online={user.online}
          skills={user.skills}
        />
      ))}
    </>
  );
};

