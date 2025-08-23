//blog section start

const blogCards = document.getElementById("blogCards");
const pagination = document.getElementById("pagination");
pagination.classList.add("pagination");

const blogs = [
  {
    img: "images/blogPage/Image (6).svg",
    author: "Alec Whitten • 1 Jan 2023",
    title: "Bill Walsh leadership lessons",
    text: "Like to know the secrets...",
  },
  {
    img: "images/blogPage/Image (7).svg",
    author: "Demi Wilkinson • 1 Jan 2023",
    title: "PM mental models",
    text: "Mental models are simple...",
  },
  {
    img: "images/blogPage/Image (8).svg",
    author: "Candice Wu • 1 Jan 2023",
    title: "What is Wireframing?",
    text: "Introduction to Wireframing and its Principles.",
  },
  {
    img: "images/blogPage/Image (9).svg",
    author: "Natalie Craig • 1 Jan 2023",
    title: "How collaboration makes us better designers",
    text: "Collaboration can make our teams stronger.",
  },
  {
    img: "images/blogPage/Image (10).svg",
    author: "Drew Cano • 1 Jan 2023",
    title: "Importance of getting customer feedback",
    text: "Lorem ipsum dolor sit amet consectetur.",
  },
  {
    img: "images/blogPage/Image (11).svg",
    author: "Orlando Diggs • 1 Jan 2023",
    title: "Podcast: Creating a better CX Community",
    text: "Starting a community doesn’t need to be complicated.",
  },
  {
    img: "images/blogPage/Image (12).svg",
    author: "Phoebe Carter • 2 Jan 2023",
    title: "Top 10 Design Tools",
    text: "Explore the most popular tools for modern designers.",
  },
  {
    img: "images/blogPage/Image (13).svg",
    author: "Marcus Tan • 2 Jan 2023",
    title: "Scaling Agile Teams",
    text: "Tips for growing agile practices effectively.",
  },
  {
    img: "images/blogPage/Image (14).svg",
    author: "Sophie Lee • 3 Jan 2023",
    title: "User Research 101",
    text: "The basics of conducting useful user research.",
  },
  {
    img: "images/blogPage/Image (15).svg",
    author: "Liam Smith • 3 Jan 2023",
    title: "Future of Remote Work",
    text: "How remote work is shaping industries.",
  },
  {
    img: "images/blogPage/Image (13).svg",
    author: "Emma Johnson • 4 Jan 2023",
    title: "Design Systems Explained",
    text: "Why every company needs a design system.",
  },
  {
    img: "images/blogPage/Image (12).svg",
    author: "Noah Davis • 4 Jan 2023",
    title: "The Power of Prototyping",
    text: "Build faster and test smarter.",
  },
  {
    img: "images/blogPage/Image (7).svg",
    author: "Olivia Brown • 5 Jan 2023",
    title: "Effective Onboarding",
    text: "Helping users succeed from day one.",
  },
  {
    img: "images/blogPage/Image (10).svg",
    author: "Ethan Wilson • 5 Jan 2023",
    title: "Accessibility in Design",
    text: "Inclusive design practices for everyone.",
  },
  {
    img: "images/blogPage/Image (9).svg",
    author: "Mia Martinez • 6 Jan 2023",
    title: "Minimalism in UI",
    text: "Less clutter, more clarity in interfaces.",
  },
  {
    img: "images/blogPage/Image (6).svg",
    author: "James Anderson • 6 Jan 2023",
    title: "Storytelling in Branding",
    text: "Why stories connect better than features.",
  },
  {
    img: "images/blogPage/Image (11).svg",
    author: "Sophia Nguyen • 7 Jan 2023",
    title: "Emotional Design",
    text: "Creating products that users love.",
  },
  {
    img: "images/blogPage/Image (15).svg",
    author: "Benjamin Clark • 7 Jan 2023",
    title: "Dark Mode Best Practices",
    text: "Designing for comfort and readability.",
  },
  {
    img: "images/blogPage/Image (14).svg",
    author: "Charlotte White • 8 Jan 2023",
    title: "The Rise of No-Code Tools",
    text: "Building apps without writing code.",
  },
  {
    img: "images/blogPage/Image (9).svg",
    author: "Daniel Moore • 8 Jan 2023",
    title: "AI in Everyday Design",
    text: "How AI is changing creative processes.",
  },
];

let currentPage = 1;
const itemPerpage = 6;

const renderCards = (page) => {
  blogCards.innerHTML = ``;

  const start = (page - 1) * itemPerpage;
  const end = start + itemPerpage;
  const pagenatedItem = blogs.slice(start, end);
  console.log(pagenatedItem);

  pagenatedItem.forEach((blog) => {
    const card = document.createElement("div");
    card.classList.add("all-blog-posts-card");
    card.innerHTML = `
      <img src="${blog.img}" alt="">
      <div class="all-blog-posts-card-content">
      <h4>${blog.author}</h4>
            <h2>${blog.title}</h2>
            <p>
              ${blog.text}
            </p>
            
            </div>


  `;
    blogCards.appendChild(card);
  });
};

const renderPagination = () => {
  pagination.innerHTML=``;
  const pageCount = Math.ceil(blogs.length / itemPerpage);

  const prevButton = document.createElement("button");
  prevButton.classList.add("prev");
  prevButton.innerHTML = `
Previous`;
  prevButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      render();
    }
  });
  pagination.appendChild(prevButton);

  for (let i = 1; i <= pageCount; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("pageButton");
    pageButton.textContent = i;

    if (i === currentPage) {
      pageButton.classList.add("active");
    }
    pageButton.addEventListener("click", () => {
      currentPage = i;
      render();
    });
    pagination.appendChild(pageButton);
  }
  const nextButton = document.createElement("button");
  nextButton.classList.add("nextButton");
  nextButton.innerHTML = `
Next`;
  nextButton.addEventListener("click", () => {
    if (currentPage < pageCount) {
      currentPage++;
      render();
    }
  });
  pagination.appendChild(nextButton);
};

const render = () => {
  renderCards(currentPage);
  renderPagination();
};
render();
