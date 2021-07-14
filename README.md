# This is a demo app.


TL;DR;

```
yarn
yarn compile
```

Go to another react app.

`yarn add ../cool-button-to-demo-imported-react-button`

```typescript jsx

import {DemoButton} from 'cool-button-to-demo-imported-react-button'

<DemoButton label="button" backgroundColor="pink" onClick={()=>{alert('clicked')}}/>

```


I want to create a simple react component, and then deploy it.

Requirements:
- React App
- deploy clean
- uses storybook
- must be installable

## check storybook

```sh
yarn
yarn run:clean
yarn
yarn storybook
```

Inspect for errors

1. `yarn start` - should just be button appearing
1. `yarn test` - should return green
1. `yarn compile` - should put stuff we're interested in into the `~/dist` folder.

