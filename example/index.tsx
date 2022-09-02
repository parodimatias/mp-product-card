import * as React from 'react';
import 'react-app-polyfill/ie11';
import * as ReactDOM from 'react-dom';
import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from '../dist/';
const product = {
  id: '1',
  title: 'Test Product',
};
const App = () => {
  return (
    <>
      <ProductCard product={product} initialValues={{ count: 2, maxCount: 5 }}>
        {({ count, reset, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
