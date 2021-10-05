/* eslint-disable react/prop-types */
import React from 'react';
import { signOut } from '../../actions/auth';
import { connect, useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

const SignIn = (props) => {
  

  const logedInUser = useSelector((state) => state.loginReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('efekt');
    if(logedInUser == null){
      props.history.push('/');
    }
  }, [logedInUser]);

  const onClick = (event) => {
    event.preventDefault();
    dispatch(signOut(props));
  };

  return (
    <div>
      <h1>Zalogowano</h1>
      <button className="btn btn-outline-dark" onClick={onClick}>
        Powrót
      </button>
    </div>
  );
};


export default SignIn;

// const mapStateToProps = state => {   
//   console.log('state', state)
//   return {
//     logedInUser: state.loginReducer.user
//   };
// };
 
// const mapDispatchToProps = dispatch => ({
//   logOut: () => dispatch(signOut()),
// });
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn)