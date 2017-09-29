import { ConfigOption } from '@ngx-formly/core';
import {
  NextFieldInput,
} from './types/';
import {
  NextWrapperLabel,
  NextWrapperBox
} from './wrappers/';

export const FIELD_TYPE_COMPONENTS = [
  // types
  NextFieldInput,
  // Wrapper
  NextWrapperLabel,
  NextWrapperBox
];
export const NextConfig: ConfigOption = {
  types: [
    {
      name: 'next-input',
      component: NextFieldInput,
      wrappers: ['label'],
    }
  ],
  wrappers: [
    {name: 'label', component: NextWrapperLabel},
    {name: 'box', component: NextWrapperBox},
  ]
};