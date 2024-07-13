export const getAuth = jest.fn(() => ({
  createUserWithEmailAndPassword: jest.fn((email, password) => {
    return Promise.resolve({ user: { email, uid: 'mockUid123' } });
  }),
}));
