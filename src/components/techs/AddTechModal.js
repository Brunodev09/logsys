import React, { useState, useEffect } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const AddTechModal = ({ current, updateLog }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const onSubmit = () => {
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and last name.' });
    } else {
        console.log(firstName, lastName);
      };

      M.toast({ html: `Tech added.` });

      setFirstName('');
      setLastName('');
    }


  return (
        <div id='tech-modal' className='modal'>
            <div className='modal-content'>
                <h4>New tech</h4>
                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='firstName'
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor='firstName' className='active'>
                            First Name
                </label>
                    </div>
                </div>

                <div className='row'>
                    <div className='input-field'>
                        <input
                            type='text'
                            name='lastName'
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor='lastName' className='active'>
                            Last Name
                </label>
                    </div>
                </div>

            </div>
            <div className='modal-footer'>
                <a
                    href='#!'
                    onClick={onSubmit}
                    className='modal-close waves-effect blue waves-light btn'
                >
                    Enter
            </a>
            </div>
        </div>
    );
};

export default AddTechModal;