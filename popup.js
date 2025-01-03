document.addEventListener("DOMContentLoaded", function() {
  
    // Event listener to trigger the check button on Enter key press
    textInput.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        checkButton.click();
      }
    });
  
  document.getElementById("checkButton").addEventListener("click", function() {
    
    // Clear resultsContainer at the start
    const resultsContainer = document.getElementById("resultsContainer");
    resultsContainer.innerHTML = ''; // Clear previous results
    const textInput = document.getElementById("textInput").value;

    let assignedText = textInput;
    console.log("Assigned Text:", assignedText);
    const myArray = assignedText.split("; ");
    const bigCategoryList = new Set(['Accounting', 'Accounting and Finance', 'Blockchain', 'Corporate Performance Management', 'Cryptominers', 'Governance, Risk and Compliance', 'Online Banking', 'Recurring Billing', 'Risk and Compliance', 'Insurance Software', 'Travel and Expense Management', 'Ad Creative Management', 'Ad Exchanges', 'Ad Servers', 'Ad Verification and Optimization', 'Advertising', 'Advertising Networks', 'Affiliate Advertising Networks', 'Demand Side Platforms', 'Header Bidding', 'Retargeting', 'Supply Side Platforms', 'Audio, Video, Graphics', 'Augmented Reality', 'CAD & Graphics', 'Design', 'Digital Asset Management', 'Live Streaming Platforms', 'Online Video Platforms', 'Stock Images Providers', 'Video Advertising Networks', 'Video Players', 'Visualisation Software', 'Association Management', 'Camp Management', 'Comment Systems', 'Communication and Collaboration', 'Communications Technology', 'Document Management Systems', 'Electronic Signatures', 'Email', 'Event Management', 'File Sharing', 'Office Suites', 'Project Management', 'Team Collaboration', 'Unified Communications', 'Web Conferencing', 'Contact Center Solutions', 'Customer Communication Management', 'Customer Experience Management', 'Customer Feedback Management', 'Customer Self-Service', 'Customer Service', 'Food Ordering and Delivery', 'Help Desk Management', 'Hotel Reservations', 'IT Service Management', 'Restaurant Reservations', 'Ticketing Systems', 'Tours and Activities Reservations', 'Archiving', 'Backup and Recovery', 'Big Data Processing', 'Data Integration', 'Data Management', 'Data Management Platforms', 'Data Quality Management', 'Data Warehousing', 'Database', 'Database Management', 'Database Management Software', 'Enterprise Data Storage', 'Enterprise Search', 'Build Automation', 'Configuration Management', 'Containerization', 'Continuous Integration', 'Deployment', 'Dev Tools', 'DevOps', 'Error and Exception Monitoring', 'Issue Trackers', 'Logging', 'Release Management', 'Source Code Management', 'Testing and QA', 'Virtualisation Software', 'Cross-border E-Commerce', 'E-Commerce', 'E-Commerce Analytics Software', 'E-Commerce Platforms', 'Multichannel Retail Software', 'Payment Processing', 'Product Information Management', 'Shopping Cart', 'Site and Cart Abandonment', 'Size and Fit Prediction', 'Payroll Management and Benefits Administration', 'Health Platform', 'Payroll Processing', 'Pre-Employment Assessment', 'Time Tracking', 'Applicant Tracking Systems', 'Learning Management System', 'Corporate Learning Management Systems', 'Education Management', 'Electronic Health Records', 'Fundraising and Donation Management', 'HRIS Management', 'Human Capital Management', 'Human Resource', 'Human Resource Management System', 'Job Board Software', 'A/B Testing', 'Advanced Analytics and Data Science', 'Analytics', 'Business Intelligence', 'Cookie Compliance', 'Intelligence and Analytics', 'Marketing Analytics', 'Mobile Analytics', 'Predictive Analytics', 'Social Media Analytics and Monitoring', 'System Analytics & Monitoring', 'Tag Management', 'Web Analytics', 'Cloud Hosting', 'Cloud Infrastructure Computing', 'Content Delivery Network', 'Control Systems', 'Domain Name Services', 'Email Delivery', 'Email Hosting', 'Enterprise', 'Enterprise Mobility Management', 'IT', 'IT Infrastructure', 'IT Infrastructure & Operations Management', 'IT Infrastructure Monitoring', 'Infrastructure as a Service', 'Load Balancers', 'Middleware Software', 'Network Hardware', 'Network Management', 'Network Management (Software)', 'Operating Systems', 'Operating Systems & Computing Languages', 'Platform as a Service', 'Printers', 'Real User Monitoring', 'Server Hardware', 'Servers', 'Storage', 'Virtual Private Networks', 'Web Accelerators', 'Web Hosting', 'Web Server Extensions', 'Web Servers', 'Web and Application Servers', 'Account-Based Marketing', 'Advocacy Marketing', 'Automotive Marketing', 'Call Tracking', 'Content Marketing', 'Customer Data Platforms', 'Email Marketing', 'Healthcare Marketing', 'Hospitality Marketing', 'Influencer Marketing Software', 'Local Marketing', 'Loyalty and Gamification', 'Marketing', 'Marketing Automation', 'Referral Marketing', 'Marketing Data Providers', 'Marketing Performance Measurement', 'Online Review Management', 'Personalization', 'Real Estate Marketing', 'Recruitment Marketing', 'Search Marketing', 'Social Media Marketing Software', 'Translation', 'Visual and User Generated Content Marketing', 'Business Process Management', 'Enterprise Resource Planning', 'Facilities Management', 'Hotel Management', 'Inventory and Order Management', 'Logistics', 'Operations', 'Procurement', 'Retail Operations Software', 'Supply Chain Management', 'Transportation and Fleet Management', 'Warehouse Management', 'Development', 'Frameworks and Libraries', 'Javascript Frameworks', 'Mobile Application Development Platforms', 'Mobile Frameworks', 'Programming', 'Programming Languages', 'UI Frameworks', 'Appointment Scheduling', 'Configure Price Quote', 'Customer Relationship Management', 'Email Tracking', 'Ticket Booking', 'Lead Generation', 'Partner Management Software', 'Points of Sale', 'Realty', 'Retail Analytics Software', 'Sales', 'Sales Enablement', 'Sales Performance Management', 'Application Security Testing', 'DDoS and Bot Protection', 'Data Security', 'Email Security', 'Endpoint Protection', 'Fraud Detection and Prevention', 'Identity and Access Management', 'Identity Verification', 'Network Security', 'SSL Certificate', 'Security', 'Security Information and Event Management', 'System Security Services', 'Threat Intelligence', 'Web Application Firewalls', 'eDiscovery', 'Application Development & Management', 'Automotive Website Design and Development Services', 'Brand Protection Software', 'Help Desk Software', 'Integrated Development Environments', 'Machine Learning', 'Open Source', 'Software Development', 'Software Framework', 'Software as a Service', 'Sports Website Design and Development Services', 'Web Design and Development Services', 'Accessibility', 'API Management', 'Blogs', 'CAPTCHA', 'Cache Tools', 'Caching', 'Charting', 'Click-to-Call', 'Consent Management', 'Content Management System', 'User onboarding', 'Documentation Tools', 'Editors', 'Enterprise Content Management', 'Fitness and Gym Management', 'Font Scripts', 'Hosting Panels', 'Javascript Graphics', 'Javascript Libraries', 'Legal Solutions', 'Live Blogging', 'Live Chat', 'Mapping and GIS', 'Maps', 'Message Boards', 'Miscellaneous', 'Online Community Software', 'Online Form Builders', 'Page Builders', 'Photo Galleries', 'Push Notifications', 'Real Estate Property Management', 'Rich Text Editors', 'Search Engines', 'Site Search', 'Social Login', 'Social Sharing', 'Spa and Salon Management', 'Sports Management', 'Visitor Counters', 'Web & Portal Technology', 'Web Fonts', 'Web Frameworks', 'Mobile Apps', 'Web Tools and Plugins', 'Website Builders', 'Performance', 'Web Platform Extensions', 'Widgets', 'Wikis', 'Generative AI']);
    const matched = [];
    const nonMatched = [];

    myArray.forEach(category => {
      if (bigCategoryList.has(category)) {
        matched.push(category);
      } else {
        nonMatched.push(category);
      }
    });

    // Display each category
    myArray.forEach((category, index) => {
      const categoryElement = document.createElement("span");
      categoryElement.textContent = category;
    
      // Applying "not-matched" styling
      if (nonMatched.includes(category)) {
        categoryElement.classList.add("not-matched");
      }
    
      resultsContainer.appendChild(categoryElement);
    
      // Adding a separator (except after last item)
      if (index < myArray.length - 1) {
        resultsContainer.appendChild(document.createTextNode("; "));
      }
    });

    // Populate the uneditable field with matched categories
    const matchedField = document.getElementById("matchedField");
    matchedField.value = matched.join("; ");
  });
  // Copy button functionality
  document.getElementById("copyButton").addEventListener("click", function() {
  
    // Select and copy the value of matchedCategoriesField
    matchedField.select();
    document.execCommand("copy");
  });
});