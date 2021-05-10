import React from 'react'
import services1 from './../assets/services1.png'
import services2 from './../assets/services2.png'
import services3 from './../assets/services3.png'

const Services = () => {
  return (
    <section className="services">
      <div className='services__item'>
        <img className="services__item--img" src={services1} alt="services-1" />
        <p className="services__item--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus neque libero ut porro beatae quod dolore? Placeat, unde maxime! Cumque possimus nisi inventore accusamus, magnam sapiente ab mollitia sint!</p>
      </div>
      <div className='services__item'>
        <img className="services__item--img" src={services2} alt="services-2" />
        <p className="services__item--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus neque libero ut porro beatae quod dolore? Placeat, unde maxime! Cumque possimus nisi inventore accusamus, magnam sapiente ab mollitia sint!</p>
      </div>
      <div className='services__item'>
        <img className="services__item--img" src={services3} alt="services-3" />
        <p className="services__item--p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus doloribus neque libero ut porro beatae quod dolore? Placeat, unde maxime! Cumque possimus nisi inventore accusamus, magnam sapiente ab mollitia sint!</p>
      </div>
    </section>
  )
}

export default Services