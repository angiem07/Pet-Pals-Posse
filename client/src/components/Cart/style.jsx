.cart {
    position: fixed;
    top: 0;
    right: 0;
    min-width: 20%;
    max-width: 30%;
    max-height: 60%;
    background-color: var(--light);
    overflow: auto;
    padding: .5rem;
    box-shadow: 0 0 1rem rgba(0, 0, 0, .5);
    border-bottom-left-radius: .5rem;
  }
  
  .cart h2 {
    font-size: 1.5rem;
    border-bottom: 1px solid var(--dark);
    padding-bottom: .5rem;
    margin: 1rem 0;
  }
  
  .cart .close {
    position: absolute;
    top: .5rem;
    right: .5rem;
    cursor: pointer;
    color: var(--tertiary);
  }
  
  .cart .close:hover {
    text-decoration: underline;
  }
  
  .cart-closed {
    position: fixed;
    top: 2%;
    right: 1%;
    font-size: 2rem;
    cursor: pointer;
    background-color: var(--secondary);
    border-radius: 50%;
    padding: .25rem;
    width: 50px;
    height: 50px;
  }
  
  .cart-closed:hover {
    transform: rotate(8deg);
  }
  
  .cart img {
    width: 70px;
    margin-right: 1rem;
  }
  
  .cart input {
    width: 50px;
    padding: 0;
    margin: 0 .5rem 1rem 0;
  }
  
  @media screen and (max-width: 768px) {
    .cart {
      position: relative;
      max-width: 100%;
      max-height: auto;
      box-shadow: none;
      background-color: inherit;
    }
  
    .cart-closed {
      position: relative;
      margin: 0 auto;
    }
  }
  