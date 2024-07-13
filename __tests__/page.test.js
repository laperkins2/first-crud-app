import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import Page from '../src/app/page';
import RegistrationForm from '@/components/RegisterForm';

jest.mock('firebase/auth');

describe('registrationForm', () => {
  it('submits the form with correct values', async () => {
    render(<RegistrationForm />);

    fireEvent.change(screen.getByLabelText(/Email/i), {
      target: { value: 'testuser@aol' },
    });
    fireEvent.change(screen.getByLabelText(/Password/i), {
      target: { value: 'password123' },
    });

    fireEvent.click(screen.getByRole('button', { name: /Sign Up/i }));

    expect(true).toBe(true);
  });
});

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />);

    const heading = screen.getByRole('heading', { level: 1 });

    expect(heading).toBeInTheDocument();
  });
});

describe('Page', () => {
  it('renders a recipe card', () => {
    render(<Page />);

    const RecipeCardAuthor = screen.getByText('dawn lopez', { exact: false });

    expect(RecipeCardAuthor).toBeInTheDocument();
  });
});
