import React from 'react';
import App from './App';
import { mount } from 'enzyme';


describe('Test valid value input', () => {
  
  it('Expect to return false with less than 1 caractere', () => {
    const expectedValue = false;
    const component  = mount(<App />);
    const result = component.validateValue('')
    expect(result).toBe(expectedValue);
  });

  it('Expect to return false with more than 10 caracteres', () => {
    const expectedValue = false;
    const component  = mount(<App />);
    const result = component.validateValue('qwertyuiopdddd')
    expect(result).toBe(expectedValue);
    component.unmount();
    component.unmount();
  });

  it('Expect to return true with value >= 10 caracteres', () => {
    const expectedValue = true;
    const component  = mount(<App />);
    const result = component.validateValue('qwertyuiop')
    expect(result).toBe(expectedValue);
    component.unmount();
  });

  it('Expect to return true with value <= 1 caracteres', () => {
    const expectedValue = true;
    const component  = mount(<App />);
    const result = component.validateValue('q')
    expect(result).toBe(expectedValue);
    component.unmount();
  });

  it('Expect to return false number', () => {
    const expectedValue = false;
    const component  = mount(<App />);
    const result = component.validateValue(22)
    expect(result).toBe(expectedValue);
    component.unmount();
  });

  it('Expect to return false if value equal null', () => {
    const expectedValue = false;
    const component  = mount(<App />);
    const result = component.validateValue(null)
    expect(result).toBe(expectedValue);
    component.unmount();
  });
});

describe('Test valid value input 2', () => {
  const parameters = [
    {description: 'Expect to return false with less than 1 caractere', input: '', result: false},
    {description: 'Expect to return false with more than 10 caracteres', input: 'qwertyuiopdddd', result: false},
    {description: 'Expect to return true with value >= 10 caracteres', input: 'qwertyuiop', result: true},
    {description: 'Expect to return true with value <= 1 caracteres', input: 'q', result: true},
    {description: 'Expect to return false number', input: 22, result: false},
    {description: 'Expect to return false if value equal null', input: null, result: false}
  ]

  parameters.forEach((parameter) => {
    it(parameter.description, () => {
      const component  = mount(<App />);
      const result = component.validateValue(parameter.input);
      expect(result).toBe(parameter.result);
      component.unmount();
    });
  });
});