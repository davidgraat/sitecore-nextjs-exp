import { Text, Field, withDatasourceCheck } from '@sitecore-jss/sitecore-jss-nextjs';
import { ComponentProps } from 'lib/component-props';

type MyFirstComponentProps = ComponentProps & {
  fields: {
    heading: Field<string>;
  };
};

const MyFirstComponent = (props: MyFirstComponentProps): JSX.Element => (
  <div>
    <p>MyFirstComponent Component</p>
    <Text field={props.fields.heading} />
  </div>
);

export default withDatasourceCheck()<MyFirstComponentProps>(MyFirstComponent);
