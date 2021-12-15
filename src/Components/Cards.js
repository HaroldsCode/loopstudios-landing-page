import React, {useState, useEffect} from 'react';

export const Cards = () => {
  const items = [
    {name: 'Deep earth', pathMobile: './images/mobile/image-deep-earth.jpg', pathDesktop: './images/desktop/image-deep-earth.jpg',},
    {name: 'Night arcade', pathMobile: './images/mobile/image-night-arcade.jpg', pathDesktop: './images/desktop/image-night-arcade.jpg',},
    {name: 'Soccer team VR', pathMobile: './images/mobile/image-soccer-team.jpg', pathDesktop: './images/desktop/image-soccer-team.jpg',},
    {name: 'The grid', pathMobile: './images/mobile/image-grid.jpg', pathDesktop: './images/desktop/image-grid.jpg',},
    {name: 'From up above VR', pathMobile: './images/mobile/image-from-above.jpg', pathDesktop: './images/desktop/image-from-above.jpg',},
    {name: 'Pocket borealis', pathMobile: './images/mobile/image-pocket-borealis.jpg', pathDesktop: './images/desktop/image-pocket-borealis.jpg',},
    {name: 'The curiosity', pathMobile: './images/mobile/image-curiosity.jpg', pathDesktop: './images/desktop/image-curiosity.jpg',},
    {name: 'Make it fisheye', pathMobile: './images/mobile/image-fisheye.jpg', pathDesktop: './images/desktop/image-fisheye.jpg',},
  ];

  const [mobile, setMobile] = useState(window.screen.width < 576)
  const [currentWidth, setCurrentWidth] = useState(window.screen.width)

  useEffect(() => {
    const validator = window.screen.width < 576;
    setMobile(current => current = validator)
  }, [currentWidth])

  window.addEventListener('resize', function(e){
    setCurrentWidth(current => current = window.screen.width)
  });

  return <ul className="cards">
      {items.map((item, i) => (
        <li key={i} className="card">
          <img className="card__image" src={ mobile ? item.pathMobile : item.pathDesktop} alt={item.name} />
          <div className="card__body">
            <h3 className="card__title">{item.name}</h3>
          </div>
        </li>
      ))}
    </ul>
  
}
