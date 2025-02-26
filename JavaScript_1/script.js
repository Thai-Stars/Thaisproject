// Book recommendations based on user preferences with summaries
const bookRecommendations = {
  pop: [
    {
      title: 'The Seven Husbands of Evelyn Hugo',
      summary: 'A reclusive Hollywood legend reveals her life story to an unknown journalist, chronicling her journey from glamorous 1950s starlet to her retirement from show business. A tale of ambition, love, and the price of fame.'
    },
    {
      title: 'Normal People',
      summary: 'A contemporary love story following two Irish teenagers through high school and college, exploring how two people can profoundly impact each other\'s lives while trying to stay apart.'
    },
    {
      title: 'Beach Read',
      summary: 'A romance writer and a literary fiction author, both dealing with writer\'s block, decide to swap genres for the summer, leading to unexpected inspiration and connection.'
    }
  ],
  rock: [
    {
      title: 'Daisy Jones & The Six',
      summary: 'An oral history of a fictional 1970s rock band, chronicling their rise to fame and their mysterious breakup at the height of their success.'
    },
    {
      title: 'Just Kids',
      summary: 'A memoir of artistic awakening in 1970s New York City, following the deep friendship between two young artists finding their way in the world.'
    },
    {
      title: 'Kill Your Friends',
      summary: 'A dark satire set in the Britpop music industry of the 1990s, following an A&R man who will stop at nothing to find the next hit.'
    }
  ],
  hiphop: [
    {
      title: 'The Hate U Give',
      summary: 'A powerful story about a teenage girl who becomes an activist after witnessing a police shooting, exploring themes of identity, justice, and speaking truth to power.'
    },
    {
      title: 'Long Way Down',
      summary: 'A verse novel that takes place in sixty seconds, following a young man\'s elevator ride down as he grapples with the choice of whether to seek revenge.'
    },
    {
      title: 'On the Come Up',
      summary: 'A young aspiring rapper fights for her dreams while dealing with poverty, censorship, and her family\'s legacy in the hip-hop world.'
    }
  ],
  classical: [
    {
      title: 'The Invisible Life of Addie LaRue',
      summary: 'A woman makes a Faustian bargain to live forever but is cursed to be forgotten by everyone she meets, until one day, someone remembers her.'
    },
    {
      title: 'The Night Circus',
      summary: 'A magical competition between two ancient rivals plays out in a mysterious circus that only opens at night, where their young proteges fall in love.'
    },
    {
      title: 'If We Were Villains',
      summary: 'Seven Shakespearean actors at an elite arts college blur the lines between performance and reality, leading to deadly consequences.'
    }
  ],
  jazz: [
    {
      title: 'Beloved',
      summary: 'A powerful ghost story about a former slave haunted by her past decisions, exploring themes of memory, trauma, and healing.'
    },
    {
      title: 'Half Blood Blues',
      summary: 'A story of jazz musicians in Berlin and Paris during WWII, exploring friendship, betrayal, and the power of art in dark times.'
    },
    {
      title: 'Coming Through Slaughter',
      summary: 'A fictional account of jazz pioneer Buddy Bolden in New Orleans, blending historical facts with poetic imagination.'
    }
  ],
  drama: [
    {
      title: 'Little Fires Everywhere',
      summary: 'In a planned community where everything is perfectly ordered, the arrival of a mysterious mother-daughter duo upends multiple families\' lives.'
    },
    {
      title: 'The Secret History',
      summary: 'A group of classics students at an elite college become entangled in dark secrets that lead to tragedy.'
    },
    {
      title: 'A Little Life',
      summary: 'A profound story of four college friends in New York City, focusing on one\'s struggle to overcome his traumatic past.'
    }
  ],
  comedy: [
    {
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      summary: 'An ordinary man is swept into an extraordinary space adventure when Earth is destroyed to make way for a hyperspace bypass.'
    },
    {
      title: 'Good Omens',
      summary: 'An angel and a demon who\'ve grown fond of Earth must work together to prevent the coming of the Antichrist and the final battle between Heaven and Hell.'
    },
    {
      title: 'Born Standing Up',
      summary: 'Steve Martin\'s memoir about his years as a stand-up comedian, chronicling his journey from Disneyland magic shop to sold-out arenas.'
    }
  ],
  scifi: [
    {
      title: 'Project Hail Mary',
      summary: 'An astronaut wakes up alone on a spacecraft with no memory of how he got there, tasked with a mission to save humanity from extinction.'
    },
    {
      title: 'Dune',
      summary: 'A sweeping science fiction epic about a young nobleman who must survive on a desert planet while navigating political intrigue and religious prophecy.'
    },
    {
      title: 'The Martian',
      summary: 'An astronaut is accidentally left behind on Mars and must use his wit and scientific knowledge to survive while waiting for rescue.'
    }
  ],
  fantasy: [
    {
      title: 'The Name of the Wind',
      summary: 'A legendary wizard recounts his origin story, from his childhood in a troupe of traveling players to his years at a school of magic.'
    },
    {
      title: 'Uprooted',
      summary: 'A young woman is chosen to serve a powerful wizard who protects her valley from a malevolent forest, discovering her own magical abilities in the process.'
    },
    {
      title: 'The Priory of the Orange Tree',
      summary: 'An epic fantasy about a world divided by dragons, featuring a secret society of mages, political intrigue, and a quest to prevent the rise of an ancient evil.'
    }
  ],
  documentary: [
    {
      title: 'Say Nothing',
      summary: 'A true crime investigation into a murder during The Troubles in Northern Ireland, exploring the consequences of political violence and the cost of keeping secrets.'
    },
    {
      title: 'Bad Blood',
      summary: 'The rise and fall of Theranos, a multibillion-dollar biotech startup, and its founder Elizabeth Holmes.'
    },
    {
      title: 'Into Thin Air',
      summary: 'A firsthand account of the 1996 Mount Everest disaster, examining the commercialization of mountain climbing and the human cost of extreme adventure.'
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('preferencesForm');
  const recommendationsSection = document.getElementById('recommendations');
  const bookResults = document.getElementById('bookResults');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const musicTaste = document.getElementById('musicTaste').value;
    const showType = document.getElementById('showType').value;
    
    // Get recommendations based on preferences
    const recommendations = getRecommendations(musicTaste, showType);
    
    // Display recommendations
    displayRecommendations(recommendations);
  });

  function getRecommendations(music, show) {
    let recommendations = new Set();
    
    // Add recommendations based on music taste
    if (music && bookRecommendations[music]) {
      bookRecommendations[music].forEach(book => recommendations.add(book));
    }
    
    // Add recommendations based on show preference
    if (show && bookRecommendations[show]) {
      bookRecommendations[show].forEach(book => recommendations.add(book));
    }
    
    return Array.from(recommendations).slice(0, 6); // Return up to 6 recommendations
  }

  function displayRecommendations(books) {
    bookResults.innerHTML = '';
    
    books.forEach(book => {
      const bookCard = document.createElement('div');
      bookCard.className = 'book-card';
      bookCard.innerHTML = `
        <h3>${book.title}</h3>
        <p class="book-summary">${book.summary}</p>
        <p class="recommendation-note">Based on your preferences, we think you'll love this book!</p>
      `;
      bookResults.appendChild(bookCard);
    });
    
    recommendationsSection.classList.remove('hidden');
    recommendationsSection.scrollIntoView({ behavior: 'smooth' });
  }
});

// Initialize total points to 0
let totalPoints = 0;

function addPoints() {
  // Get the number of books entered by the user
  const booksRead = parseInt(document.getElementById('booksInput').value);

  // Check if the input is a valid number
  if (!isNaN(booksRead) && booksRead >= 0) {
    // Add the points to the total
    totalPoints += booksRead;

    // Update the total points displayed
    document.getElementById('totalPoints').textContent = totalPoints;

    // Clear the input field
    document.getElementById('booksInput').value = '';
  } else {
    // Alert the user if the input is not valid
    alert("Please enter a valid number of books.");
  }
}


//let cars = 12;
//let bikes = 13;

//let total = "cars" + "bikes";
//console.log(total)