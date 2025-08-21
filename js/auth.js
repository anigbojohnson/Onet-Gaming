// Validation rules in JSON
const rules = {
  signup: {
    name: { required: true, minLength: 3 },
    email: { required: true, type: "email" },
    password: { required: true, minLength: 6, strong: true } // 👈 added strong
  },
  login: {
    email: { required: true, type: "email" },
    password: { required: true }
  }
};

// Clear all previous error messages
function clearErrors(formId) {
  $(`#${formId} .text-danger`).html("");
}

// Validate data and return field-specific errors
function validateData(data, rules) {
  const errors = {};
  for (const field in rules) {
    const value = data[field]?.trim();
    const rule = rules[field];

    if (rule.required && !value) {
      errors[field] = `${field} is required`;
    } else if (rule.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      errors[field] = "Invalid email format";
    } else if (rule.minLength && value.length < rule.minLength) {
      errors[field] = `${field} must be at least ${rule.minLength} characters`;
    } else if (rule.strong && !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/.test(value)) {
      errors[field] = "Password must have uppercase, lowercase, and a number";
    }
  }
  return errors;
}

// Show errors under each input field
function displayErrors(errors, prefix) {
  for (const field in errors) {
    $(`#${prefix}${field.charAt(0).toUpperCase() + field.slice(1)}Error`).html(errors[field]);
  }
}

// Handle Login
$(document).on("submit", "#loginForm", function(e) {
  e.preventDefault();
  clearErrors("loginForm");

  const data = {
    email: $("#loginEmail").val(),
    password: $("#loginPassword").val()
  };

  const errors = validateData(data, rules.login);
  if (Object.keys(errors).length > 0) {
    displayErrors(errors, "login");
    return;
  }

  $.ajax({
    url: "http://localhost:3000/api/login",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(data),
  })
  .done(res => {
    $("#loginMessage").html(`<span class="text-success">${res.message}</span>`);
  })
  .fail(err => {
    $("#loginMessage").html(`<span class="text-danger">${err.responseJSON.message}</span>`);
  });
});

// Handle Signup
$(document).on("submit", "#signupForm", function(e) {
  e.preventDefault();
  clearErrors("signupForm");

  const data = {
    name: $("#signupName").val(),
    email: $("#signupEmail").val(),
    password: $("#signupPassword").val()
  };

  const errors = validateData(data, rules.signup);
  if (Object.keys(errors).length > 0) {
    displayErrors(errors, "signup");
    return;
  }

  $.ajax({
    url: "http://localhost:3000/api/signup",
    method: "POST",
    contentType: "application/json",
    data: JSON.stringify(data)
  })
  .done(res => {
  $("#signupMessage").html(`<span class="text-success">${res.message}</span>`);
 })
.fail(err => {
  console.log(err)
  $("#signupMessage").html(`<span class="text-danger">${err.responseJSON.message}</span>`);
})
});
