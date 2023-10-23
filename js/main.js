document.addEventListener("DOMContentLoaded", function () {
    let hamburgerMenu = document.querySelector('.hamburger-menu');
    let navItem = document.querySelector('.nav-item')

    hamburgerMenu.addEventListener('click', () => {
        navItem.classList.toggle('show');
    })


    let navItemAll = document.querySelectorAll('#nav-a');
    navItemAll.forEach((e) => {
        e.addEventListener('click', () => {
            navItemAll.forEach((item) => item.classList.remove('active'))
            e.classList.add('active')
            if (navItem.classList.contains('show')) {

                navItem.classList.remove('show')

            }
        })
    })

    let navbar = document.querySelector('nav');
    window.addEventListener('scroll', () => {

        if (document.documentElement.scrollTop > 10) {
            navbar.classList.add('active')

        } else {
            navbar.classList.remove('active')
        }

    })







    const featureData = [

        {
            title: "Consultancy",
            description: "We provides the Websites Consultancy with expert consultant on our company to make sure our clients make aright decision.",
            bg: "#fff6d6",
            img: "./images/consultancy.png",
        },
        {
            title: "Tech Solutions",
            description: "We provides Tech Solutions for our clients to solves their problem about technologies as well.",
            bg: "#ebdcf9",
            img: "./images/solutions.png",
        },
        {
            title: "User Dashboard",
            description: "We Also provides User Dashboard to our clients who wanna have an User Dashboard to managed theircompany.",
            bg: "#ddf5fc",
            img: "./images/simple.png",
        },
        {
            title: "Deadline Notifications",
            description: "Besides User Dashboard, we also provides Deadline Notifications for our clients to managed their task.",
            bg: "#dcf6e8",
            img: "./images/deadline.png",
        },
        {
            title: "Data Retrieval",
            description: "We make sure that our clients data is stored with safely in our company servers with daily check ofservers security.",
            bg: "#f8e4e1",
            img: "./images/data.png",
        },
        {
            title: "Flexible System",
            description: "We also provides you the most flexible systems that make you can access your webites anytime andanywhere.",
            bg: "#fbffd4",
            img: "./images/flexible.png",
        },

    ]

    featureData.map((data) => {
        let card = `
    <div class="feature-card" style="background-color: ${data.bg};">
    <img src="${data.img}" alt="img">
    <h2>${data.title}</h2>
    <p>${data.description}</p>
    </div>
    `;
        document.querySelector('.feature-list').innerHTML += card;

    })


    const pricingData = [
        {
            title: "Personal",
            img: "./images/personal.png",
            rate: "$1.99",
            period: "Monthly",
            description: "5x Revision Of The Result, Weekly Maintenance, Custom Domain With Medium Security, 5GB Of Upload & Download, Database Statistics, Exportable Data",
        },
        {
            title: "Growth",
            img: "./images/growth.png",
            rate: "$14.99",
            period: "Monthly",
            description: "10x Revision Of The Result, Weekly Maintenance, Custom Domain With High Security, 10GB Of Upload & Download, Database Statistics, Exportable Data",
        },
        {
            title: "Professional",
            img: "./images/professional.png",
            rate: "$49.99",
            period: "Monthly",
            description: "15x Revision Of The Result, Weekly Maintenance, Custom Domain With Priority Security, 20GB Of Upload & Download, Database Statistics, Exportable Data",
        },
    ]

    pricingData.map((data) => {
        const pricingCard = `
    <div class="pricing-card">
         <h1>${data.title}</h1>
         <img src="${data.img} " alt="">
        <p class="rate">${data.rate} </p>
        <p class="period"> ${data.period} </p>
        <p class="description">
          ${data.description}
         </p>
        <a href="">Get Started</a>
    </div>
    `;

        document.querySelector('.pricing-list').innerHTML += pricingCard;
    })




    const faqsData = [
        {
            title: "1. How does the free trial work?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde est. Sint sequi debitissit, nulla aspernatur qui iusto sed voluptatem suscipit, numquam libero nobis providentitaque, quisquam architecto laudantium.",
            collapseId: "collapse-one"
        },
        {
            title: "2. What happens when my trial ends?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde est. Sint sequi debitissit, nulla aspernatur qui iusto sed voluptatem suscipit, numquam libero nobis providentitaque, quisquam architecto laudantium.",
            collapseId: "collapse-two"
        },
        {
            title: "3. How do i make payments?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde est. Sint sequi debitissit, nulla aspernatur qui iusto sed voluptatem suscipit, numquam libero nobis providentitaque, quisquam architecto laudantium.",
            collapseId: "collapse-three"
        },
        {
            title: "4. Can i upgrade my plan any time?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde est. Sint sequi debitissit, nulla aspernatur qui iusto sed voluptatem suscipit, numquam libero nobis providentitaque, quisquam architecto laudantium.",
            collapseId: "collapse-four"
        },
        {
            title: "5. How do i get in touch with our support system?",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, unde est. Sint sequi debitissit, nulla aspernatur qui iusto sed voluptatem suscipit, numquam libero nobis providentitaque, quisquam architecto laudantium.",
            collapseId: "collapse-five"
        },
    ]



    faqsData.map((item) => {
        const faqsList = `
    <button class="collapse-button" data-target="${item.collapseId}">${item.title}
    <img src="./images/plus-small.png" alt="">
    </button>
    <div id="${item.collapseId}" class="collapse">
    <p> ${item.description}</p>
    </div>
    `

        document.querySelector('.list-faqs').innerHTML += faqsList;
    })



    const collapseButtons = document.querySelectorAll(".collapse-button");
    const collapse = document.querySelectorAll('.collapse')
    collapseButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const targetId = button.getAttribute("data-target");
            const target = document.getElementById(targetId);

            if (target) {
                if (target.classList.contains('show')) {
                    target.style.maxHeight = null;
                    target.classList.remove('show');
                } else {
                    collapse.forEach((el) => {
                        if (el !== target && el.classList.contains('show')) {
                            el.style.maxHeight = null;
                            el.classList.remove('show')
                        }
                    })
                    target.style.maxHeight = target.scrollHeight + "px";
                    target.classList.add('show');



                }
            }
        });
    });
});