import React from 'react';
import './HeaderContent';
import './Header.css';
import HeaderContent from './HeaderContent';
import ImageThumbnail from './ImageThumbnail';
import HeaderTitle from './HeaderTitle';

const HeaderContainer = () => {
  return (
    <div>
      <HeaderContent />
      <ImageThumbnail />
      <HeaderTitle />
    </div>
  )
}
export default HeaderContainer;