import CIcon from '../../../Assets/Components/CIcon';
import React from 'react';
import backgroundImage from '../../../Assets/Images/bgActivate.png';

export default function UserRestriced() {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImage})` }}
      className="background403"
    >
      <div style={{ fontWeight: 'bold', fontSize: '60px' }}>
        <CIcon type="WarningFilled" style={{ marginRight: '5px' }} />
        403
      </div>
      <div style={{ fontWeight: 'bold', fontSize: '60px' }}>We Are Sorry</div>
      <p style={{ fontSize: '20px' }}>
        The Page you`re trying to access has restriced assess <br />
        Please refer to your administrator
      </p>
    </div>
  );
}
