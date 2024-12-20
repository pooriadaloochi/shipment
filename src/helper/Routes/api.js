const constants = {
  root:
    (process.env.NODE_ENV === 'production'
      ? window.location.origin
      : process.env.REACT_APP_BASE_URL) + process.env.REACT_APP_ROOT_URL,
  version: 'v1/',
  login: 'Identity/Login',
  logout: 'Identity/logout',
  register: 'Identity/Register',
  captcha: 'Identity/CaptchaImage',
  resetPassword: 'Identity/SendPasswordResetTokenByEmail',
  submitNewAdminPassword: 'v2/Identity/ChangePassword',
  userProfile: '/v2/UserProfile',
  about: '/Version',
  Account: {
    registerCustomer: 'Account/registerCustomer',
    login: 'Account/login',
    forgotPassword: 'Account/ForgotPassword',
  },
  // ​/api​/v1​/Customer​/Load​/AllLoads
  Home: {
    allLoads: 'Customer/Load/AllLoads',
    addLoad: 'Customer/Load/AddLoad',
    actionTypes: 'Public/ActionLogTypes',
    publicData: 'Public',
    getEnrolment: 'Enrolment',
    userConfig: 'UserConfig/ui',
  },
};

export default constants;
