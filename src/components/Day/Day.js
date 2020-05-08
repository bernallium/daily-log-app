import React from 'react';
import './Day.css'

const Day = () => {
  return (
    <div className='day'>
      <div className='day-header'>
        <h2 className='dd'>dd</h2>
        <div className='day-month-container'>
          <h3 className='day-of-week'>dayOfWeek</h3>
          <h3 className='month'>May</h3>
        </div>
      </div>
        <hr/>
        <p contentEditable='true'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Sagittis nisl rhoncus mattis rhoncus urna neque. Nisl purus in mollis nunc. Quam pellentesque nec nam aliquam sem et tortor consequat. Hendrerit gravida rutrum quisque non tellus orci. Platea dictumst quisque sagittis purus sit amet volutpat consequat. Cras sed felis eget velit aliquet sagittis id consectetur. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Tortor dignissim convallis aenean et. Praesent elementum facilisis leo vel fringilla est. Viverra mauris in aliquam sem. In dictum non consectetur a. Nunc sed augue lacus viverra vitae congue eu. Aenean sed adipiscing diam donec. Odio ut enim blandit volutpat maecenas volutpat blandit aliquam. Laoreet suspendisse interdum consectetur libero id faucibus. Ipsum faucibus vitae aliquet nec ullamcorper. Neque egestas congue quisque egestas. Et ultrices neque ornare aenean euismod elementum nisi quis.</p>
        <div className='add-content'>+ Add content</div>
    </div>
  );
}

export default Day;