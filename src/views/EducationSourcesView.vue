<template>
    <div class="education-sources">
      <h1 style="font-size: 80px;">Education Sources</h1>
  <br>
      <div class="card-container">
        <div class="card financial-literacy">
          <h2>Financial Literacy</h2>
          <p>
            Financial literacy is the ability to understand and effectively use various financial skills. It includes understanding how money works, how to manage it, and how to invest it wisely.
          </p>
          <p>
            <a href="/financial-literacy" class="link">Learn More</a>
          </p>
        </div>
        
        <div class="card budgeting">
          <h2>Budgeting</h2>
          <p>
            Budgeting is the process of creating a plan to manage your money. It involves tracking income and expenses, setting financial goals, and making adjustments to ensure you live within your means.
          </p>
          <p>
            <a href="/budgeting" class="link">Learn More</a>
          </p>
        </div>
        
        <div class="card investment-guides">
          <h2>Investment Guides</h2>
          <p>
            Investment guides provide insights into different types of investments, how to evaluate them, and how to build a diversified portfolio. They are essential for making informed investment decisions.
          </p>
          <p>
            <a href="/investment-guides" class="link">Learn More</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'EducationSources',
  };
  </script>
  
  <style scoped>
  .education-sources {
    padding: 20px;
    background-image: url('f26.webp');
    background-repeat: no-repeat;
    background-size: cover;/* Light teal background for the entire page */
    color: #333;
    min-height: 100vh; /* Ensure it covers the full viewport height */
  }
  
  h1 {
    font-size: 2rem;
    margin-bottom: 20px;
    text-align: center;
  }
  
  .card-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .card {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    padding: 20px;
    width: 300px;
    box-sizing: border-box;
    transition: background-color 0.3s, box-shadow 0.3s;
  }
  
  .card:hover {
    background-color: #f0f0f0; /* Light grey */
    box-shadow: 0 4px 15px rgba(0,0,0,0.2);
  }
  
  .financial-literacy:hover {
    background-color: #dff0d8; /* Light green */
  }
  
  .budgeting:hover {
    background-color: #f5f5f5; /* Light grey */
  }
  
  .investment-guides:hover {
    background-color: #d6d6d6; /* Light grey */
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1rem;
    margin-bottom: 10px;
  }
  
  .link {
    color: #0558af;
    text-decoration: none;
  }
  
  .link:hover {
    text-decoration: underline;
  }
  </style>
  