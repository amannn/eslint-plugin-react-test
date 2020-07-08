import PropTypes from 'prop-types';
import {Component} from 'react';

const propTypes = {
  b: PropTypes.number,
  a: PropTypes.number
};

type Props = {
  b?: number;
  a?: number;
};

export class A extends Component<Props> {
  public static propTypes = propTypes;

  public render() {
    const {a, b} = this.props;
    return (
      <p>
        {a} {b}
      </p>
    );
  }
}

export function B({a, b}: Props) {
  return (
    <p>
      {a} {b}
    </p>
  );
}
B.propTypes = propTypes;
