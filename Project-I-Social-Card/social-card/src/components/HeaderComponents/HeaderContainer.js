import React from 'react';
import './HeaderContent';
import './Header.css';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
  return (
    <div className = "main-container">
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  )
}
export default HeaderContainer;