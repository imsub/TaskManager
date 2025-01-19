
// Unit tests for: Home


import Home from '../Home';
import { render, screen } from '@testing-library/react';
import React from 'react';
import "@testing-library/jest-dom";

// Mocking the Table component
jest.mock("../../components/Table", () => ({ cols, payload }) => (
  <div data-testid="table">
    {payload.map((row) => (
      <div key={row.id}>
        {cols.map((col) => (
          <span key={col}>{row[col]}</span>
        ))}
      </div>
    ))}
  </div>
));

// Test suite for the Home component
describe('Home() Home method', () => {
  // Happy path tests
  describe('Happy Paths', () => {
    it('should render the title "Projects"', () => {
      // Test to ensure the title "Projects" is rendered
      render(<Home />);
      expect(screen.getByText('Projects')).toBeInTheDocument();
    });

    it('should render the "Create Project" button', () => {
      // Test to ensure the "Create Project" button is rendered
      render(<Home />);
      expect(screen.getByRole('button', { name: /create project/i })).toBeInTheDocument();
    });

    it('should render the Table component with correct columns and data', () => {
      // Test to ensure the Table component is rendered with correct columns and data
      render(<Home />);
      const table = screen.getByTestId('table');
      expect(table).toBeInTheDocument();
      expect(screen.getByText('Cupcake')).toBeInTheDocument();
      expect(screen.getByText('First project')).toBeInTheDocument();
    });
  });

  // Edge case tests
  describe('Edge Cases', () => {
    it('should handle an empty projects list gracefully', () => {
      // Test to ensure the component handles an empty projects list
      jest.spyOn(React, 'useState').mockImplementation(() => [[], jest.fn()]);
      render(<Home />);
      const table = screen.getByTestId('table');
      expect(table).toBeInTheDocument();
      expect(table).toBeEmptyDOMElement();
    });

    it('should not add duplicate project on initial render', () => {
      // Test to ensure no duplicate project is added on initial render
      render(<Home />);
      const projectTest = screen.queryByText('Project Test');
      expect(projectTest).not.toBeInTheDocument();
    });
  });
});

// End of unit tests for: Home
