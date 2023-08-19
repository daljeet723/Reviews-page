const allReviews=[
  {
    id:1,
    name:"Bill Andreson",
    job:"The Boss",
    img:"file:///C:/Users/ME/Desktop/Full%20Stack%20Development/Javascript_projects/project3_reviews/images/boy-in-glasses.svg",
    text:"Jane is an experienced graphic designer with over 10 years of experience specializing in logo design.Besides hosting several graphic design seminars,Jane creates relevant and original logos that enhance a company's brand recognition. Her unique experience and creative mindset help companies remain current in a consistently evolving market.",
    },
    {
      id:2,
      name:"Alex Suprun",
      job:"Web Developer",
      img:"file:///C:/Users/ME/Desktop/Full%20Stack%20Development/Javascript_projects/project3_reviews/images/female-user-icon.svg",
      text:"Sincerely Jules was created in 2009 when Jules started writing inspirational posts, daily thoughts, and more. However, she became famous for sharing her fashion ideas, turning her blog into a top international fashion sensation. Jules is now one of the leading influencers in the fashion industry.",
    },
    {
      id:3,
      name:"Robin Stevert",
      job:"Software Engineer",
      img:"file:///C:/Users/ME/Desktop/Full%20Stack%20Development/Javascript_projects/project3_reviews/images/1545500043.svg",
      text:"eth Terry started her blog after learning more about the terrible consequences of plastic pollution. She advocates plastic-free living and provides useful information on how to reduce plastic use in our lives. The blog also focuses on various eco-friendly services, such as restaurants, green businesses, and more.",
  },{
      id:3,
      name:"Christrina",
      job:"Ux DEsigner",
      img:"file:///C:/Users/ME/Desktop/Full%20Stack%20Development/Javascript_projects/project3_reviews/images/Girl-With-Long-Hair.svg",
      text:"Love and Life Toolbox is an ultimate blog/guide for people seeking useful advice about relationships and emotional health. The site was founded by Lisa Brookes Kift, a marriage, and family therapist. Lisa has significant experience in MFT and has contributed to popular media, including CNN, Men’s Health, Shape, and Huffington Post.",
  }
];

// select items
const userImage =document.getElementById("image");
const userName =document.getElementById("name");
const userWork =document.getElementById("author");
const userReview =document.getElementById("review");

const nextReview = document.querySelector(".next");
const previousReview = document.querySelector(".previous");
const randomReview = document.querySelector(".Surprise-button");

// set starting item
let currentReview =0;

// load initial items
window.addEventListener('DOMContentLoaded',function(){
getContent(currentReview);
});

//get allcontent from array
function getContent(currentId){
  const item = allReviews[currentReview];
  userImage.src = item.img;
  userName.textContent =item.name;
  userWork.textContent =item.job;
  userReview.textContent =item.text ;
}

//get next review
nextReview.addEventListener("click",function(){
  currentReview++;
  if(currentReview > allReviews.length-1){
    currentReview =0;
  }
  getContent(currentReview);
});

//get previous review
previousReview.addEventListener("click",function(){
  currentReview--;
  if(currentReview < 0){
    currentReview =allReviews.length-1;
  }
  getContent(currentReview);
});

//get random REVIEW:
randomReview.addEventListener("click",function(){
  let random = Math.floor(Math.random() * allReviews.length);
  currentReview =random;
  getContent(currentReview);
})
