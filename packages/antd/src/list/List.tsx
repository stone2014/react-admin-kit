import React, { cloneElement } from 'react';
import { ListController } from 'prophet-core';
import ListActions from './ListActions';
import { Card } from 'antd';

export interface IProps {
  children?: React.ComponentType;
  actions?: React.ComponentType;
}

export const ListView = ({
  children,
  loading,
  title,
  actions = <ListActions />,
  ...other
}) => {
  return (
    <Card
      bordered={false}
      title={title}
      loading={loading}
      bodyStyle={{ padding: 0 }}
    >
      {actions}
      {children && cloneElement(children, { ...other })}
    </Card>
  );
};

export const List: React.SFC<IProps> = (props: IProps) => (
  <ListController {...props}>
    {controllerProps => <ListView {...props} {...controllerProps} />}
  </ListController>
);

export default List;
