<template>
    <div class="invest-with-us">
      <h1 style="font-size: 80px;">Invest With Us</h1>
      <p>Please choose an investment account:</p>
      <div class="account-options">
        <button @click="selectAccount('Uwekezaji Mdogo')" class="mdogo">Uwekezaji Mdogo</button>
        <button @click="selectAccount('Uwekezaji wa Kati')" class="kati">Uwekezaji wa Kati</button>
        <button @click="selectAccount('Uwekezaji Mkubwa')" class="mkubwa">Uwekezaji Mkubwa</button>
      </div>
  
      <div v-if="selectedAccount" class="investment-options">
        <p>You selected: {{ selectedAccount }}</p>
        <label for="investmentAmount">Choose an amount:</label>
        <select id="investmentAmount" v-model="selectedAmount">
          <option v-for="amount in availableAmounts" :key="amount" :value="amount">
            {{ amount }}
          </option>
        </select>
      </div>
  
      <br><br><br>
      <div class="payment-methods-container">
        <div class="payment-methods">
          <h1>Select a mobile money service of your choice:</h1>
          <br>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('Tigo Pesa')" class="service-link">
              <img class="service-icon" src="/f20.jpg" alt="Tigo Pesa"/>
              <span class="service-name">Tigo Pesa</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('M-Pesa')" class="service-link">
              <img class="service-icon" src="/f19.jpg" alt="M-Pesa"/>
              <span class="service-name">M-Pesa</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('Airtel Money')" class="service-link">
              <img class="service-icon" src="/f18.png" alt="Airtel Money"/>
              <span class="service-name">Airtel Money</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('Halotel')" class="service-link">
              <img class="service-icon" src="/f21.jpg" alt="Halotel"/>
              <span class="service-name">Halotel</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('Vodacom')" class="service-link">
              <img class="service-icon" src="/f22.png" alt="Vodacom"/>
              <span class="service-name">Vodacom</span>
            </a>
          </div>
        </div>
  
        <div class="bank-services">
          <h1>Select a bank service of your choice:</h1>
          <br>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('NMB')" class="service-link">
              <img class="service-icon" src="/f23.jpg" alt="NMB"/>
              <span class="service-name">NMB</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('CRDB')" class="service-link">
              <img class="service-icon" src="/f25.jpg" alt="CRDB"/>
              <span class="service-name">CRDB</span>
            </a>
          </div>
  
          <div class="service">
            <a @click.prevent="redirectToPayment('Stanbic Bank')" class="service-link">
              <img class="service-icon" src="/f24.jpg" alt="Stanbic Bank"/>
              <span class="service-name">Stanbic Bank</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedAccount: null,
        selectedAmount: null,
        availableAmounts: [],
      };
    },
    methods: {
      selectAccount(account) {
        this.selectedAccount = account;
  
        if (account === 'Uwekezaji Mdogo') {
          this.availableAmounts = ['TZS 5,000', 'TZS 10,000', 'TZS 15,000'];
        } else if (account === 'Uwekezaji wa Kati') {
          this.availableAmounts = ['TZS 50,000', 'TZS 100,000'];
        } else if (account === 'Uwekezaji Mkubwa') {
          this.availableAmounts = ['TZS 500,000', 'TZS 1,000,000'];
        }
  
        this.selectedAmount = null; // Reset the selected amount when a new account is chosen
      },
      redirectToPayment(service) {
        // Example logic for redirection or payment
        console.log(`Redirecting to payment for: ${service}`);
        // Example using Vue Router to navigate to a payment page
        this.$router.push({ name: 'PaymentPage', query: { service, amount: this.selectedAmount } });
      }
    }
  };
  </script>
  
  <style scoped>
  .invest-with-us {
    background-color: #fff;
    color: #000;
    text-align: center;
    padding: 20px;
  }
  
  .account-options {
    display: flex;
    justify-content: space-around;
    margin-top: 20px;
  }
  
  button {
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
  }
  
  .mdogo {
    background-color: #28a745; /* Green */
  }
  
  .kati {
    background-color: #000; /* Black */
  }
  
  .mkubwa {
    background-color: #1e7e34; /* Darker Green */
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  .investment-options {
    margin-top: 20px;
  }
  
  select {
    padding: 10px;
    font-size: 16px;
    margin-top: 10px;
  }
  
  /* Payment Methods Container */
  .payment-methods-container {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;
  }
  
  .payment-methods,
  .bank-services {
    width: 48%;
  }
  
  .payment-methods h1,
  .bank-services h1 {
    text-align: left;
  }
  
  .service {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  
  .service-icon {
    height: 50px;
    width: 50px;
    margin-right: 10px;
  }
  
  .service-name {
    font-size: 16px;
    line-height: 50px; /* Align text with icon */
  }
  
  .service-link {
    text-decoration: none;
    color: inherit;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  </style>
  