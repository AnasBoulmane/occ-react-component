/*
 * Copyright (c) 2018 LEEDIUM.
 * This file is subject to the terms and conditions
 * defined in file 'LICENSE.txt', which is part of this
 * source code package.
 */

/* eslint react/prefer-stateless-function: 0, import/no-extraneous-dependencies: 0  */

// @flow
/**
 * @project occ-react-component
 * @file App.jsx
 * @company leedium
 * @createdBy davidlee
 * @contact david@leedium.com
 * @dateCreated 21/10/2018
 * @description  Sample Application.. knock urself out from here...
 */

import React, { Component } from "react";

type Props = {
  occDependencies: {},
  model: {}
}

class App extends Component<Props> {
  render() {
    const { model, occDependencies } = this.props;
    occDependencies.logger.info("Hello from Winston logger...");
    console.log(model, occDependencies);
    return (
      <div>This is a React Application</div>
    );
  }
}

export default App;
