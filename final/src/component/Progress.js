import React from 'react';
import { Link, withRouter } from 'react-router-dom';

const Progress = ({ location: { pathname } }) => {
  const isFirstStep = pathname === '/';
  const isSecondStep = pathname === '/second';
  const isThirdStep = pathname === '/third';
  const isFourthStep = pathname === '/fourth'; 
  const isLoginPage = pathname === '/login';

  return (
    <React.Fragment>
      {/* <div className="account-home-btn d-none d-sm-block">
           <Link to="/Deals" className="text-primary"><i className="mdi mdi-home h1"></i></Link>
                    </div> */}
      {!isLoginPage ? (
        <div className="steps">
          <div className={`${isFirstStep ? 'step active' : 'step'}`}>
            <div>1</div>
            <div>
              {isSecondStep || isThirdStep || isFourthStep ? (
                <Link to="/">Register</Link>
              ) : (
                'Register'
              )}
            </div>
          </div>
          <div className={`${isSecondStep ? 'step active' : 'step'}`}>
            <div>2</div>
            <div>
              {isFourthStep || isThirdStep ? <Link to="/second">Details</Link> : 'Details'}
            </div>
          </div>
          {/* <div className={`${isFourthStep ? 'step active' : 'step'}`}>
            <div>3</div>
            <div>
              {isThirdStep ? <Link to="/fourth">Step 3</Link> : 'Step 3'}
            </div>
          </div> */}
          <div className={`${pathname === '/third' ? 'step active' : 'step'}`}>
            <div>3</div>
            <div>Declaration</div>
          </div>
        </div>
      ) : (
        <div>
        </div>
      )}
    </React.Fragment>
  );
};

export default withRouter(Progress);
