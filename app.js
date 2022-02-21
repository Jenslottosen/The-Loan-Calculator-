// for the submit button
document.getElementById('loan-form').addEventListener('submit', function(e){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Show loader
    document.getElementById('loading').style.display = 'block';
  
    setTimeout(calculateResults, 2000);
  
    e.preventDefault();
  });
  
  // Calculating The Results
  function calculateResults(){
    console.log('Calculating...');
    // User interface variables 
    const amount = document.getElementById('amount');
    const interest = document.getElementById('interest');
    const years = document.getElementById('years');
    const monthlyPayment = document.getElementById('monthly-payment');
    const totalPayment = document.getElementById('total-payment');
    const totalInterest = document.getElementById('total-interest');
  
    const principal = parseFloat(amount.value);
    const calculatedInterest = parseFloat(interest.value) / 100 / 12;
    const calculatedPayments = parseFloat(years.value) * 12;
  
    // Calculate monthly payment
    const x = Math.pow(1 + calculatedInterest, calculatedPayments);
    const monthly = (principal*x*calculatedInterest)/(x-1);
  
    if(isFinite(monthly)) {
      monthlyPayment.value = monthly.toFixed(2);
      totalPayment.value = (monthly * calculatedPayments).toFixed(2);
      totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  
      // Show results
      document.getElementById('results').style.display = 'block';
  
      // Hide loader
      document.getElementById('loading').style.display = 'none';
  
    } else {
      showError('Please check your numbers');
    }
  }
  
  // Showing Error
  function showError(error){
    // Hide results
    document.getElementById('results').style.display = 'none';
    
    // Hide loader
    document.getElementById('loading').style.display = 'none';
  
    // Creating a div
    const errorDiv = document.createElement('div');
  
    // Getting elements
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // Adding class
    errorDiv.className = 'alert alert-danger';
  
    // Creating a text node and appending to child 
    errorDiv.appendChild(document.createTextNode(error));
  
    // Insering error over heading
    card.insertBefore(errorDiv, heading);
  
    // Clearing error message after set time 
    setTimeout(clearError, 3000);
  }
  
  // Clearing error
  function clearError(){
    document.querySelector('.alert').remove();
  }