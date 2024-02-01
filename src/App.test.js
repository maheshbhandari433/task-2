import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the expected text in the App component', () => {
  const { getByText } = render(<App />);
  const expectedText = getByText(/Hello React! This app is hosted with AWS Elastic Beanstalk and AWS CodePipeline./i);

  expect(expectedText).toBeInTheDocument();
});
