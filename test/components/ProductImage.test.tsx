import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard, ProductImage } from '../../src/components';
import { product1 } from '../data/products';
describe('ProductTitle', () => {
  test('mostrar componente con la imagen', () => {
    const wrapper = renderer.create(
      <ProductImage img="https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/06/19989.jpg"></ProductImage>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  test('debe mostrar el componente con el nombre del product', () => {
    const wrapper = renderer.create(
      <ProductCard product={product1}>
        {() => {
          return (
            <ProductImage img="https://assets.iproup.com/cdn-cgi/image/w=880,f=webp/https://assets.iproup.com/assets/jpg/2021/06/19989.jpg"></ProductImage>
          );
        }}
      </ProductCard>
    );
    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
