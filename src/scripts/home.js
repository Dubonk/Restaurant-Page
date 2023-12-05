import beachImg from '../images/beach.JPEG';
import starFilled from '../svgs/starFilled.svg';

const renderHome = (function () {
    const content = document.getElementById('content');
    const title = document.createElement('h2');
    title.innerText = "Home";

    const beachPic = new Image();
    beachPic.classList.add('homePic');
    beachPic.src = beachImg;



    const para = document.createElement('p');
    para.innerText = "Welcome to Konis, where seaside charm meets culinary excellence! Nestled along the tranquil beachfront, our restaurant offers a serene and mellow environment perfect for unwinding.";

    const reviews = document.createElement('div');

    const review = document.createElement('h3');
    review.innerText = 'Reviews';

    const topReview = document.createElement('div');
    topReview.classList.add('reviews');
    topReview.innerText = "Koni's never fails to amaze! The cozy ambiance and attentive staff make every visit a memorable dining experience.";

    const secondReview = document.createElement('div');
    secondReview.classList.add('reviews');
    secondReview.innerText = "A gem of a find! Koni's offers an eclectic menu that caters to various tastes.";

    const thirdReview = document.createElement('div');
    thirdReview.classList.add('reviews');
    thirdReview.innerText = "Koni's has redefined hospitality! Their commitment to top-notch service paired with the delectable cuisine makes it a standout dining destination.";

    reviews.appendChild(review);
    reviews.appendChild(topReview);
    for (let i = 0; i < 5; i++) { 
        const star = new Image();
        star.src = starFilled;
        star.classList.add('rating');     
        reviews.appendChild(star);
    };
    reviews.appendChild(secondReview);
    for (let i = 0; i < 4; i++) { 
        const star = new Image();
        star.src = starFilled;
        star.classList.add('rating');     
        reviews.appendChild(star);
    };
    reviews.appendChild(thirdReview);
    for (let i = 0; i < 4; i++) { 
        const star = new Image();
        star.src = starFilled;
        star.classList.add('rating');     
        reviews.appendChild(star);
    };


    content.appendChild(title);
    content.appendChild(beachPic);
    content.appendChild(para);
    content.appendChild(reviews);
});

export { renderHome };