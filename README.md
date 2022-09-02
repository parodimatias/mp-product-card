# mp-Product Card

This is a deploy test package to NPM

### by Matias Parodi

## Example

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'mp-product-card'
```

```
      <ProductCard
        product={product}
        initialValues={{ count: 2, maxCount: 5 }}
      >
        {({ count, reset, isMaxCountReached, increaseBy }) => (
          <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
          </>
        )}
      </ProductCard>
```
