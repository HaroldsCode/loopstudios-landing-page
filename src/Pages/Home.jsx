import React from 'react';

import { Cards } from '../Components/Cards';

export const Home = () => {
  return (
    <main>
      <article className="data">
        <picture className="data__thumbnail">
          <img
            className="data__image"
            src="./assets/images/desktop/image-interactive.jpg"
            alt="Interactive VR"
          />
        </picture>
        <div className="data__body">
          <h2 className="data__title">The leader in interactive VR</h2>
          <p className="data__copy">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe. Our
            award-winning creations have transformed businesses through digital
            experiences that bind to their brand.
          </p>
        </div>
      </article>
      <section className="creations">
        <h2 className="creations__title">Our creations</h2>
        <button className="btn btn--creations">See all</button>
        <Cards />
      </section>
    </main>
  );
};