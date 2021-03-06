import { storiesOf } from '@storybook/vue';

storiesOf('TextInput', module)
  .addWithJSX('normal', () => ({
    template: `
    <ca-text-input placeholder="holder"></ca-text-input>
    `,
  })).addWithJSX('with model', () => ({
    data: () => ({
      model: 'text test',
    }),
    template: `
    <div>
      <ca-text-input placeholder="holder" v-model="model"></ca-text-input>
      model is {{model}}
    </div>
    `,
  }));
