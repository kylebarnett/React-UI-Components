import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent'
import moment from 'moment';

const time = moment()
const HeaderTitle = () => {
  return (
    <div className="header-title-container">
      <div className="header-title">
        <h3>Lambda School</h3>
        <h2>@LambdaSchool</h2>
        <div className="time">{time.format('MMM Do ')}
        </div>
      </div>
      <HeaderContent />
    </div>
  )
}

export default HeaderTitle