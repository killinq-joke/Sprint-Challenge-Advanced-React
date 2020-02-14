import React from 'react';
import ReactDOM from 'react-dom';
import * as rtl from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// describe('App', () =>  {
//   const app = rtl.render(<App />)
//     it('Exists', () => {
//       expect(app).toBeInTheDocument()
//   })
// })

describe('Dark Mode', () => {
  const wrapper = rtl.render(<App />)
  const darkMode = wrapper.queryByText(/dark mode/i)
  it('exists', () => {
    expect(darkMode).toBeInTheDocument();
  })
  it('changes to light mode', () => {
    darkMode.rtl.fireEvent.click(darkmode);
    const lightMode = wrapper.queryByText(/light mode/i)
    expect(lightMode).toBeInTheDocument();
  })
})

