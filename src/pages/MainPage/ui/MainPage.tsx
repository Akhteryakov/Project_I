import React from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { t, i18n } = useTranslation('mainPage');
  return (
    <div>
      <h1>{t('Главная страница')}</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla fugiat
        quas, minus cumque ducimus magni eum, a animi odio quia aliquam nemo
        culpa aliquid rerum adipisci alias velit error. Earum recusandae
        architecto nulla autem odio enim excepturi distinctio quo, animi
        quaerat. Suscipit commodi et excepturi velit numquam explicabo, dolore
        rerum sapiente ipsa similique perspiciatis vero asperiores placeat non,
        iste quidem dolorum voluptates facilis? Laboriosam qui exercitationem
        pariatur deserunt quam dolore iusto ab explicabo non voluptatem,
        sapiente, magni laborum iste sint consequuntur recusandae in magnam
        obcaecati at. Dolorem, voluptates doloribus saepe repudiandae aliquam
        non nesciunt necessitatibus ex ipsum animi libero iusto?
      </p>
    </div>
  );
};

export default MainPage;
