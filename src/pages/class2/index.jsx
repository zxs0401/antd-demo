import React from 'react';
import MyFirstComponent from '../../components/my-first-components';
import MyTwoComponent from '../../components/my-two-components';
function Class2() {
  return (
    <div>
      222
      <MyFirstComponent propsName={'propsName'} />
      <MyTwoComponent propsName={'propsName 1'} />
      <MyTwoComponent propsName={'propsName 2'} />
      <MyTwoComponent propsName={'propsName 3'} />
    </div>
  );
}

export default Class2;