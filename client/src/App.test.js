import React from 'react';
import ReactDOM from 'react-dom';
import { render, fireEvent } from '@testing-library/react'
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// it('render correctly', () => {
//   const = render
// })

describe('sanity test', () => {
  it('5 = 5', () => {
    expect(5).toBe(5);
  })

})

// describe('App', () =>  {
//   const app = rtl.render(<App />)
//     it('Exists', () => {
//       expect(app).toBeInTheDocument()
//   })
// })

describe('Dark Mode', () => {
  const wrapper = render(<App />)
  const darkMode = wrapper.queryByText(/dark mode/i)
  it('exists', () => {
    expect(darkMode).toBeTruthy();
  })
  it('changes to light mode', () => {
    fireEvent.click(darkMode);
    const lightMode = wrapper.queryByText(/light mode/i)
    expect(lightMode).toBeTruthy();
  })
})



