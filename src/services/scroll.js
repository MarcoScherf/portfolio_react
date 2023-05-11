class Scroll {
    // In this case, the scrollTo method is declared as a static method by placing the 
    // static keyword in front of the method. This allows the method to be called directly
    // without creating an instance of the class.
  static scrollTo(element) {
    const el = document.getElementById(element);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  }
}

export default Scroll;
