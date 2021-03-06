import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { crudGetOne, crudUpdate } from '../actions';

export interface IProps {
  children(props): any;
  basePath: any;
  resource: any;
  id: string | number;
  record: any;
  crudUpdate: any;
  crudGetOne: (resource: string, id: string | number) => any;
}

const mapStateToProps = (state, props) => {
  return {
    id: props.id,
    record: {
      username: 'stbui',
      password: '123456',
      nickname: 'stb',
      role: 1,
      email: 'stbui@stbui.com',
      phone: '13333333333',
      status: true
    }
  };
};

export class EditController extends Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { resource, id } = this.props;
    this.updateData(resource, id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.id !== nextProps.id) {
      this.updateData(nextProps.resource, nextProps.id);
    }
  }

  updateData(resource, id) {
    this.props.crudGetOne(resource, id);
  }

  save = data => {
    const { crudUpdate, resource } = this.props;
    crudUpdate(resource, data);
  };

  render() {
    const { children, basePath, resource, record } = this.props;

    if (!children) return null;

    return children({ basePath, resource, save: this.save, record });
  }
}

export default connect(
  mapStateToProps,
  { crudGetOne, crudUpdate }
)(EditController);
