import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';
import Button from 'components/Button';

const label = 'Colors';
const options = {
  Red: 'red',
  Blue: 'blue',
  Yellow: 'yellow',
  Rainbow: ['red', 'orange', 'etc'],
  None: null,
};
const defaultValue = 'red';
const groupId = 'GROUP-ID1';

const value = select(label, options, defaultValue, groupId);

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('Primary', () => <Button color={value}>Click this</Button>)
  .add('Secondary', () => <Button secondary>then this</Button>);
