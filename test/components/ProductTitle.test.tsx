import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductTitle } from '../../src/components';
import { product1 } from '../data/products';
describe('ProductTitle', () => {
  test('mostrar componente con el titulo', () => {
    const wrapper = renderer.create(
      <ProductTitle
        title="Custom Product"
        className="custom-class"
      ></ProductTitle>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con el nombre del product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => {
          return <ProductTitle></ProductTitle>;
        }}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
