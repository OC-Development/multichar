// Test data for character selection
const testCharacters = [
  {
    cid: 1,
    charinfo: {
      firstname: "John",
      lastname: "Doe",
      birthdate: "1990-01-01",
      nationality: "American",
      gender: "Male"
    },
    job: {
      label: "Police Officer"
    },
    money: {
      cash: 5000,
      bank: 50000
    }
  },
  {
    cid: 2,
    charinfo: {
      firstname: "Jane",
      lastname: "Smith",
      birthdate: "1992-05-15",
      nationality: "British",
      gender: "Female"
    },
    job: {
      label: "Doctor"
    },
    money: {
      cash: 7500,
      bank: 75000
    }
  }
];

// Mock server responses
window.addEventListener('message', function(event) {
  if (event.data.action === 'setupCharacters') {
    setTimeout(() => {
      window.postMessage({ 
        action: 'setupCharacters',
        characters: testCharacters
      }, '*');
    }, 1000);
  }
});

// Initialize the UI
window.postMessage({
  action: 'ui',
  toggle: true,
  nChar: 6,
  enableDeleteButton: true,
  customNationality: false,
  translations: {},
  countries: ['American', 'British', 'Canadian', 'Australian', 'German', 'French']
}, '*');