import React from 'react';
import { Navigate } from 'react-router-dom';

export default function ProtectedRoute(props) {
  console.log(props);
  if (props.userData === null) {
    return <Navigate to="/login" />;
  } else {
    console.log(props.userData); 
    return props.children;
  }
}
