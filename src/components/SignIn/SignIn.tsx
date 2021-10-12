/* eslint-disable react/prop-types */
import * as React from 'react';
import { signOut } from '../../actions/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { AppState } from '../../interfaces/AppState';

const SignIn = (props: any) => {

  const logedInUser = useSelector((state: AppState) => state.loginReducer.user);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('efekt');
    if(logedInUser == null){
      props.history.push('/');
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [logedInUser]);

  const onClick = (event: any) => {
    event.preventDefault();
    dispatch(signOut());
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