const UserProfile = (props) => {
   return (
     <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
       <h2>
        <span style={{ color: 'blue' }}>{props.name}</span>
        </h2>
       <p>
        Age: <span style={{ fontWeight: 'bold'}}>{props.age}}</span>
        </p>
       <p>Bio: {props.bio}</p>
     </div>
   );
 };

 export default UserProfile;