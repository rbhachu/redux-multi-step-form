import React from 'react';
import { useSelector } from 'react-redux'
import LazyLoad from 'react-lazyload'; // use lazyload for components and image
import FormUserSignup from '../../components/form-signup'; // load component
import FormUserPrivacy from '../../components/form-privacy'; // load component
import FormUserCompleted from '../../components/form-completed'; // load component
import './styles.scss';

const Signup = () => {

  const pageStage = useSelector(state => state.FormStage)
  //const stateAll = useSelector(state => state)
  //console.log(`output: ${JSON.stringify(stateAll, null, 2)}`) // output results to console.log

  return (

    <main>
      <div className="form-wrapper">

        <h1 data-testid="Signup-Title" className="text-center">Signup Form</h1>
        
        <section>
          
          {/* When adding/removing components, update the progress bar below */}
          <LazyLoad once>
            <div className="progressbar">
              <div className={pageStage===1 ? 'progress-step progress-step-active' : 'progress-step'} data-title="User"></div>
              <div className={pageStage===2 ? 'progress-step progress-step-active' : 'progress-step'} data-title="Privacy"></div>
              <div className={pageStage===3 ? 'progress-step progress-step-active' : 'progress-step'} data-title="Done"></div>
            </div>
          </LazyLoad>

          <div className="page-wrapper">
            
            {(pageStage === 1) && 
              // Signup Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserSignup 
                    pageTitle={'User Form:'} // form page stage title
                    submitButtonText={'Next'} // submit next button display text
                    previousButton={false} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            }

            {(pageStage === 2) && 
              // Privacy Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserPrivacy
                    pageTitle={'Privacy Form:'} // form page stage title
                    submitButtonText={'Next'} // submit next button display text
                    previousButton={true} // show/hide previous button
                  />
                </div>
              </LazyLoad>
            }

            {(pageStage === 3) && 
              // Completion Page
              <LazyLoad once>
                <div className="wrap">
                  <FormUserCompleted 
                    pageTitle={'Success!'} // form page stage title
                    successMessage={'Please verify your email address, you should have recieved an email from us already!'} // page success message
                  />
                </div>
              </LazyLoad>
            }

          </div>

        </section>
      </div>
    </main>

  );

};

export default Signup;
