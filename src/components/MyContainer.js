// MyContainer.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import MyHOC from './MyHOC';

const MyContainerComponent = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1>{t('frontPageText')}</h1>
    </div>
  );
};

const WrappedComponent = MyHOC(MyContainerComponent, { name: "Kalle" });

function MyComponent() {
  return <>{WrappedComponent}</>;
}

export default MyComponent;
