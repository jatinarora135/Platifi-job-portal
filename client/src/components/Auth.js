const Auth = {
    // both kept as true for testing
  isAuthenticated: false,
  isAdmin:false,
  authenticate() {
    this.isAuthenticated = true;
    this.isAdmin=false;
  },
  authenticateAdmin(){
    this.isAuthenticated = true;
    this.isAdmin=true;
  },
  signout() {
    this.isAuthenticated = false;
    this.isAdmin=false;
  },
  getAuth() {
    return this.isAuthenticated;
  },
  getAdmin() {
    return this.isAdmin;
  },
  logout(){
    this.isAuthenticated=false;
    this.isAdmin=false;
  }
};
export default Auth;
